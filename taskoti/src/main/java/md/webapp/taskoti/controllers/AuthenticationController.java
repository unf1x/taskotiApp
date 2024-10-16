package md.webapp.taskoti.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import md.webapp.taskoti.auth.AuthenticationRequest;
import md.webapp.taskoti.auth.AuthenticationResponse;
import md.webapp.taskoti.auth.ErrorResponse;
import md.webapp.taskoti.auth.RegisterRequest;
import md.webapp.taskoti.exceptions.EmailAlreadyExistsException;
import md.webapp.taskoti.services.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid @RequestBody RegisterRequest request, BindingResult bindingResult
    ) {
        if (bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getFieldErrors().stream()
                    .map(FieldError::getDefaultMessage)
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(new ErrorResponse(String.join(", ", errors)));
        }

        try {
            return ResponseEntity.ok(service.register(request));
        } catch (EmailAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("Аккаунт с такой почтой существует"));
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ErrorResponse("Произошла ошибка при регистрации"));
        }
    }



    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) throws Exception {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
