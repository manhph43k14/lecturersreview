$(document).ready(function(){
    $(".login-form").hide();
    $(".login").css("background","none");

    $(".login").click(function(){
        $(".signup-form").hide();
        $(".login-form").show();
        $(".signup").css("background","none");
        $(".login").css("background","#fff");
    });

    $(".signup").click(function(){
        $(".signup-form").show();
        $(".login-form").hide();
        $(".signup").css("background","#fff");
        $(".login").css("background","none");
    });

    $(".btn").click(function(){
        $(".input").val("");
    });
});