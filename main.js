Vue.component('cart-item',{
    props:['name','amount'],
    template:'<li>{{name }} - {{ amount}} per Kg</li>'
})

data = {
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
    }
}

var vm = new Vue({
    el:"#app",
    data,
    methods,
    beforeCreate:function(){
        console.log(this.$el); //undefined
        
    }, 
    created: function (){
        console.log(this.$data);
        
    },
    beforeMount: function (){
        console.log(this.$el.innerHTML);//this will gets us the raw template
        
    },
    mounted: function (){
        console.log(this.$el.innerHTML); //this will gets us the HTML 
        
    },
    beforeUpdate: function(){
        console.log(document.getElementById('cart-items').innerHTML.length);//76
        
    },
    updated: function (){
        console.log(document.getElementById('cart-items').innerHTML.length);//102
    }
})


//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);