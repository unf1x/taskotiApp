package md.webapp.taskoti.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class TaskRequest {
    private String title;
    private String description;
    private LocalDate deadline;
    private Integer budget;

}
