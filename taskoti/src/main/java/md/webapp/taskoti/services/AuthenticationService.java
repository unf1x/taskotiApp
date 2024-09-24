package md.webapp.taskoti.services;

import lombok.RequiredArgsConstructor;
import md.webapp.taskoti.auth.AuthenticationRequest;
import md.webapp.taskoti.auth.AuthenticationResponse;
import md.webapp.taskoti.auth.RegisterRequest;
import md.webapp.taskoti.entities.Role;
import md.webapp.taskoti.entities.UserEntity;
import md.webapp.taskoti.exceptions.EmailAlreadyExistsException;
import md.webapp.taskoti.repositories.UserRepository;
import md.webapp.taskoti.services.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) throws Exception {
        if (repository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException(request.getEmail());
        }

        var user = UserEntity.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))//encode before saving to DB
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userId(user.getId())
                .fullName(user.getFullName())
                .build();

    }
    public AuthenticationResponse authenticate(AuthenticationRequest request) throws Exception {
//        authenticationManager делает всю работу
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail()).orElseThrow();//todo споймать и тд
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .userId(user.getId())
                .fullName(user.getFullName())
                .build();
    }
}
