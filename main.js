var app1 = new Vue({
    el:"#app1",
    data:{
        message: "You have loaded this mage on " + new Date().toLocaleString()
    }
})
var app = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue"
    }
})

setTimeout(function(){
    app.message = "Fooobaaar"
}, 2000);

