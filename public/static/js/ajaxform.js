
function ajaxForm(options) {
    options.data = options.data;
    var formData = new FormData();
    for (var i = 0; i < options.data.length; i++) {
        formData.append('files[]', options.data[i])
    }
    options.success = options.success || function () { };
    options.url = options.url || "";
    options.error = options.error || function () { }
    options.progress = options.progress || function () { }
    var xhr = new XMLHttpRequest();

    var loadCompelete = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                options.success.call(this, xhr.responseText)
                // console.log(xhr.responseText)
            } else {
                // console.log(xhr.status)
                options.error.call(this, xhr.status)
            }
        }
    }
    var uploadFailed = function (e) {
        options.error.call(this, e)
        console.log("error")
    }

    var uploadProgress = function (evt) {
        if (evt.lengthComputable) {
            var percentComplete = Math.round(evt.loaded * 100 / evt.total);
            // console.log(percentComplete)
            options.progress.call(this, percentComplete)
        }
        else {
        }
    }


    /* 事件监听 */
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", loadCompelete, false);
    xhr.addEventListener("error", uploadFailed, false);
    // xhr.addEventListener("abort", uploadCanceled, false);
    /* 下面的url一定要改成你要发送文件的服务器url */
    xhr.open("POST", options.url);
    // xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.send(formData);
}

window.ajaxForm = ajaxForm;
