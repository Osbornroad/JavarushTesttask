
;(function() {

    $(document).on('click', '#generatedTestUsers', function (e) {

        e.preventDefault();

        $.ajax({
            url: "/generatedTestUsers",
            contentType: "application/json",
            type: "GET",
            dataType : 'json',
            success: function (userList){
                getAllUsers(userList)
            }
        })

    });

})();

