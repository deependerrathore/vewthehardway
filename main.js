Vue.component('cart-item',{
    props:['name','amount'],
    template:'<li>{{name }} - {{ amount}} per Kg</li>'
})

data = {
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
}

var methods = {
    reverseMessage: function (){
        this.message = this.message.split(' ').reverse().join(' ');
    },
    addFruit: function(){
        this.fruits.push({name:this.fruit,amount: 1});
    }
}

var vm = new Vue({
    data,
    methods,
    beforeCreate:function(){
        console.log(this.$data); //undefined
        
    }, 
    created: function (){
        console.log(this.$data);
        
    }
})

vm.$mount('#app');
//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);