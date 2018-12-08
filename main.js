var app = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue"
    }
});

setTimeout(function(){
    app.message = "Fooobaaar"
}, 2000);