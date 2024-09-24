package md.webapp.taskoti.repositories;

import md.webapp.taskoti.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//нужно наследоваться для работы с сущностью User и базовыми методами JpaRep(save,findAll, findById)
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByEmail(String email);

    boolean existsByEmail(String email);
}
