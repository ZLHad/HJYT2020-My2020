if (document.title == "My2020") {


    //获取浏览器页面可见高度和宽度
    var _PageHeight = document.documentElement.clientHeight,
        _PageWidth = document.documentElement.clientWidth;

    //在页面未加载完毕之前显示的loading Html自定义内容  
    var _LoadingHtml =
        '<div id="loading"> <div id="bg_img"> <img src="img/Loading2.png"></div> <div class="middle"> <div class="bar bar1" ></div> <div class="bar bar2"></div> <div class="bar bar3"></div>  <div class="bar bar4"></div> <div class="bar bar5"></div> <div class="bar bar6"></div><div class="bar bar7"></div> <div class="bar bar8"></div></div></div>  ';

    //监听加载状态改变  
    document.onreadystatechange = completeLoading;
    document.write(_LoadingHtml);
    //加载状态为complete时移除loading效果  
    function completeLoading() {
        if (document.readyState == "complete") {
            // document.getElementById("content").style.display = "none";//隐藏/
            setTimeout(function () {
                $('#loading').fadeToggle(500);
                // loadingMask = document.getElementById('loading');
                // document.getElementById('loading').parentNode.removeChild(loadingMask);
                // console.log(this);
            }, 3000);
            setTimeout(function () {
                $('#our2020').addClass('rotateIn');
            }, 3300);
        }

    }

}



