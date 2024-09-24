package md.webapp.taskoti.controllers;

import lombok.RequiredArgsConstructor;
import md.webapp.taskoti.dto.BioUpdateRequest;
import md.webapp.taskoti.entities.UserEntity;
import md.webapp.taskoti.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/{userId}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable Integer userId) {
        return userRepository.findById(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{userId}/bio")
    public ResponseEntity<UserEntity> updateBio(
            @PathVariable Integer userId,
            @RequestBody BioUpdateRequest request) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setBio(request.getBio()); // Обновляем био
                    UserEntity updatedUser = userRepository.save(user); // Сохраняем изменения в базе данных
                    return ResponseEntity.ok(updatedUser);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
