


 var getAllUsers = function(userList) {
     
     $("input").val("");
     $("#allUsers").empty();
     $(".pagination").empty();
     
     for (var i = 0, page = 0; i < userList.length; i++) {

         var hidden = "hidden";

         if(i < 9) hidden = "";

         if(i % 9 == 0){
             page++
             $(".pagination").append("<li class='paging' data-content=" + page + ">" +
                    "<a href='#'>" + page + "</a>" + 
                 "</li>")
         }

         $("#allUsers").append("<tr class='content success' " + hidden + " data-id="+ page + ">" +

             "<td>" + userList[i].id + "</td>" +
             "<td>" + userList[i].name + "</td>" +
             "<td>" + userList[i].age + "</td>" +
             "<td>" + userList[i].isAdmin + "</td>" +
             "<td>" + userList[i].createdDate + "</td>" +

             "<td>" +
                "<button type='button' data-toggle='modal' data-target='#myModal' id='editUser=" +
                    userList[i].id +"' class='btn btn-warning edit'>" +
                     "edit" +
                 "</button>" +
             "</td>" +

             "<td>" +
             "<div class='remove'>" +
                "<button id='removeUser=" + userList[i].id +"' class='btn btn-danger'>" +
                    "remove" +
                "</button>" +
             "</div>"  +
             "</td>" +

             "</tr>");
     }
    
};

