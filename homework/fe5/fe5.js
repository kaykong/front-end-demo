// 作业 1
// 10 分钟做不出就看提示
//

/*
n 是 int 类型
width 是 int 类型

把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
具体请看测试, 注意, 返回的是 string 类型

返回 string 类型
*/

var fillNumber = function (n, width) {

    if (n == null) {
        n = ''
    }

    var n = String(n)

    if (width == null || width < 1) {
        return n
    }

    var fillNum = width - n.length

    var result = ''
    for (let i = 0; i < fillNum; i++) {
        result += '0'
    }

    result += n

    return result
}


// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
否则, 原样返回, 不做额外处理

返回 string 类型
*/

var rFillChar = function(s, width, fillChar = ' ') {
    if (s == null || width == null || width < s.length) {
        return s
    }

    if (fillChar == null) {
        fillChar = ' '
    }

    var fillNum = width - s.length

    for (let i = 0; i < fillNum; i++) {
        s += fillChar
    }

    return s
}


// 作业 3
// 10 分钟做不出就看提示
//

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

返回 string 类型
*/

var lFillChar = function lFillChar(s, width, fillChar = ' ') {
    if (s == null || width == null || width < s.length) {
        return s
    }
    if (fillChar == null || fillChar.length > 1) {
        fillChar = ' '
    }

    var fillNum = width - s.length

    var fill = ''

    for (let i = 0; i < fillNum; i++) {
        fill += fillChar
    }

    return fill + s
}


// 作业 4
// 10 分钟做不出就看提示
//

/*
s 是 string
width 是 int
fillchar 是 长度为 1 的字符串, 默认为空格 ' '

如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
这种情况下, 让左边的 fillchar 数量小于右边

返回 string 类型
*/

var bothFillChar = function (s, width, fillChar) {

    if (s == null || width == null || width < s.length) {
        return s
    }
    if (fillChar == null || fillChar.length > 1) {
        fillChar = ' '
    }

    var fillNum = width - s.length

    if (fillNum % 2 === 0) {
        //偶数
        fillNum = fillNum / 2
    } else {
        //奇数, 1 3
        //如果是 1, 那么 s = 's*'
        //如果是 3, 那么 s = '*s**'
        fillNum = parseInt(fillNum / 2)
        s += fillChar
    }

    for (let i = 0; i < fillNum; ++i) {
        s = fillChar + s + fillChar
    }

    return s
}

var bothFillChar2 = function (s, width, fillChar) {

    if (s == null || width == null || width < s.length) {
        return s
    }
    if (fillChar == null || fillChar.length > 1) {
        fillChar = ' '
    }

    var fillNum = width - s.length
    var fillLeft = 0;
    var fillRight = 0;

    if (fillNum % 2 === 0) {
        //偶数
        fillNum = fillNum / 2
        fillLeft = fillRight = fillNum
    } else {
        //奇数, 1 3
        //如果是 1, 那么 s = 's*'
        //如果是 3, 那么 s = '*s**'
        fillNum = parseInt(fillNum / 2)
        fillLeft = fillNum
        fillRight = fillNum + 1
    }

    s = lFillChar(s, fillLeft + s.length, fillChar)
    s = rFillChar(s, fillRight+ s.length, fillChar)

    return s
}

// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//

/*
s 是 string
检查 s 中是否只包含空格

返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
*/
var isSpace = function (s) {
    if (s == null || s.length === 0) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            return false
        }
    }

    return true
}


// 作业 6
// 10 分钟做不出就看提示
//

/*
s 是字符串
检查 s 中是否只包含数字
返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
*/
var isDigit = function (s) {
    if (s == null || s.length === 0) {
        return false
    }

    let num = '1234567890'
    for (let i = 0; i < s.length; i++) {
        if (!num.includes(s[i])) {
            return false
        }

    }

    return true
}



// 作业 7
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串开始的所有空格」的字符串

返回 string
*/
var trimLeft = function (s) {

    if (s == null || s.length === 0) {
        return s
    }

    var index = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            index = i
            break
        }
    }

    return s.slice(index)
}



// 作业 8
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串末尾的所有空格」的字符串

返回 string
*/

var trimRight = function (s) {

    if (s == null || s.length === 0) {
        return s
    }

    var index = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            index = i
            break
        }
    }

    return s.slice(0, index + 1)
}


// 作业 9
// 10 分钟做不出就看提示
//

/*
s 是 string
返回一个「删除了字符串首尾的所有空格」的字符串

返回 string
*/

var trim = function (s) {
    s = trimLeft(s)
    s = trimRight(s)
    return s
}

// 作业 10
// 10 分钟做不出就看提示
//

/*
3 个参数 s old new 都是字符串
返回一个「将 s 中的 old 字符串替换为 new 字符串」的字符串
假设 old 存在并且只出现一次

返回 string
*/
var replace = function(s, oldString, newString) {

    if (s == null || s.length === 0 ||
        oldString == null || oldString.length === 0 || s.length < oldString.length) {
        return s
    }

    if (!s.includes(oldString)) {
        return s
    }

    if (newString == null) {
        newString = ''
    }

    let result = ''
    for (let i = 0; i < s.length; i++) {
        let old = s.slice(i, i + oldString.length)
        if (old === oldString) {
            result += newString
            i += oldString.length - 1
            continue
        }
        result += s[i]
    }

    return result
}

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    } else {
        log('测试成功')
    }
}
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    ensure(replace('hello', 'world', 'gua') === 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}
