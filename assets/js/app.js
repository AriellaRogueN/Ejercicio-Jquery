$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#nav-btn').click(function() {
       
        $("#modal1").show();

    });

    $("#ad-btn").click(function() {
        var nombre = $("#icon_prefix").val();
        var telefono = $("#icon_telephone").val();

        $(".container").append("<div class = 'col s12 m7'>" +
            
            "<div class = 'card horizontal'>" +
            "<div class = 'card-stacked' >" +
            "<div class = 'card-content' >" +
            "<h4>"+ nombre + " </h4>" + 
            "<p>" + telefono + "</p>" +
            "</div></div></div></div>")
    
    $("#modal1").hide();


    })

});


