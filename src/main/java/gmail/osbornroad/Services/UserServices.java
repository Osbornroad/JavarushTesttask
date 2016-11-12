package gmail.osbornroad.Services;

import gmail.osbornroad.Entity.User;

import java.util.List;

public interface UserServices {

    void addUser(User user);

    void removeUser(User user);

    void updateUser(User user);

    List<User> findByNameUser(String name);

    User findByIdUser(String id);

    List<User> findAllUser();
}
