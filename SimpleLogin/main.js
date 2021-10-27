function newA(){
    var a = document.querySelector("#login");
    var b = document.querySelector("#register");
    var c = document.querySelector("#c");
    b.style.display = "block";
    a.style.display = "none";
    c.innerHTML = "Register";
}

function SignIn(){
    var a = document.querySelector("#login");
    var b = document.querySelector("#register");
    var c = document.querySelector("#c");
    b.style.display = "none";
    a.style.display = "block";
    c.innerHTML = "Sign in";
}

function changeColor(a){
    let r = document.documentElement;
    r.style.setProperty('--default-color',a);
}