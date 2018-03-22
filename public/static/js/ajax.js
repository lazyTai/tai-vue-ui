function ajax(options) {
    var oAjax = null;
    options = options || {};
    options.data = options.data || {};
    options.type = options.type || 'get';
    options.timeout = options.timeout || 0;
    options.progress = options.progress || function () {}
    options.before = options.before || function () {}

    var onloadCompelete = function () {
        options.success && options.success(oAjax.responseText)
    }

    var uploadProgress = function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            // console.log(percentComplete)
            options.progress || options.progress.call(this, percentComplete)
        } else {
            options.progress || options.progress.call(this, false)
        }
    }
    //整理data数据  
    options.data.t = Math.random(); //给data创建一个t 键  
    var arr = [];
    for (var key in options.data) {
        arr.push(key + '=' + encodeURIComponent(options.data[key]));
    }
    var str = arr.join('&');

    if (window.XMLHttpRequest) { //1  
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (options.type == 'get') {
        oAjax.open('get', options.url + '?' + str, true); //2  

        /* before send */
        options.before.call(this);
        oAjax.send(); //3  
    } else { //post  
        /* before send */
        options.before.call(this);
        
        oAjax.open('post', options.url, true);

        //设定ajax的头信息  
        oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        oAjax.send(str);

    }

    oAjax.onreadystatechange = function () { //4  
        if (oAjax.readyState == 4) {
            if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304) {
                clearInterval(timer);
                // options.success && options.success(oAjax.responseText)
            } else {
                options.error && options.error(oAjax.status);
            }
        }
    };
    if (options.timeout) {
        var timer = setTimeout(function () {
            alert('超时了');
            oAjax.abort(); //终止加载    
        }, options.timeout);
    }

    oAjax.addEventListener("load", onloadCompelete, false);
    oAjax.addEventListener("progress", uploadProgress, false);
    // oAjax.addEventListener("error", uploadFailed, false);
    // oAjax.addEventListener("abort", uploadCanceled, false);

}