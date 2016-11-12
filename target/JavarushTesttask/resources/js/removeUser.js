
;(function() {
    
    $(document).on('click', '.remove', function (e) {

        e.preventDefault();
        var link = "/" + e.target.id;
        
        $.ajax({
                url: link,
                contentType: "application/json",
                type: "POST",
                dataType : 'json',
                success: function (userList){
                getAllUsers(userList)
                    
                }
            }
        )
    });

})();

