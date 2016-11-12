package gmail.osbornroad.DAO;

import gmail.osbornroad.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByName(String name);

}
