let form = document.getElementById("form");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.value == "admin" && pass.value == 123){
        window.location.href="http://127.0.0.1:5500/index2.html#"
    }
    else{
        alert("Tên đăng nhập hoặc mật khẩu sai")
    }
})

