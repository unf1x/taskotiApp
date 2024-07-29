package md.webapp.taskoti.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotEmpty(message = "name shouldn't be empty")
    @Pattern(regexp = "[A-Z]\\w+ [A-Z]\\w+", message = "Write your name in format: Name Surname")
    private String fullName;


    @NotEmpty(message = "Запишите адрес электронной почты")
    @Email(message = "Адрес электонной почты не валиден")
    @Size(max = 30, message = "Почта должна быть менее 35 символов")
    private String email;


    @Size(min = 3, max = 20, message = "password should be between 3 and 20 characters")
    private String password;
}
