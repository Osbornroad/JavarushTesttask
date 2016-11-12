
;(function() {

    $(document).on('click', '.edit', function (e) {

        e.preventDefault();
        var link = "/" + e.target.id;
        
        $(document).on('click', '#submitEditUser', function (e) {
            e.preventDefault();
            
        var user = {}
        user["name"] = $("#nameEdit").val();
        user["age"] = $("#ageEdit").val();
        user["isAdmin"] = $("#isAdminEdit").val() == "true" ? true : false;
            
        $.ajax({
                url: link,
                contentType: "application/json",
                type: "POST",
                dataType : 'json',
                data : JSON.stringify(user),
                success: function (userList){
                    getAllUsers(userList)
                    link = null;
                }
 
            }
        )
    });

    });

})();

