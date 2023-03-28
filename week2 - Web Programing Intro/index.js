function printPyramid(n) {
    var pyramid = "";
    for (var i = 1; i <= n; i++) {
        // 공백 문자열 추가
        for (var j = 1; j <= n - i; j++) {
        pyramid += " ";
        }
        // 별표 문자열 추가
        for (var k = 1; k <= 2*i - 1; k++) {
        pyramid += "*";
        }
        // 개행 문자 추가
        pyramid += "\n";
    }
    console.log(pyramid);
}

printPyramid(5);