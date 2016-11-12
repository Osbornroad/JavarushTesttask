
;(function() {

    $(document).on('click', '#sortByName', function (e) {

        e.preventDefault();
        
        $.ajax({
                url: "/sortByName",
                contentType: "application/json",
                type: "GET",
                dataType : 'json',
                success: function (userList){
                    getAllUsers(userList)
                }
            }
        )
    });

})();