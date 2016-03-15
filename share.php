<!doctype html>
<html lang=zh>
<head>
    <meta charset=utf-8>
    <meta http-equiv=Cache-Control content="no-cache, no-store, must-revalidate">
    <meta http-equiv=Pragma content=no-cache>
    <meta http-equiv=Expires content=0>
    <meta name=viewport content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>释放心中的野兽</title>
    <link rel=stylesheet
          href="//global.speedx.com/css/normalize.css">
    <style type=text/css>
        body {
            font-family: 'Microsoft Yahei', STHeiti, sans-serif;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            background: #e2e2e2;
        }

        .image-area {
            margin: 13px auto 13px;
            padding: 8px;
            width: 86%;
            background: #fdfcf7;
            box-sizing: border-box;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            box-shadow: 0px 1.33px 2.67px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
        }

        .image-inner {
            overflow: hidden;
            position: relative;
        }

        .image-inner img {
            width: 100%;
        }

        .image-fix {
            position: absolute;
            top: -9px;
            left: -9px;
            right: -9px;
            bottom: -9px;
        }

        .image-area img {
            width: 100%;
        }

        .image-area span {
            margin-top: 13px;
            display: block;
        }

        .banner {
            margin: 13px auto 69px;
            width: 86%;
            padding: 8px;
            background: #fdfcf7;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            box-shadow: 0px 1.33px 2.67px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
            position: relative;
            box-sizing: border-box;
        }

        .banner .mask {
            position: absolute;
            top: 8px;
            left: 8px;
            right: 8px;
            bottom: 8px;
            box-shadow: inset 1px 1px 0px rgba(0, 0, 0, 0.1), inset -1px -1px 0px rgba(0, 0, 0, 0.1);
        }

        .banner .mask a {
            display: block;
            width: 100%;
            height: 100%;
        }

        .banner img {
            display: block;
            margin: 0 auto;
        }

        .button-area {
            width: 100%;
            position: fixed;
            bottom: 0;
            height: 56px;
            background-color: #f4f4f4;
            box-shadow: 0px 1.33px 2.67px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
        }

        .button-area a {
            display: block;
            height: 40px;
            margin: 8px 3%;
            border: 0;
            border-radius: 4px;
            cursor: pointer;
            font-size: 15px;
            color: #fff;
            background: linear-gradient(#6492fb, #4e78d9);
            background: -webkit-linear-gradient(#6492fb, #4e78d9);
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            outline: none;
            text-align: center;
            line-height: 40px;
            text-decoration: none;
        }
        .top-button-area {
            width: 100%;
            position: fixed;
            top: 0;
            height: 40px;
            background-color: #ff0000;
            /*box-shadow: 0px 1.33px 2.67px 0px rgba(0, 0, 0, 0.16), 0px 2px 4px 0px rgba(0, 0, 0, 0.16);*/
        }

        .top-button-area h2 {
            display: block;
            height: 40px;
            margin: 1px 3%;
            border: 0;
            /*border-radius: 4px;*/
            cursor: pointer;
            font-size: 15px;
            color: #fff;
            background: linear-gradient(#6492fb, #6492fb);
            background: -webkit-linear-gradient(#6492fb, #6492fb);
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            outline: none;
            text-align: center;
            line-height: 40px;
            text-decoration: none;
        }
    </style>
    <style>
        .image-fix{ top: 0; left: 0; right: 0; bottom: 0;}
        .button-area a{ background: -webkit-linear-gradient(#e21501, #c61826);}
        .top-button-area h2{ background: -webkit-linear-gradient(#ff0000, #ff0000);}
    </style>
</head>
<body>

<div class=top-button-area><h2>长按图片保存后，分享到朋友圈</h2></div>

<div class=image-area style="margin-top: 55px;">
    <div class=image-inner>
        <img src=https://speedx.com/weixin/woyao/img/mask.png>

        <div class=image-fix >
            <img src=https://speedx.com/weixin/woyao/files/<?php echo $_GET['id']; ?>.png id=post>
        </div>
    </div>
</div>
<div class=button-area><a href=https://speedx.com/weixin/woyao>制作我的“释放心中的野兽”海报</a></div>
<script>

    if (location.hash === '#no_bottom_btn') {
        location.hash = '';
        document.getElementsByClassName('banner')[0].style.marginBottom = '13px';
        document.getElementsByClassName('button-area')[0].style.display = 'none';
    }
</script>
</body>
</html>