package md.webapp.taskoti.controllers;

import lombok.RequiredArgsConstructor;
import md.webapp.taskoti.dto.BioUpdateRequest;
import md.webapp.taskoti.models.User;
import md.webapp.taskoti.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Integer userId) {
        return userRepository.findById(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{userId}/bio")
    public ResponseEntity<User> updateBio(
            @PathVariable Integer userId,
            @RequestBody BioUpdateRequest request) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setBio(request.getBio()); // Обновляем био
                    User updatedUser = userRepository.save(user); // Сохраняем изменения в базе данных
                    return ResponseEntity.ok(updatedUser);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
