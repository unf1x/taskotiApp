package md.webapp.taskoti;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
		info = @Info(
				title = "Taskoti API",
				version = "1.0",
				description = "Документация API для платформы Taskoti"
		)
)

@SpringBootApplication
public class TaskotiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskotiApplication.class, args);
	}
}
