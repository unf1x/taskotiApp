package md.webapp.taskoti.services;

import lombok.RequiredArgsConstructor;

import md.webapp.taskoti.dto.TaskRequest;
import md.webapp.taskoti.models.Task;
import md.webapp.taskoti.repositories.TaskRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    public void createTask(TaskRequest request){
        var task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .deadline(request.getDeadline())
                .budget(request.getBudget())
                .category(request.getCategory())
                .build();
        taskRepository.save(task);
    }
}
