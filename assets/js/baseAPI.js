// 没调用$.get() 或 $.post() 或 $.ajax的时候
// JQuery会先调用 $.ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给 Ajax提供的配置对象
// 这个函数依赖JQuery 所以引入要放在 Jquery之后
$.ajaxPrefilter(function (options) {
    // console.log(options.url);
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // console.log(options.url);
})