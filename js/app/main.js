/*
global
	require, jQBrowser, $,window,document
*/
//配置页面加载模块参数
require.config({
    waitSeconds: 0,
    /*加载等待时间*/
    //添加加载异步加载CSS的插件
    map: {
        '*': {
            'css': '../lib/css.min'
        }
    },
    //配置Javascript文件映射路径
    paths: {
        jquery: '../lib/jquery.min',
        echarts: "../lib/echarts.min",
        echartsConfig: "chart/echartsConfig"
    },
    shim: {
        /*模块依赖关系 demo*/
        echartsConfig: {
            deps: ['echarts']
        }
    }
});


if (typeof jQBrowser != 'undefined') {
    if (jQBrowser.name == 'msie' && jQBrowser.versionNumber <= 8) {
        var k = confirm('您的浏览器版本太旧，网页不再支持老版本浏览器，是否跳转到建议页面？')
        if (k) {
            window.location.href = "np.html";
        }
    }
}
var webComm = {};
//简单示例
require(["chart/exampleChart"], function(LvChart) {
    var chartObj = new LvChart('exampleChart');
    //此处可以换成ajax请求接口数据
    var data = [];
    for (var i = 0; i <= 360; i++) {
        var t = i / 180 * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
    }
    chartObj._setOptionData(data);
    chartObj.getDataBack();
});
