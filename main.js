var app = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue",
        name:{
            first: "Deepender",
            last: "Rathore"
        },
        show:true,
        fruits:[
            {name:"apple", amount: 2},
            {name:"banana", amount: 10},
            {name:"pear", amount: 5},
        ]
    }
})


setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);