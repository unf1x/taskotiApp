package md.webapp.taskoti.models;


import ch.qos.logback.core.model.INamedModel;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
@Entity
@Data//Генерирует геттеры и сеттеры для всех полей, а также методы equals,
// hashCode, toString и конструктор для всех полей.
@Builder//Генерирует шаблонный класс Builder для удобного создания экземпляров класса.
@NoArgsConstructor//генерирует конструктор без аргументов
@AllArgsConstructor//генерирует конструктор со всеми аргументов
@EntityListeners(AuditingEntityListener.class)//Это слушатель, который автоматически обновляет поля,
// аннотированные как @CreatedDate и @LastModifiedDate, при создании и обновлении сущностей.
@Table(name = "app_users")
public class User implements UserDetails {
    //некоторые методы UserDetails не просит переопределять из-за идентичного названия полей
    //Например, password, аннотация Data уже сделала геттр для этого поля
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(name = "password")
    private String password;


    @Column(name = "email")

    private String email;


    @Column(name = "full_name")
    private String fullName;


    @Column(name = "bio")
    @Size(min = 10, max = 200)//НЕ РАБОТАЕТ НАДО ФИКС //TODO
    private String bio;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;


    @Column(name = "updated_at")
    private LocalDateTime updatedAt;


    @Column(name = "profile_picture")
    private String profilePicture;


    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

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
