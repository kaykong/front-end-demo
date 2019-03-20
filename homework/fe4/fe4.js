// 作业 1
// 10 分钟做不出就看提示
//
var find = function (s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    if (s1 == undefined || s1.length == 0) {
        return -1
    }

    for (let i = 0; i < s1.length; ++i) {
        if (s1[i] == s2) {
            return i
        }
    }

    return -1

}

var test_find = function () {
    ensure(find(undefined, 'w') == -1, "test_find失败")
}

/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    if (s == undefined || s.length == 0) {
        return s
    }

    let result = ''
    for (let i = 0; i < s.length; i++) {
        let index = find(upper, s[i])
        result += lower[index]
    }

    return result
}

var test_lowercase = function () {
    ensure(lowercase(upper) == lower, "test_lowercase测试失败")
}

/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数
*/

var uppercase = function (s) {
    if (s == undefined || s.length == 0) {
        return s
    }

    let result = ''
    for (let i = 0; i < s.length; i++) {
        let index = find(lower, s[i])
        if (index != -1) {
            result += upper[index]
        }
        //result += upper[index]
    }

    return result
}
