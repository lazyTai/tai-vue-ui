import { ETIME } from "constants";

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
/**************************************时间格式化处理************************************/
"yyyy-MM-dd HH:mm:ss"
export function dateFtt(fmt, val) { //author: meizz   
    var date = new Date(val);
    var o = {
        "M+": date.getMonth() + 1,                 //月份   
        "d+": date.getDate(),                    //日   
        "h+": date.getHours(),                   //小时   
        "m+": date.getMinutes(),                 //分   
        "s+": date.getSeconds(),                 //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function changeCursorPos(dom, pos) {
    dom.focus();
    // // 获取选定对象
    // var selection = getSelection()
    // var range = selection.getRangeAt(0)
    // // debugger
    // // 获取光标对象的范围界定对象，一般就是textNode对象
    // var textNode = range.startContainer;
    // // 获取光标位置
    // var rangeStartOffset = range.startOffset;
    // // 文本节点在光标位置处插入新的表情内容
    // //  textNode.insertData(rangeStartOffset, emojiInput.value)
    // // 光标移动到到原来的位置加上新内容的长度
    // range.setStart(textNode, rangeStartOffset + textNode.length)
    // range.collapse(true)
    //  // 插入新的光标对象
    //  selection.addRange(range)

    let selObj = window.getSelection();
    selObj.selectAllChildren(dom);
    selObj.collapseToEnd()
    // console.log(selObj.anchorNode)
    // console.log(selObj.anchorOffset)
    // console.log(selObj.focusNode)
    // console.log(selObj.rangeCount)


}