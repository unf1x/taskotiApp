package md.webapp.taskoti.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data//Генерирует геттеры и сеттеры для всех полей, а также методы equals,
// hashCode, toString и конструктор для всех полей.
@Builder//Генерирует шаблонный класс Builder для удобного создания экземпляров класса.
@NoArgsConstructor//генерирует конструктор без аргументов
@AllArgsConstructor//генерирует конструктор со всеми аргументов
@Table(name = "tasks")
public class Task {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "deadline")
    private LocalDate deadline;

    @Column(name = "budget")
    private Integer budget;

    @Column(name = "category")
    private String category;
}
