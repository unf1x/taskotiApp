package md.webapp.taskoti.converters;

import md.webapp.taskoti.dto.TaskDto;
import md.webapp.taskoti.entities.TaskEntity;
import org.springframework.stereotype.Component;

@Component
public class TaskEntityToDtoConverter {
    public TaskDto makeTaskDto(TaskEntity taskEntity){
        return TaskDto.builder()
                .id(taskEntity.getId())
                .title(taskEntity.getTitle())
                .description(taskEntity.getDescription())
                .deadline(taskEntity.getDeadline())
                .budget(taskEntity.getBudget())
                .category(taskEntity.getCategory())
                .build();
    }
}
