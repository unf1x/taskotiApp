package md.webapp.taskoti.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing//Это позволяет автоматически заполнять поля в сущностях,
// аннотированные как @CreatedDate и @LastModifiedDate, при сохранении и обновлении данных.
public class JpaAuditingConfig {
    // Этот класс будет включать аудит для вашего приложения
}
