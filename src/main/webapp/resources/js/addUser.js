
;(function() {
    
   $(document).on('click', '#addUser', function (e) {

       e.preventDefault();
       
       var user = {}
       user["name"] = $("#name").val().length == 0 ? "anonymous" : $("#name").val();
       user["age"] = $("#age").val().replace(/[^\d]/g, 0);
       user["isAdmin"] = $("#isAdmin").val() == "true" ? true : false;
       
        $.ajax({
                url: "/addUser",
                contentType: "application/json",
                type: "POST",
                dataType : 'json',
                data : JSON.stringify(user),
                success: function (userList){
                getAllUsers(userList)
                    
                }

            }
        )
    });
    
})();