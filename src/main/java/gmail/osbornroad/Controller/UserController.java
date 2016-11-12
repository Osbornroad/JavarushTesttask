package gmail.osbornroad.Controller;

import gmail.osbornroad.Entity.User;
import gmail.osbornroad.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserServices userServices;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    private List<User>  addUser(@RequestBody User user){
        userServices.addUser(user);
        List<User> userList = userServices.findAllUser();
        return  userList;
    }

    @RequestMapping(value = "/editUser={id}", method = RequestMethod.POST)
    private List<User> editUser(@PathVariable String id, @RequestBody User user){
        User oldUser = userServices.findByIdUser(id);
        if(user.getName() != "") oldUser.setName(user.getName());
        if(user.getAge() > 0)oldUser.setAge(user.getAge());
        oldUser.setIsAdmin(user.getIsAdmin());
        userServices.updateUser(oldUser);
        List<User> userList = userServices.findAllUser();
        return  userList;
    }

    @RequestMapping(value = "/removeUser={id}", method = RequestMethod.POST)
    private List<User> removeUser(@PathVariable String id){
        User user = userServices.findByIdUser(id);
        userServices.removeUser(user);
        List<User> userList = userServices.findAllUser();
        return  userList;
    }

    @RequestMapping(value = "/findByName", method = RequestMethod.POST)
    private List<User> findByNameUser(@RequestBody User user){
        List<User> userList = userServices.findByNameUser(user.getName());
        System.err.println(userList.size());
        return  userList;
    }

    @RequestMapping("/findAllUser")
    private List<User> findAllUser(){
        List<User> userList = userServices.findAllUser();
        return  userList;
    }

    @RequestMapping("/sortByName")
    private List<User> sortByName(){
        List<User> userList = userServices.findAllUser();
        userList.sort((u1, u2)->u1.getName().compareToIgnoreCase(u2.getName()));
        return  userList;
    }

}
