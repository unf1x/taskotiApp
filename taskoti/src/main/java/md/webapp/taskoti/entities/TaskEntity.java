package md.webapp.taskoti.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder//Генерирует шаблонный класс Builder для удобного создания экземпляров класса.
@NoArgsConstructor//генерирует конструктор без аргументов
@AllArgsConstructor//генерирует конструктор со всеми аргументов
@Table(name = "tasks")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class TaskEntity {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(name = "title")
    String title;

    @Column(name = "description")
    String description;

    @Column(name = "deadline")
    LocalDate deadline;

    @Column(name = "budget")
    Integer budget;

    @Column(name = "category")
    String category;
}
