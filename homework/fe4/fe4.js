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
/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位
*/


/**
 * 将字符右移 n 位
 *
 * @param char
 * @param n
 */
var shiftedChar = function (char, n) {

    //大写 or 小写
    let index = find(lower, char)
    if (index !== -1) {
        //小写字符
        let i = (index + n + 26) % 26
        char = lower[i]
    } else {
        index = find(upper, char)
        if (index !== -1) {
            //大写字符
            let i = (index + n + 26) % 26
            char = upper[i]
        }
    }

    return char
}

var shiftedChar_test = function (c, n) {
    return shiftedChar(c, n)
}

var encryption = function (string, n) {

    if (string === undefined || string.length === 0) {
        return string
    }

    let result = "";
    for (let i = 0; i < string.length; i++) {
        let c = shiftedChar(string[i], n)
        //log("encryption:", string[i], '>>', n, '>>', c)
        result += c
    }

    return result
}

var encryption_test = function () {
    return encryption("abc123  OO", 1)
}

var var_test = function () {
    for (var i = 0; i < 4; i++) {
        log("fori: ", i)
    }

    console.log(i)
}

var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'
var decryption = function () {
    for (let i = 1; i < 27; i++) {
        let s = encryption(code, i)
        log("解密:" , i, s)
    }
}

var decryption_test = function () {
    decryption()
}