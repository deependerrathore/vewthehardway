Vue.component('cart-item',{
    props:['name','amount'],
    template:'<li>{{name }} - {{ amount}} per Kg</li>'
})

const vm = new Vue({
    el:"#app",
    data:{
        isHidden: false,
        message: "Hello Vue",
        name:{
            first: "Deepender",
            last: "<b>Rathore</b>"
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
        addFruit: function(){
            this.fruits.push({name:this.fruit,amount: 1});
        },
        countFruit:function(){
            return this.fruits.length;
        }
    }
})


//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);