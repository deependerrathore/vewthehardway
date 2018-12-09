Vue.component('cart-item',{
    props:['item'],
    template:'<li>{{ item.name }}</li>'
})

var app = new Vue({
    el:"#app",
    data:{
        message: "Hello Vue",
        name:{
            first: "Deepender",
            last: "Rathore"
        },
        show:true,
        fruit:'grapse',
        fruits:[
            {name:"apple", amount: 2},
            {name:"banana", amount: 10},
            {name:"pear", amount: 5},
        ]
    },
    methods:{
        reverseMessage: function (){
            this.message = this.message.split(' ').reverse().join(' ');
        },
        addFruit: function(){
            this.fruits.push({name:this.fruit,amount: 1});
        }
    }
})


//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);