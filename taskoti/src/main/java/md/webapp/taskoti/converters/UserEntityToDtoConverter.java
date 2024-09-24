package md.webapp.taskoti.converters;

import md.webapp.taskoti.dto.UserDto;
import md.webapp.taskoti.entities.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserEntityToDtoConverter {
    public UserDto makeUserDto(UserEntity userEntity){
        return UserDto.builder() // Используется паттерн "строитель" для создания объекта
                .id(userEntity.getId()) // Передача значения поля id из сущности в DTO
                .password(userEntity.getPassword()) // Передача значения поля name
                .email(userEntity.getEmail())
                .fullName(userEntity.getFullName())
                .bio(userEntity.getBio())
                .createdAt(userEntity.getCreatedAt()) // Передача значения поля createdAt
                .updatedAt(userEntity.getUpdatedAt())
                .profilePicture(userEntity.getProfilePicture())
                .role(userEntity.getRole())
                .build(); // Создание объекта ProjectDto с указанными значениями
    }
}
