
var ShowImg = function (cfg, type, containerimg) {
    //根据类型 选择 相应的css样式
    cfg.forEach(function (item) {
        $(containerimg).addClass(type)
        $(containerimg).append('<div class="show-item show-item-' + type + '"><img src=' + item.imgSrc + '><div class="text">' + item.text + '</div><div class="backface">' + item.backText + '</div></div>');
    })
    $(".turn").css("left", 450);
    //输入每张图片的信息;
    var imgArr = [];
    for (var i = 0; i < $(".show-item").length; i++) {
        imgArr[i] = {}
        imgArr[i].img = $(".show-item")[i];
        imgArr[i].zIndex = i;
    }

    // 根据总的图片数量计算差值;

    setInterval(function () {
        position = 500;
        rotate("Y");

    }, 1200);
    var rowStart = $(imgArr[1].img).width() * 30;


    //旋转
    var difference = 360 / imgArr.length;
    var degStart = 2000;
    var position = 2000;
    function rotate(X) {
        $(".turn").css("left", 500);
        imgArr.forEach(function (elem, index) {
            var deg = (degStart + difference * index);
            var transform = "rotate" + X + "(" + deg + "deg) translateZ(" + position + "px)"
            $(imgArr[index].img).css({
                transform: transform
            });
        })
        degStart += difference;
    }

}
