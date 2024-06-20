$(document).ready(function(){
    $("#dark-mode").click(function(){
        $("body").addClass("dark-mode");
    });

    $("#light-mode").click(function(){
        $("body").removeClass("dark-mode");
    });
});