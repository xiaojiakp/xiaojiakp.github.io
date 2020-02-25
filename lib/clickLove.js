// !function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);

//实现自己定义鼠标点击样式
// (function(){
//     window.onclick = function(event){
//         var heart = document.createElement("b");	//创建b元素
//         heart.onselectstart = new Function('event.returnValue=false');	//防止拖动
//         var element = ["🌱","just do it","🌾","🍀","don"+"'"+"t give up","🍂","🌻","try it again","🍃","never say die","🌵","🌿","🌴"];     //把对应的元素放到数组里面，随机数实现取出
//         document.body.appendChild(heart).innerHTML = element[Math.floor(Math.random()*13)];		//将b元素添加到页面上
//         heart.style.cssText = "position: fixed;left:-100%;";	//给b元素设置样式
        
//     //     function o(e) {
//     //     var a = t.createElement("div");
//     //     a.className = "heart",
//     //     s.push({
//     //         el: a,
//     //         x: e.clientX - 5,
//     //         y: e.clientY - 5,
//     //         scale: 1,
//     //         alpha: 1,
//     //         color: c()
//     //     }),
//     //     t.body.appendChild(a)
//     // }
        


        
        
//         var f = 14, 	// 字体大小
//             x = event.clientX - f / 2, // 横坐标
//             y = event.clientY - f, // 纵坐标
//             c = randomColor(),  // 随机颜色
//             a = 1, 				// 透明度
//             s = 1.2; 			// 放大缩小

//         var timer = setInterval(function(){		//添加定时器
//             if(a <= 0){
//                 document.body.removeChild(heart);
//                 clearInterval(timer);
//             }else{
//                 heart.style.cssText = "font-size:"+ f +"px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
//                 y--;
//                 a -= 0.016;
//                 s += 0.002;
//             }
//         },15)
//     }
//      // 随机颜色
//     function randomColor() {
//         return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
//     }
// }());




!function(e, t, a) {

    function r() {
        for (var e = 0; e < s.length; e++) 
        if(s[e].alpha <= 0) {
            t.body.removeChild(s[e].el), s.splice(e, 1); 
        }else{
            s[e].y--, 
            s[e].scale += .004, 
            s[e].alpha -= .013, 
            s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999";    
        }
  
        requestAnimationFrame(r)
    }

    //点击事件
    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            o(e)
        }
    }

    //添加一个元素
    function o(e) {
        var a = t.createElement("div");
        a.className = "heart",
        s.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: c()
        }),
        t.body.appendChild(a)
    }


    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    //随机颜色
    function c() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }

    // var s = ["🌱","just do it","🌾","🍀","don"+"'"+"t give up","🍂","🌻","try it again","🍃","never say die","🌵","🌿","🌴"];
    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
    
    //设置爱心持续时间
    function(e) {
        setTimeout(e, 1e3 / 60)
    },
    // i(".heart{width: 10px;height: 10px;position: fixed;}"),
    // background: #f00;
    // transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);
    // .heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}
    i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
    n(),
    r()
} (window, document);



// .heart{
//     width: 10px;
//     height: 10px;
//     position: fixed;
//     background: #f00;
//     transform: rotate(45deg);
//     -webkit-transform: rotate(45deg);
//     -moz-transform: rotate(45deg);}
// .heart:after,.heart:before{
//     content: '';
//     width: inherit;
//     height: inherit;
//     background: inherit;
//     border-radius: 50%;
//     -webkit-border-radius: 50%;
//     -moz-border-radius: 50%;
//     position: fixed;}
// .heart:after{
//     top: -5px;}
// .heart:before{left: -5px;}