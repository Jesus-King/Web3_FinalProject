$('.actions').change(function (event) {
    if ($(this).val() === 'Update Job') {
                
        $("#modalUpdateJob").modal({
            fadeDuration: 100
        });  
    }
    else if($(this).val() === 'Delete Job') {
        
        $("#fade").modal({
            fadeDuration: 100
        });  
    }
    else if($(this).val() === 'Activate Job') {

        alert("Activated");
    }
    else if($(this).val() === 'Deactivate Job') {
        
        alert("Deactivated");
    }
    $(event.target).prop('selectedIndex', 0);
});

$(document).ready(function() {
    $(".view_applicant").click(function(event) { 

        $("#modalJobApplicants").modal({
            fadeDuration: 100
        });  
    });
});