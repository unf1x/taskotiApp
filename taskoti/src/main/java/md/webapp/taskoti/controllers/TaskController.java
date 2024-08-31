package md.webapp.taskoti.controllers;

import md.webapp.taskoti.dto.TaskRequest;
import md.webapp.taskoti.models.Task;
import md.webapp.taskoti.services.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/task")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("create")
    public ResponseEntity<?> createTask(@RequestBody TaskRequest request) {
        try {
            taskService.createTask(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Task created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while creating the task");
        }
    }


    //возвращаем клиенту список всех задач по /alltasks
    @GetMapping("/alltasks")
    public List<Task> allTasks() {
        return taskService.allTasks();
    }
}
