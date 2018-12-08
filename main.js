var app1 = new Vue({
    el:"#app1",
    data:{
        message: "You have loaded this mage on " + new Date().toLocaleString()
    }
})
var app = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue",
        name:{
            first: "n/a",
            last: "n/a"
        }
    }
})


setTimeout(() => app.message = "Updated Hello Vue", 1000);
setTimeout(() => app.name = {first:"Deepender",last:"Rathore"},2000);
setTimeout(() => app.name.first = "Narender",3000);
//setTimeout(() => app.name.initials = "NS",3000); //this will not work as we don't have any property in data
//Even if we have above problem then also it will not work because when we are setting but app.name on line 20 initials will lost as we are not setting anyting there

setTimeout(() => Vue.set(app.name,'initials','NS'),4000);