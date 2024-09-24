package md.webapp.taskoti.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;
import md.webapp.taskoti.entities.Role;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {

    Integer id;

    String password;

    String email;

    String fullName;

    String bio;

    LocalDateTime createdAt;

    LocalDateTime updatedAt;

    String profilePicture;

    Role role;
}
