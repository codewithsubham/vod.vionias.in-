<?php
header('Access-Control-Allow-Origin:*');
	/*
    include("akamai_token_v2.php");


    $conf = new Akamai_EdgeAuth_Config();
    $t = new Akamai_EdgeAuth_Generate();
    $conf->set_field_delimiter("~");
    $conf->set_key("d4121cb37d1edfbfeb76212064193925");
    $conf->set_algo("sha256");
    $conf->set_window(5*3600); //Seconds
    $conf->set_acl("/*"); // /* <- for all
    $token = $t->generate_token($conf);
	$token_urlencode = urlencode($token);
		
	*/
	$referer = $_SERVER["HTTP_REFERER"] ; //substr($_SERVER["HTTP_REFERER"],0,43);

	$url = parse_url($referer)['host'];
	
	if($url == "www.visionias.in" || $url == "visionias.in" ) {
		//https://visionias.akamaized.net/video/smil:".$_GET["id"].".smil/manifest.mpd?hdnts=".$token_urlencode."\""; 
		$video_url="http://104.199.144.5:1935/vod/smil:".$_GET["id"].".smil/manifest.mpd";
		//$video_url="https://visionias.akamaized.net/video/smil:".$_GET["id"].".smil/manifest.mpd?hdnts=".$token_urlencode."\"";
		//$video_url="http://104.199.144.5:1935/vod/smil:8580201909161700.smil/manifest.mpd";
		//$video_url = "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd";
	}
	else {
		$video_url="http://172.16.0.2:1935/vod/smil:italy.smil/manifest.mpd";
	}
	
	readfile($video_url);
?>
