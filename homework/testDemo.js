// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    } else {
        log("测试成功", condition)
    }
}