package md.webapp.taskoti.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import md.webapp.taskoti.services.JwtService;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component//класс является компонентом, управляемым Spring.
@RequiredArgsConstructor//предоставляется библиотекой Lombok и автоматически создает конструктор,
// в который внедряются все final поля класса. Не надо инициализацию делать вручную полей.
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(//принимает 3 параметра:
        @NonNull HttpServletRequest request,//Объект, представляющий HTTP-запрос от клиента.
        @NonNull HttpServletResponse response,//Объект, представляющий HTTP-ответ сервера.
        @NonNull FilterChain filterChain)// Цепочка фильтров, через которую проходит запрос.
    throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        //заголовок Authorization содержит весь JWT, включая все его
        // части (header, payload и signature)
        final String jwt;
        final String userEmail;
        if(authHeader == null ||!authHeader.startsWith("Bearer "))
            //"Bearer" указывает, что переданный токен является JWT токеном.
            {
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(7);
        try {
            userEmail = jwtService.extractUsername(jwt);//извлекает почту пользователя из jwt
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        if (userEmail!=null && SecurityContextHolder.getContext().getAuthentication() == null){
            //если почта не равна нулю и пользователь еще не аунтифицирован
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);
            //загружаем инфу о человеке по email
            try {
                if (jwtService.isTokenValid(jwt, userDetails)){
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,//authToken создается с использованием userDetails, которые представляют аутентифицированного пользователя.
                            null,//пароль не используется так как аутентификация уже выполнена с использованием JWT
                            userDetails.getAuthorities()//возвращает коллекцию ролей или прав доступа пользователя.
                    );
                    authToken.setDetails(
                            new WebAuthenticationDetailsSource().buildDetails(request)//создает WebAuthenticationDetails, представляющий
    //              дополнительные детали запроса, такие как IP-адрес, с которого происходит запрос.
                    );
                    SecurityContextHolder.getContext().setAuthentication(authToken);
    //                устанавливает созданный authToken в текущий контекст безопасности (SecurityContext).
    //                        Это позволяет Spring Security знать, что пользователь аутентифицирован и какие у него права доступа.
                }
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        filterChain.doFilter(request, response);//HTTP запрос будет передан на обработку контроллеру
        // или другой части приложения, которая обрабатывает этот маршрут.
    }
}
