$(document).ready(function() {
    $(".signup-form").hide();
    // $(".signup").css("background", "none");

    $(".login").click(function() {
        $(".signup-form").hide();
        $(".signin-form").show();
        // $(".signup").css("background", "none");
        // $(".login").css("background", "#fff");
    });

    $(".signup").click(function() {
        $(".signup-form").show();
        $(".signin-form").hide();
        // $(".signup").css("background", "#fff");
        // $(".login").css("background", "none");
    });

    // $(".btn").click(function() {
    //     $(".input").val("");
    // });
});