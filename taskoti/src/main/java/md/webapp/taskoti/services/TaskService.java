package md.webapp.taskoti.services;

import lombok.RequiredArgsConstructor;

import md.webapp.taskoti.dto.TaskRequest;
import md.webapp.taskoti.entities.TaskEntity;
import md.webapp.taskoti.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    public void createTask(TaskRequest request){
        var task = TaskEntity.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .deadline(request.getDeadline())
                .budget(request.getBudget())
                .category(request.getCategory())
                .build();
        taskRepository.save(task);
    }

    //возвращает список всех задач из базы данных,
    public List<TaskEntity> allTasks(){
        return taskRepository.findAll();
    }
}
