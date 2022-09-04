function print() {
    window.alert("欢迎来到这个页面");
}

function check() {
age = prompt("请输入你的年龄:");
if (age > 18){
    alert("成年了，可以进入");
    print();
}
else
    alert("未成年不可进入");
}
