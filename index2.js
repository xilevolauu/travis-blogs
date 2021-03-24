let form = document.getElementById("form");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.value == "admin" && pass.value == 123){
        window.location.href="https://xilevolauu.github.io/travis-blogs.github.io/login.html"
    }
    else{
        alert("Tên đăng nhập hoặc mật khẩu sai")
    }
})

