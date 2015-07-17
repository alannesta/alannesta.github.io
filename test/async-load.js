console.log('this file is loaded asynchronoulsy');
var k = 0;
for (var i = 0; i < 10000; i++) {
    for (var j = 0; j < 10000; j++) {
        k++;
    }
}

setGlobal();

function setGlobal() {
    window.alan = 1;
}
