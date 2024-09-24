package md.webapp.taskoti.entities;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
@Entity
@Getter
@Setter
@Builder//Генерирует шаблонный класс Builder для удобного создания экземпляров класса.
@NoArgsConstructor//генерирует конструктор без аргументов
@AllArgsConstructor//генерирует конструктор со всеми аргументов
@EntityListeners(AuditingEntityListener.class)//Это слушатель, который автоматически обновляет поля,
// аннотированные как @CreatedDate и @LastModifiedDate, при создании и обновлении сущностей.
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "app_users")
public class UserEntity implements UserDetails {
    //некоторые методы UserDetails не просит переопределять из-за идентичного названия полей
    //Например, password, аннотация Data уже сделала геттр для этого поля
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;


    @Column(name = "password")
    String password;


    @Column(name = "email")

    String email;


    @Column(name = "full_name")
    String fullName;


    @Column(name = "bio")
    @Size(min = 10, max = 200)//НЕ РАБОТАЕТ НАДО ФИКС //TODO
    String bio;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    LocalDateTime createdAt;


    @Column(name = "updated_at")
    LocalDateTime updatedAt;


    @Column(name = "profile_picture")
    String profilePicture;


    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    Role role;

    @Override
    //возвращает коллекцию GrantedAuthority, представляющую роли пользователя
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
