package md.webapp.taskoti.repositories;

import md.webapp.taskoti.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//нужно наследоваться для работы с сущностью User и базовыми методами JpaRep(save,findAll, findById)
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
