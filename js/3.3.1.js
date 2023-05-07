// setTimeout(function () {
//     console.log("I waited I second!");
// }, 1000);
//
// function wait(message) {
//     setTimeout(function timer(){
//         console.log(message);
//     }, 2000);
// }
//
// wait("fjdsogos fsdg");

// for (let i = 1; i <= 5; i ++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000);
// }


for (let i=1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}
