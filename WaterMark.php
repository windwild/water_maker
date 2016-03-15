 <?php

// $waterMark = new WaterMark();
// echo $waterMark->doit("91ad9fb7fa2b945796769d0f0f2780dd.png",['']);
// echo $waterMark->doit("1a8cee5d5fc624b41bb6443732c37d2f.png");



class WaterMark
{

    function doit($filename,$words){
        $sourcefile = $filename;
        if(getimagesize($filename)[0]<720){
            $sourcefile = $this->resize(720,$filename.'resize',$filename);
        }else{
            $sourcefile = $this->resize(720,$filename.'resize',$filename);
        }

        $image = imagecreatefrompng($sourcefile);
        if($image){
            imagefilter($image, IMG_FILTER_GRAYSCALE);
            imagefilter($image, IMG_FILTER_BRIGHTNESS, -30);
            $image = $this->txt($image,$words);
            $image = $this->mask($image);
            $rand_value = md5(''.rand(0,9999999));
            $markedImageFilename = 'files/'.$rand_value. '.png';
            imagepng($image, $markedImageFilename);
            $md5_value = md5_file($markedImageFilename);
            rename($markedImageFilename, 'files/'.$md5_value. '.png');
            return $md5_value;
        }
    }

    function txt($img,$t){
        $length = 0;
        for ($i=0; $i <count($t) ; $i++) {
            if(strlen($t[$i]) != 0) $length += 1;
        }
        $w = imagesx($img);
        $h = imagesy($img);
        $txt_start_x = $w*25/720;
        $font_size = 22*1280/$h;
        $font_size_large = 32*1280/$h;
        $gap_size = 20*1280/$h;
        $txt_start_y = $h-(160*1280/$h)-$length*$font_size-($length-1)*$gap_size;
        $txt_2016_start_y = $txt_start_y - 60*1280/$h;
        $white_color = imagecolorallocatealpha($img,255,255,255,0);
        $font = './font.ttf';
        imagettftext($img,$font_size_large,0,$txt_start_x,$txt_2016_start_y,$white_color,$font,"2016");
        for ($i=0; $i <$length ; $i++) {
            if($i == $length-1){
                imagettftext($img,$font_size,0,$txt_start_x,$txt_start_y+($gap_size+$font_size)*$i,$white_color,$font,$t[count($t)-1]);
            }else{
                imagettftext($img,$font_size,0,$txt_start_x,$txt_start_y+($gap_size+$font_size)*$i,$white_color,$font,$t[$i]);
            }
        }
        
        return $img;
    }
     

    function mask($image){
        $footer = imagecreatefrompng('markers/footer2.png');
        $footer_w = imagesx($footer);
        $footer_h = imagesy($footer);

        $t2016 = imagecreatefrompng('markers/t2016.png');
        $t2016_w = imagesx($t2016);
        $t2016_h = imagesy($t2016);

        $corner = imagecreatefrompng('markers/corner.png');
        $corner_w = imagesx($corner);
        $corner_h = imagesy($corner);

        $slogan = imagecreatefrompng('markers/slogan.png');
        $slogan_w = imagesx($slogan);
        $slogan_h = imagesy($slogan);

        $qr = imagecreatefrompng('markers/qr.png');
        $qr_w = imagesx($qr);
        $qr_h = imagesy($qr);

        // $logo = imagecreatefrompng('markers/logo.png');
        // $logo_w = imagesx($logo);
        // $logo_h = imagesy($logo);

        $w = imagesx($image);
        $h = imagesy($image);

        // imagecopy($image,$logo,$w*25/720,$h*30/1280,0,0,$logo_w,$logo_h);
        imagecopy($image,$slogan,($w-$slogan_w)/2,$h*70/1280,0,0,$slogan_w,$slogan_h);
        imagecopy($image,$corner,$w*25/720,($h-(170*$h/1280)),0,0,$corner_w,$corner_h);
        imagecopy($image,$footer,$w*25/720,($h-(60*$h/1280)),0,0,$footer_w,$footer_h);
        // imagecopy($image,$qr,($w-$w*200/720),($h-(240*$h/1280)),0,0,$qr_w,$qr_h);
        return $image;
    }

    function resize($newWidth, $targetFile, $originalFile) {

        $info = getimagesize($originalFile);
        $mime = $info['mime'];

        switch ($mime) {
                case 'image/jpeg':
                        $image_create_func = 'imagecreatefromjpeg';
                        $image_save_func = 'imagejpeg';
                        $new_image_ext = 'jpg';
                        break;

                case 'image/png':
                        $image_create_func = 'imagecreatefrompng';
                        $image_save_func = 'imagepng';
                        $new_image_ext = 'png';
                        break;

                case 'image/gif':
                        $image_create_func = 'imagecreatefromgif';
                        $image_save_func = 'imagegif';
                        $new_image_ext = 'gif';
                        break;

                default: 
                        throw new Exception('Unknown image type.');
        }

        $img = $image_create_func($originalFile);
        list($width, $height) = getimagesize($originalFile);

        $newHeight = ($height / $width) * $newWidth;
        $tmp = imagecreatetruecolor($newWidth, $newHeight);
        imagecopyresampled($tmp, $img, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        if (file_exists($targetFile)) {
                unlink($targetFile);
        }
        $image_save_func($tmp, "$targetFile.$new_image_ext");
        return "$targetFile.$new_image_ext";
    }



}



