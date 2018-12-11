Vue.component('cart-item',{
    props:['name','amount'],
    template:'<li>{{name }} - {{ amount}} per Kg</li>'
})

data = {
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
}

var methods = {
    reverseMessage: function (){
        this.message = this.message.split(' ').reverse().join(' ');
    },
    addFruit: function(){
        this.fruits.push({name:this.fruit,amount: 1});
    },
    displayFavouriteFruit: function(){
        return 'Your favourite fruit is ' + this.fruit;
    }
}

var vm = new Vue({
    el:"#app",
    data,
    methods
})


//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);