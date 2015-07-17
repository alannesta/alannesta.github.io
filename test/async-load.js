console.log('this file is loaded asynchronoulsy');
var k = 0;
for (var i = 0; i < 5000; i++) {
    for (var j = 0; j < 2000; j++) {
        k++;
    }
}
window.alan = 1;