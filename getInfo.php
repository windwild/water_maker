<?php

require 'WaterMark.php';

try{
	if(isset($_POST['image'])){
		$words = [];
		for ($i=0; $i < 9; $i++) { 
			if(strcmp($_POST['word'][$i],'我要') != 0){
				$words[] = $_POST['word'][$i];
			}
		}
		if(strlen($_POST['identity']) > 0){
			$words[] = '我是'.$_POST['identity'];
		}else{
			$words[] = '我是野兽';
		}
		$data = urldecode($_POST['image']);
		$data = str_replace('data:image/png;base64,', '', $data);
		$data = str_replace(' ', '+', $data);
		$data = base64_decode($data);
		$md5_value = md5($data);
		$filename = $md5_value . '.png';
		file_put_contents('files/'.$filename, $data) or die("不能写入文件");
		// start water mark

		$waterMark = new WaterMark();
		// $markedImage = $waterMark->doit('files/'.$filename,$words);
		$result_md5 = $waterMark->doit('files/'.$filename,$words);
		if($result_md5 == -1){
			$result['code'] = 0;
			$result['data']['image'] = 'toosmall.jpg';
			$result['data']['weiboUrl'] = 'https://speedx.com/weixin/woyao/share.php?id=toosmall';
			$result['data']['weixinUrl'] = '';
			$result['data']['download'] = '';
			echo json_encode($result);
			return;
		}
		// return data
		$base_url = 'https://speedx.com/weixin/woyao/';
		$marked_image_url = $base_url.'files/'.$result_md5.'.png';
		$result['code'] = 0;
		$result['data']['image'] = $marked_image_url;
		$result['data']['weiboUrl'] = $base_url.'share.php?id='.$result_md5;
		$result['data']['weixinUrl'] = $base_url.'share.php?id='.$result_md5;
		$result['data']['download'] = $marked_image_url;
		$result['errInfo'] = [];
		echo json_encode($result);
	}else{
		echo "Error: No Image File\n";
	}
}
catch(Exception $e){
	echo 'Message: ' . $e->getMessage();
}
