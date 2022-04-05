// 没调用$.get() 或 $.post() 或 $.ajax的时候
// JQuery会先调用 $.ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给 Ajax提供的配置对象
// 这个函数依赖JQuery 所以引入要放在 Jquery之后
$.ajaxPrefilter(function (options) {
    // console.log(options.url);
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // console.log(options.url);
    // 统一为有权限的接口，设置 headers请求头

    if (options.url.indexOf('/my/') >= 0) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    // 全局统一挂载 complete回调函数
    options.complete = function (res) {
        console.log(res);
        // 在 complete回调函数中，可以使用responseJSON拿到服务器响应回来的数据
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            console.log(1);
            // 强制清空token
            localStorage.removeItem('token');
            // 跳转到登录页
            location.href = 'login.html';
        }
    }

})