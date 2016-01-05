function fnGetData() {
    var a = document.getElementById("userName").value;
    var b = document.getElementById("Amount").value;
    var c = document.getElementById("Password").value;
    alert("abc");
    localStorage.setItem('uname', a);
    localStorage.setItem('amt', b);
    localStorage.setItem('pwd', c);
    var d = localStorage.getItem('uname');
    var e = localStorage.getItem('amt');
    var f = localStorage.getItem('pwd');
    document.write("user details:");
    document.write("username:" + d + "  " + "amount:" + e + "  " + "password:" + f);
    alert("Welcome to Userdetails:");
}
