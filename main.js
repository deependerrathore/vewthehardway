Vue.component('cart-item',{
    props:['name','amount'],
    template:'<li>{{name }} - {{ amount}} per Kg</li>'
})

const vm = new Vue({
    el:"#app",
    data:{
        fName: "Deepender",
        lName: "Rathore",
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
        }
        
    },
    computed:{
        countEntry:function(){
            return this.fruits.length;
        },
        countFruit:function(){
            return this.fruits.map(x=>x.amount).reduce((acc,cur) => acc + cur);
        },
        fullName: {
            get:function(){
                return this.fName + ' ' + this.lName; 
            },
            set:function(newName){
                var names = newName.split(' ');
                this.fName = names[0];
                this.lName = names[names.length - 1];
            }
        }
    }
})


//setTimeout(() => app.fruits.push({name:"Orange",amount: 7}),2000);