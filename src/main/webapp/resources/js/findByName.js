

;(function() {

    $(document).on('click', '#findByName', function (e) {

        e.preventDefault();

        var user = {}
        user["name"] = $("#findName").val();

        $.ajax({
                url: "/findByName",
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