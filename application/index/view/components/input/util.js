export function isEmail(strEmail) {
    //声明邮箱正则
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //对输入的值进行判断
    if (!myreg.test(strEmail)) {
        return false;
    } else {
        return true
    }
}
export function isShit(myreg, str) {
    //声明邮箱正则
    //对输入的值进行判断
    if (!myreg.test(str)) {
        return false;
    } else {
        return true
    }
}