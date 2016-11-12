
;(function() {

    $(document).on('click', '.paging', function (e) {
        $('.content').hide(); // спрячем все
        $('.content[data-id='+$(this).data('content')+']').show();

    });

})();

