package md.webapp.taskoti.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
//Позволяет определять свои правила безопасности, добавлять кастомизацию для работы с аутентификацией
// и авторизацией, настраивать фильтры безопасности и обрабатывать другие аспекты, связанные
// с безопасностью веб-приложения.
@RequiredArgsConstructor
public class SecurityConfig {
    private final JWTAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable);//защиту CSRF (подделка межсайтовых запросов) для
        // конфигурации http. AbstractHttpConfigurer::disable — это ссылка на метод, отключающий CSRF.
        http.authorizeHttpRequests(rQ -> {
            rQ.requestMatchers("/api/v1/auth/**").permitAll();// разрешает доступ без аутентификации для URL
            rQ.requestMatchers("/api/search/", "/api/profile/", "/signout/").authenticated();//требует аутентификации для URL,
        });
        http.sessionManagement(sessionAuthenticationStrategy ->
                sessionAuthenticationStrategy.sessionCreationPolicy(SessionCreationPolicy.STATELESS));//так как jwt, а не cookie
        http.authenticationProvider(authenticationProvider);
        // для выполнения аутентификации пользователя на основе предоставленных учетных данных
        // (например, имя пользователя и пароль)
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        //добавляет кастомный фильтр аутентификации на основе JWT (jwtAuthenticationFilter) перед
        // стандартным фильтром Spring Security, который обрабатывает аутентификацию на
        // основе имени пользователя и пароля (UsernamePasswordAuthenticationFilter).
        return http.build();
    }
}
