
;(function() {

    $(document).on('click', '#findAllUser', function (e) {
        
        e.preventDefault();

        $.ajax({
            url: "/findAllUser",
            contentType: "application/json",
            type: "GET",
            dataType : 'json',
            success: function (userList){
                getAllUsers(userList)
            }
        })
        
    });
    
})();

