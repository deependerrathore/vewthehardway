export default{
    name: "App",
    data(){
        return {
            pageTitle: "myCart",
            loginTitle: "Login",
            username: null
        };
    },
    methods:{
        login:function(){
            var value = document.getElementById("login").innerHTML;
            if(value === "Login"){
                Router.push({name:"login"});
            }else if(value === "Logout"){
                sessionStorage.clear();
                document.getElementById("login").innerHTML = "Login";
                document.getElementById("welcome").style.display = "none";
                Router.push({name:"welcome"});
            }
        }
    },
    udpated:function(){
        this.userName = sessionStorage.getItem("username");
    }
}