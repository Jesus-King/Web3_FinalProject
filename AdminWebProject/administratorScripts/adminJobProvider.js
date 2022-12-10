$('.actions').change(function (event) {
    if ($(this).val() === 'Update Company') {

        
        $("#modalUpdateJob").modal({
            fadeDuration: 100
        });  
    }
    else if($(this).val() === 'Delete Company') {
        
        $("#fade").modal({
            fadeDuration: 100
        });  
    }
    $(event.target).prop('selectedIndex', 0);
});