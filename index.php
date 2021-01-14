<?php 
	
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


	$user_agent = $_SERVER["HTTP_USER_AGENT"];

	//$video_url="http://104.199.144.5/bplayer/video.php?id=".$_GET["id"];

	//	$video_url="video.php?id=".$_GET["id"];


	$referer = true;// $_SERVER["HTTP_REFERER"];
	//4471202007311000 id

	if(preg_match("/visionias/i", $referer) || !preg_match("/kecua/i", $referer)) {
		// For iPad/iphone
		if (preg_match("/iPad/i", $user_agent) || preg_match("/iPhone/i", $user_agent)) {
		//	$video_source="hls: \"http://104.199.144.5:1935/vod/smil:".$_GET["id"].".smil/playlist.m3u8\"";
			$video_source="hls: \"https://visionias.akamaized.net/video/smil:".$_GET["id"].".smil/playlist.m3u8?hdnts=".$token_urlencode."\"";
		}
		else {
			$video_source="dash: \"http://104.199.144.5:1935/vod/smil:".$_GET["id"].".smil/manifest.mpd\"";
		//	$video_source="dash: \"".$video_url."\"";
		//	$video_source = "dash: \"https://visionias.akamaized.net/video/smil:".$_GET["id"].".smil/manifest.mpd?hdnts=".$token_urlencode."\"";
		}
	}else {
		print "This page must be accessed within an iFrame.";
		exit();
	}
	
	// user details
	$user_details = "";//$student_mobile ? $student_mobile : $student_email;
?>

<html>
	<HEAD><TITLE>Visionias vod player</TITLE>
		<link rel="stylesheet" href="css/style.css" crossorigin="anonymous">
		<link rel="stylesheet" href="css/mobile.css" crossorigin='anonymous'>
		<link rel="shortcut icon" href="img/svg/SVG/icon.svg">
		<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
	
		<script type="text/javascript" src="js/dash.all.min.js"></script>
		<script type="text/javascript" src="js/Error.js"></script>

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
	</head>

	<body>
	
	<div id='playerContainers'>
		<div id="playerContainer" style="height: 100%; width: 100%;"></div>
	</div>
	
<script>	
		
const conf = {
	userName:"", 
	videoId:'<?php echo $_GET["id"] ?>',
	
	container: "playerContainer",
	get link(){
		
			return {
				<?php echo $video_source ?>
				}
		
	},

	poster: "http://localhost/player/poster.jpg",
	controls: {
		play: "true",
		seekBack: "true",
		seekFwd: "true",
		seekInterval: 10,
		sticky: "true",
		autoHide: "true",
		quality:"true",
		bookmark:false,
	},

	overlay: {
		show:false,
 		overlayText: '<?php echo $user_details?>', 
		pposX: 100,
		pposY: 200,
		displayDuration: 4000, // maximum time to be displayed milisec
		displayTimeout: 60 * 1000 * 20 , // maximum time after when is should be displayed again 
		minDisplayDuration:2000, // minimum time to be displayed
		minDisplayTimeout:60 * 1000 * 15 ,// min time after when is should be displayed again
		avoidVerticalArea:20 // percentage to avoid vertical screen , note range to be  kept in between 1 to 100 and should be an int value;
	},

	overlayPhoneNumber:{
        show:false,
        posX:10,
		posY:10,
		positionX:'left',
        positionY:'top',
        mobileNumber:'<?php echo $user_details ?>' 
    },

	refValidate: {
		image: "http://192.169.10.5:1935/vod/smil:42151608201701.smil/image.gif",
		timeout: 300
	},

	bookmark: {
		storage: "db",
		configFile: "bookmark/config.php",
	}
};
</script>
	
<!--<script type="text/javascript" src="js/index.js"></script>-->
	<script type="text/javascript" src="js/indexmin.js"></script>

</body>

</html>
