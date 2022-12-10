$('.actions').change(function (event) {
    if ($(this).val() === 'Update Profile') {
        
        $(".new_form").modal({
            fadeDuration: 100
        });  
    }
    else if($(this).val() === 'Delete Profile') {


        $("#fade").modal({
            fadeDuration: 100
        });  

    }
    $(event.target).prop('selectedIndex', 0);
});