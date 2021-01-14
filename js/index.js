

var videoDurationText;
var player;
let timeUpdateOnSeekUpdate = 0;
let stickyToggleStatus = false;
let loader = false;
let videoIsBeingPlayed = false;
let hide =  true;
let settingShowStatus = true;
let bookmarkShowStatus = true;
let timer; // timer for setTimeout function
let clicked = 0;
let isLive;
let showQualityMenuButton = true;


const iconsName = {

    CenterPlay:'icon-round-play_circle_outline-24px',
    CenterPause:'icon-round-pause_circle_outline-24px',
    FastForward:'icon-round-fast_forward-24px',
    FastBackward:'icon-round-fast_rewind-24px',
    Pip:'icon-round-picture_in_picture_alt-24px',
    bookmark:'icon-round-collections_bookmark-24px',
    FullScreen:'icon-round-fullscreen-24px',
    ExitfullScreen:'icon-round-fullscreen_exit-24px',
    VolumeMute:'icon-round-volume_off-24px',
    VolumeHigh:'icon-round-volume_up-24px',
    Setting:'icon-round-settings-24px',
    Play:'icon-round-play_arrow-24px',
    Pause:'icon-round-pause-24px',
    bookmarkList:'icon-round-format_list_bulleted-24px',
    delete:'icon-round-delete_outline-24px',
    refresh:'icon-round-cached-24px'
}		

//var availableQuality;
initPlayer(conf);
drawControlBar();
	
// function that checks whether device is android or not;



function initPlayer(conf)
{	

	 window.mobileAndTabletcheck = () => {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	  };
	
	window.playbackSpeeds = [0.5, 1.0, 1.25, 1.50, 2.0, 2.5, 3.0];
	window.playSpeed = 1;
	window.mute = 0;
	window.seekInterval = 15;
	//window.availableQuality;
	
	window.videoDuration =1;
	window.seeking = 0;
	window.stickyControl = 0;
	window.menuOpen = 0;
	window.seekbar = '';
	window.overlayDrawn = false;
	window.remainingTimeDisplay = 0;
	//window.videoDurationText;
	if(conf.controls.seekInterval)
		seekInterval=conf.controls.seekInterval;
	
	window.playbackProgress;
	
	//Create video element
	window.container = document.getElementById(conf.container);
	window.video = document.createElement("video");
	

	video.id = "videoPlayer";

	video.classList.add("videoPlayer");
	video.ondurationchange = onDurationChange;
	video.autoplay = true;
	video.onloadedmetadata = videoMetadataLoaded;
	video.oncanplay = onCanPlay; //Stream init
	video.onplay = onVideoPlay;
	video.onpause = onVideoPause;
	video.ontimeupdate = onPlaybackTimeUpdate;
	if(localStorage.getItem("lastVideoDuration")){
		video.currentTime =  localStorage.getItem('lastVideoDuration');
	
		//localStorage.clear();
	}else{
		video.currentTime = 0;
	
	}
	video.onwaiting = (event) => {
		// changing that loaded boolean value from false to true so center play pause button wont work
			loader = true;
			
			showloader();
			showControl();
		
		};
	video.oncanplaythrough = (event) => {
		//document.querySelector('.videoplayer-loader').style.display = 'none';
		loader = false;
		clearLoader();
		document.querySelector('.btnBigPlay').style.zIndex = 0;
		
		if(video.onplay){
			localStorage.clear();
			HideControls(1000);
		}
	};
	video.onplaying = (event) => {

		loader = false;
		clearLoader();
		document.querySelector('.btnBigPlay').style.zIndex = 0;
		
		if(video.onplay){
			HideControls(1000);
		}
	}
	container.appendChild(video);
	window.source = document.createElement('source');
	video.appendChild(source);

	container.classList.add("playerContainer");
	setPoster();
	
	if(conf.link.hls)
	{	
		showQualityMenuButton = false;
		videoURL = conf.link.hls;	
		conf.controls.quality = false;
		video.src =  conf.link.hls;
		video.type = 'application/x-mpegURL';
		video.load();
		
	};

		
		
	
	
	if(conf.link.dash)
	{
		
		videoURL=conf.link.dash;
		urlType="dash";
		player = dashjs.MediaPlayer().create();
		
        player.initialize(video, videoURL, false);
        
        player.updateSettings({
            streaming: {
				stableBufferTime: 600,
				bufferPruningInterval:null,
				lowLatencyEnabled:false,
				jumpGaps:true
                
			},
			
        })
		

		window.player = player
		player.attachView(video);
		player.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, onDashFragmentLoad, this);
		player.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, onDashStreamInitialized, this);
	//	window.player = player;
		player.on('error', function(e) {
			localStorage.setItem("lastVideoDuration", video.currentTime);
			player.reset();
			controls.remove();
			ErrorCode("something went wrong please try again later" , 'btnBigPlay' , 'refreshVideo');
		});
		
		video.load();
	
	 }
	else if(conf.link.mp4)
	{	
		//TOTO handle multiple URL
		videoURL=conf.link.mp4;
		urlType="mp4";
		video.src = videoURL;
		availableQuality = 1;
		//TODO On Stream init
	}
	else if(conf.webm)
	{
		videoURL=conf.webm;
		urlType="webm";
		video.src = videoURL;
		availableQuality = 1;
		//TODO On Stream init
	}
}


function onHlsError(event, data)
{
	var errorType = data.type;
	var errorDetails = data.details;
	var errorFatal = data.fatal;
	//console.log("HLS Error, Type: "+errorType+" Details: "+errorDetails+" Fatal: "+errorFatal);
	if(errorFatal){
		if(errorCode.Hls[errorType][errorDetails]){
			ErrorCode(errorCode.Hls[errorType][errorDetails] , 'btnBigPlay' , 'refreshVideo');
		}else{
			ErrorCode(errorCode.undefined, 'btnBigPlay' , 'refreshBookmark' , 'refreshVideo');
	
		}
		}

}

/*************************************************************/
// Function Defs
/*************************************************************/
// adding a listener on playercontainer 
//that call a function which adds a overlay to screen for play pause and seekforward and seek backward; 


function ErrorCode(errorString , parent , classname){
	document.querySelector(`.${parent}`).innerHTML = `<div class="error">
	<p>${errorString}</p>
	<button class="${classname}"><svg class="create_icon">
	<use xlink:href="img/svg/sprite.svg#${iconsName.refresh}"></use>
</svg></button>
</div>`

document.querySelector(`.${parent}`).style.display = 'block';

}
function setPoster(){
	if(conf.poster)
		video.poster = conf.poster;
}
function isPipSupported(){
	return true;
}

function videoMetadataLoaded(){

	
	videoDuration = video.duration;
	if(conf.link.dash){
		document.querySelector('#bufferProgress').max = videoDuration;
		
	}

	if(conf.controls!="false")
	
	initSeekbar();
	initProgress();
	createPlaybackSpeedMenu();
	hidePlaybackSpeedMenu();

	if(conf.link.dash){
		createQualityMenu();
		hideQualityMenu();
	}
	videoDuration = video.duration;
	videoDurationText = convertToTimecode(videoDuration);
	document.getElementById("btnTimeDisplay").innerHTML = convertToTimecode(video.currentTime) + " / " +videoDurationText;
	if(conf.overlay)
		initOverlay();
}	
function initProgress(){
	playbackProgress.min = 0;
	playbackProgress.max = Math.floor(videoDuration);
	playbackProgress.value = 0;
}
function onCanPlay(){


}
function onDurationChange()
{
	return;
}

function onHlsFragmentLoad()
{
	onFragmentLoad(false);
}
function onDashFragmentLoad(e)
{
	onFragmentLoad(e);
}
function onFragmentLoad(e)
{	
	
	let bufferProgress = document.getElementById("bufferProgress");
	if(!e){
		let progress;
		progress = (video.buffered.end(video.buffered.length-1) * 100);
		bufferProgress.value = progress;
		return;
	}

	if(isFinite(e.request.startTime) && e.request.mediaType == 'video'){
        bufferProgress.value = e.request.startTime;
	}

}
function onHlsStreamInitialized()
{
	availableQuality = player.qualityLevels();
	}

function onDashStreamInitialized()
{
	availableQuality = player.getBitrateInfoListFor("video");
	isLive = player.isDynamic();
}

//Add buttons to upper control bar

// using a tracker to add 5 element in controlsLower-child1 amd 6 element controlsLower-child2;

let elementTracker = 0;

function addControlButton(id, class1, class2, label, tooltip, listener , svg , side , wrapper='') 
{	
	var elm = document.createElement("button");
	elm.id = id;
	elm.classList.add(class1);
	if(class2!="")
		elm.classList.add(class2);
	if(svg!="")
		elm.innerHTML =	`<svg class="create_icon">
							<use xlink:href="img/svg/sprite.svg#${svg}"></use>
						</svg>`;
		
	if(listener)
	elm.addEventListener("click", listener);
	if(side =='left'){
		if(wrapper !=  ''){
			document.querySelector(`.${wrapper}`).appendChild(elm)	
		}else{
			document.querySelector(".controlsLower-child1").appendChild(elm);
		}
	}else if(side = 'right'){
		document.querySelector(".controlsLower-child2").appendChild(elm);
			
	}
	
}
function addControlDiv(classname , side){

	let div = document.createElement('div');
	div.className = classname;
	
	if(side =='left'){
		document.querySelector(".controlsLower-child1").appendChild(div);	
	}else if(side = 'right'){
		document.querySelector(".controlsLower-child2").appendChild(div);
			
	}
}
// this function add button for mobile version;
function addControlButtonForMobile(id, class1, class2, label, tooltip, listener , svg , text ) 
{	
	
	let elm = document.createElement("button");
	elm.id = id;
	elm.classList.add(class1);

	if(svg!="")
		elm.innerHTML =	`<svg class="create_icon">
							<use xlink:href="img/svg/sprite.svg#${svg}"></use>
						</svg> <span class='settingname ${svg}'>${text}</span>`;
	 let extradiv =  document.createElement('div');
	 extradiv.className = class2;
	 elm.appendChild(extradiv);

	if(listener)
	elm.addEventListener("click", listener);
		document.querySelector(".MBwrapper").appendChild(elm);
		
	   
	

}

function addExtraButton(parentclassname ,  svg='' , listener , markup=''){	
	
		markup = `<label class="switch">
		<input class='stickyToggleCheckbox' type="checkbox" value='off' >
		<span class="slider round"></span>
	  </label>`;
	
	document.querySelector(`.${parentclassname}`).insertAdjacentHTML('afterbegin' , markup);

	
	
}

//Draw control bar

function drawControlBar()
{	
	// calling drawSettingcontainer() code added by subham;

	
	drawSettingcontainer()
	var controlBar = document.createElement("div");
	controlBar.id = "controls";
	controlBar.classList.add("controls");
	container.appendChild(controlBar);

	//Upper control bar
	var elm = document.createElement("div");
	elm.id = "controlsUpper";
	elm.classList.add("controlsUpper");
	
	document.getElementById("controls").appendChild(elm);
	
	//Add slider range
	seekbar = document.createElement("input");
	seekbar.id = "seekRange";
	seekbar.type="range";
	seekbar.classList.add("seekRange");
	seekbar.value = 0;
	document.getElementById("controlsUpper").appendChild(seekbar);
	
	//Seekbar toolTipText

	if(!mobileAndTabletcheck()){
		var elmTip = document.createElement("span");
		elmTip.id = "seektimePreview";
		elmTip.classList.add("seektimePreview");
		elmTip.classList.add("hide");
		elmTip.innerHTML="00:00:00";
		document.getElementById("controlsUpper").appendChild(elmTip);
	}
	

	//Add seek bar listeners
	seekbar.addEventListener("change", onSeekBarChange, true);
	seekbar.addEventListener("mousedown", onSeekbarMouseDown, false);
	seekbar.addEventListener("mouseup", onSeekbarMouseUp, false);
	seekbar.addEventListener("input", onSeeking, false);
	seekbar.addEventListener("mousemove", onSeekbarMouseMove, true);
	seekbar.addEventListener("mouseout", onSeekbarMouseOut, true);
	seekbar.addEventListener("mouseover", onSeekbarMouseOver, true);
	

	//Add progress buffer
	var elm = document.createElement("progress");
	elm.id = "bufferProgress";
	elm.min = 0;
	elm.max = 100;
	elm.value = 0;
	elm.classList.add("bufferProgress");
	document.getElementById("controlsUpper").appendChild(elm);


	//Add playback progress
	var elm = document.createElement("progress");
	elm.id = "playbackProgress";
	elm.min = 0;
	elm.max = 100;
	elm.value = 0;
	elm.classList.add("playbackProgress");
	playbackProgress = elm;
	document.getElementById("controlsUpper").appendChild(elm);
	
	
	//lower control bar
	var elm = document.createElement("div");
	elm.id = "controlsLower";
	elm.classList.add("controlsLower");
	document.getElementById("controls").appendChild(elm);
	// code written by shubham
	const controlsLowerChild1 =  document.createElement('div');
	controlsLowerChild1.className = 'controlsLower-child1';
	const controlsLowerChild2 = document.createElement('div');
	controlsLowerChild2.className = 'controlsLower-child2';

	// adding two more extra div for styling purpose 
	document.getElementById("controlsLower").appendChild(controlsLowerChild1);
	document.getElementById("controlsLower").appendChild(controlsLowerChild2);
	
	//Add buttons
	//Add seek back button
	if(!mobileAndTabletcheck())
		addControlButton("btnPlayPause", "btnPlayPause", "btnPlay", "", "Play", onBtnPlayPauseClick , 'icon-round-play_arrow-24px', 'left');
	if(conf.controls.seekBack != "false" && !mobileAndTabletcheck())
		addControlButton("btnSeekBack", "btnSeekBack", "", "", "Seek "+seekInterval+" Sec Back", onBtnSeekBackClick , iconsName.FastBackward , 'left');
	if(conf.controls.seekFwd != "false" && !mobileAndTabletcheck())
		addControlButton("btnSeekFwd", "btnSeekFwd", "", "", "Seek "+seekInterval+" Sec Forward", onBtnSeekFwdClick , iconsName.FastForward , 'left');
	// creating a div inside left control container tp put vol button and vol seekbar inside it;
		addControlDiv('volume-wrapper' , 'left')
	if(conf.controls.mute != "false" && !mobileAndTabletcheck())
		addControlButton("btnMute", "btnMute", "btnMuteOff", "", "Mute", onBtnMuteClick , iconsName.VolumeHigh , 'left' , 'volume-wrapper');
	if(conf.controls.volSlider != "false")
		addVolumeSlider();
	if(conf.controls.timeUpdate != "false")
		addControlButton("btnTimeDisplay", "btnTimeDisplay", "", "00:00:00 00:00:00", "Elapsed/remaining time", onBtnTimeDisplayClick , '' , 'left');		
		document.getElementById("btnTimeDisplay").innerHTML = '00:00' +  " / " + '00:00';
	if(conf.controls.bookmark == true)
		addControlButton("btnBookmark", "btnBookmark", "", "", "Bookmarks", onBtnBookmarkClick , iconsName.bookmark , 'right');
	
	addControlButton("btnQualitySelector", "btnQualitySelector", "", "", "Change Playback Quality",onSettingClick , iconsName.Setting ,'' , 'right');		
	if(conf.controls.quality != "false" && showQualityMenuButton)
		addControlButtonForMobile("btnQualitySelector", "btnQualitySelector", "", "", "Change Playback Quality",onBtnQualitySelectorClick , 'icon-film','Quality list' );		
	if((conf.controls.pip != "false") && isPipSupported() && !mobileAndTabletcheck())
		addControlButton("btnPip", "btnPip", "btnPipEnter", "", "Picture in Picture", onBtnPipClick , iconsName.Pip);
		
		if(conf.controls.speed != "false")
		addControlButtonForMobile("btnSpeedSelector", "btnSpeedSelector", "", playSpeed+"x", "Playback Speed", onBtnSpeedSelectorClick , 'icon-meter' , 'Speed');	
	if(conf.controls.sticky == "true")
		addControlButtonForMobile("btnSticky", "btnSticky", "stickyToggle", "", "Autohide control bar", '' , 'icon-pushpin' , 'Lock screen' );
		addExtraButton('stickyToggle')	
	if(conf.controls.fullscreen != "false")
		addControlButton("btnFullscreen", "btnFullscreen", "btnFullscreenEnter", "", "Fullscreen", onBtnFullscreenClick , iconsName.FullScreen);		
	if(conf.overlayPhoneNumber.show){
		drawMobileNumberOverlay();
	}
	
	drawBigPlayButton();

	
	//Set Auto hide
	if(conf.controls.autoHide != "false")
	{	
		controlBar = document.getElementById("controls");
		controlBar.addEventListener("mouseover", onControlBarMouseover, true);
		controlBar.addEventListener("mouseout", onControlBarMouseout, true);
	}
}


function drawLoader(){
	//document.querySelector('.btnBigPlay').style.zIndex = 3;
	const elm = document.querySelector('.loader-container');
	const markup = `<div class="bookmarkloading">
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
	<div class="obj"></div>
</div>`;
	elm.insertAdjacentHTML('afterbegin' , markup);
	document.querySelector(`.${iconsName.CenterPlay}-wrapper`).style.display = 'none';	
	document.querySelector(`.${iconsName.CenterPause}-wrapper`).style.display = 'none';
	// hide the seek button while video is being load;
	document.querySelector('.icon-round-fast_rewind-24px-wrapper').style.visibility = 'hidden';
	document.querySelector('.icon-round-fast_forward-24px-wrapper').style.visibility = 'hidden';

}
function drawBookmarkloader(parentelement){
	const markup = `<div class="bookmarkloading">
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
							<div class="obj"></div>
					</div>`

	document.querySelector(`.${parentelement}`).insertAdjacentHTML('afterbegin' , markup);
	

}
function clearBookmarkloader(parentelement){
	const loader = document.querySelector('.bookmarkloading');

	if(loader){

		document.querySelector(`.${parentelement}`).removeChild(loader);
	
	}

}
function hideControlbar(){
	document.getElementById("controls").style.opacity = 0;

	//if(stickyControl || video.paused || menuOpen  || hide == false)
	//return;
	
}

function showControlbar(){
	if(stickyControl)
		return;
	document.getElementById("controls").style.opacity = 1;
}
function drawBigPlayButton()
{	

	var elm = document.createElement("div");
	elm.id = "btnBigPlay";
	elm.classList.add("btnBigPlay");
	const center =  document.createElement('div');
	center.className = 'Bigbtnicon';
	container.appendChild(elm);
	elm.appendChild(center);
	const icons = [iconsName.FastForward,  iconsName.CenterPlay , 'loader-container' , iconsName.CenterPause , iconsName.FastBackward]
	icons.forEach((element) => {
		if(element == 'loader-container'){
			center.insertAdjacentHTML('afterbegin' , `<button class='${element}'></button>`);
		}else{

			center.insertAdjacentHTML('afterbegin' , `<button class='${element}-wrapper'><svg class="create_icon ${element} bg">
			<use xlink:href="img/svg/sprite.svg#${element}"></use></svg></button>`);
		}
		if(!mobileAndTabletcheck()){
			document.querySelector('.bg').style.display = 'none';
		}
		
	});
	drawLoader();	
	
}

// function that insert loader inside center

const showloader = () => {
	document.querySelector('.btnBigPlay').style.zIndex = 0;
	document.querySelector(`.loader-container`).style.display = 'flex';	
	document.querySelector(`.${iconsName.CenterPlay}-wrapper`).style.display = 'none';
	document.querySelector(`.${iconsName.CenterPause}-wrapper`).style.display = 'none';

	// hide the seek button while video is being load;
	document.querySelector('.icon-round-fast_rewind-24px-wrapper').style.visibility = 'hidden';
	document.querySelector('.icon-round-fast_forward-24px-wrapper').style.visibility = 'hidden';
}

const clearLoader = () => {

	document.querySelector('.loader-container').style.display = 'none';
	document.querySelector('.icon-round-fast_rewind-24px-wrapper').style.visibility = 'visible';
	document.querySelector('.icon-round-fast_forward-24px-wrapper').style.visibility = 'visible';

	if(mobileAndTabletcheck()){
		if(!videoIsBeingPlayed){
				document.querySelector(`.${iconsName.CenterPlay}-wrapper`).style.display = 'flex';
				document.querySelector(`.${iconsName.CenterPause}-wrapper`).style.display = 'none';
			}else{
				document.querySelector(`.${iconsName.CenterPlay}-wrapper`).style.display = 'none';
				document.querySelector(`.${iconsName.CenterPause}-wrapper`).style.display = 'flex';
			}
		}else{
			document.querySelector(`.${iconsName.CenterPlay}-wrapper`).innerHTML = ``;
		}
	}

function drawSettingcontainer(){
		const settingcontainer = document.createElement('div');
		settingcontainer.className = 'setting_container';	
		container.appendChild(settingcontainer);
			
		const div = document.createElement('div');
		div.id = 'MBwrapper'; // MObile Button Wrapper
		div.className = 'MBwrapper';
		settingcontainer.appendChild(div);
	
		const bookmarkHolder = document.createElement('div');
		bookmarkHolder.id = 'bookmarkmenuholder';
		bookmarkHolder.className = 'bookmarkmenuholder';
		settingcontainer.appendChild(bookmarkHolder);
	
}
function onControlBarMouseover()
{
	showControl();
}
function onControlBarMouseout()
{
	HideControls(1000);
}
function onBtnStickyClick()
{	

	stickyControl = 1 - stickyControl;

}
async function onBtnPipClick(e) //TODO
{	
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}

	try {
		await video.requestPictureInPicture();
	}
	catch(error) {
		// TODO: Show error message to user.
	}
	finally {
		this.disabled = false;
	}
}
/*************************************************************************************************/
//Bookmarks
/*************************************************************************************************/
function onBtnBookmarkClick()
{		
	
	if(bookmarkShowStatus || menuOpen){
		hide = false
		// close the setting all setting button container and speed and quality list
		toggleMBwrapper('none');
		//show the bookmarkholder which hold all loader and bookmark list;
		toggleMBwrapper('flex', '.setting_container');
		toggleMBwrapper('block' , '.bookmarkmenuholder')
		bookmarkShowStatus = false;
		settingShowStatus = false;
		menuOpen = 1;
		if(clicked == 0){
			clicked = 1;
			drawBookmarkloader('bookmarkmenuholder');	
			createBookmarksList();
			hidePlaybackSpeedMenu();
			hideQualityMenu();	
			return;
		}
		hidePlaybackSpeedMenu();
		hideQualityMenu();	
	
		
	}else{
		toggleMBwrapper('none', '.setting_container');
		toggleMBwrapper('none' , '.bookmarkmenuholder');
		hide = true;
		HideControls(1000);
		menuOpen = 0;
		bookmarkShowStatus = true;
		settingShowStatus = true;
	
	}

	
}
// bookmark section

function refreshVideo(){
	initPlayer(conf);
	location.reload();
}
function refresh(){
	clicked = 1;
	document.querySelector('.bookmarkmenuholder').innerHTML = '';
	drawBookmarkloader('bookmarkmenuholder');	
	createBookmarksList();
	
}
function showBookmarkMenu()
{	
	menuOpen = 1;
	hidePlaybackSpeedMenu();
		hideQualityMenu();
	elm = document.getElementById("bookmarkMenu");
	
	window.bookmarkTime = video.currentTime;
}
function hideBookmarkMenu()
{	
	menuOpen = 0;
	
}
function createBookmarkMenu()
{	
	//calling a loader function that shows a loader while data is being fetched;

	let xmlhttp;
	return new Promise((resolve , reject) => {
		
			if (window.XMLHttpRequest)
			{
					//for IE7+, Firefox, Chrome, Opera, Safari
					xmlhttp = new XMLHttpRequest();
			}
			else
			{
				//for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					
					 resolve(this.responseText);	
					
					
				}
			};
			xmlhttp.onerror = function(){
				ErrorCode(errorCode.Db , 'bookmarkmenuholder' , 'refreshBookmark');
			};
			xmlhttp.open("GET","http://visionitlabs.com/bookmarks/getbookmarks.php?url="+videoURL+"&username="+conf.userName,true);
			xmlhttp.send();
	
	});	
}
async function createBookmarksList()
{	
	var val = await createBookmarkMenu();
	clearBookmarkloader('bookmarkmenuholder');
	var bookmarkMenuWidth = 30;
	var bookmarks = JSON.parse(val);
	var elm = document.createElement("div");
	elm.id = "bookmarkMenu";
	elm.classList.add("bookmarkMenu");
	elm.classList.add("menu");
	document.querySelector(".bookmarkmenuholder").appendChild(elm);

	// Creating a parent div inside of bookmarkmenu 
	const parentHolder = document.createElement('div');
	parentHolder.className  = 'bookmarkholder';
	elm.appendChild(parentHolder);	


	// Creating three sub child of parent div one to show recommended bookmarks and to hold to input

	const recommendedBookmarkholder  = document.createElement('div');
	recommendedBookmarkholder.className = 'recommended';
	parentHolder.appendChild(recommendedBookmarkholder);

	const markup = `<div class="bookmarkheader">
						<div class="headerIcon">
							<svg class="create_icon">
								<use xlink:href="img/svg/sprite.svg#${iconsName.bookmarkList}"></use>
							</svg>
						</div>
					<p>Our Recommendations</p></div>
					`

	recommendedBookmarkholder.insertAdjacentHTML('afterbegin' , markup);

	const userAddedBookmarkholder = document.createElement('div');
	userAddedBookmarkholder.className = 'userbookmark';
	parentHolder.appendChild(userAddedBookmarkholder);

	const markup1 = `<div class="bookmarkheader">
						<div class="headerIcon">
							<svg class="create_icon">
								<use xlink:href="img/svg/sprite.svg#${iconsName.bookmarkList}"></use>
							</svg>
						</div>
					<p>Your Bookmarks</p></div>
					`;
	userAddedBookmarkholder.insertAdjacentHTML('beforeend' , markup1);

	let bookmarkListWrapper = document.createElement('div');
	bookmarkListWrapper.className = 'bookmarkListWrapper';
	recommendedBookmarkholder.appendChild(bookmarkListWrapper);
	 bookmarkListWrapper = document.createElement('div');
	bookmarkListWrapper.className = 'bookmarkListWrapper';
	userAddedBookmarkholder.appendChild(bookmarkListWrapper);


	const bookmarinputcontainer = document.createElement('div');
	bookmarinputcontainer.className = 'bookmarinputcontainer';
	parentHolder.appendChild(bookmarinputcontainer);


					
	// injecting html to hold to separat recommend and userbookmarks

					
	// creatin

	

	for (var i = 0; i < bookmarks.length; i++)
	{
		elm = document.createElement("div");
		if (bookmarks[i].comment.length > bookmarkMenuWidth)
			bookmarkText = bookmarks[i].comment.slice(0,bookmarkMenuWidth) + "...";
		else
			bookmarkText = bookmarks[i].comment;

		//Add delete button
		
		var btn = document.createElement("BUTTON");
		btn.classList.add("btnBookmarkDelete");
		btn.id="btnBookmarkDelete";
		elm.appendChild(btn);
		btn.addEventListener("click", onBookmarkDeleteClick.bind(this, bookmarks[i].bookmark_id), false);
		btn.insertAdjacentHTML('afterbegin' , `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.delete}"></use>
	</svg>`);	
		const bookmarktextcontainer =  document.createElement('div');
		bookmarktextcontainer.className= 'bookmarktextcontainer';
		elm.appendChild(bookmarktextcontainer);
		txt = document.createTextNode(convertToTimecode(bookmarks[i].location) +" - "+bookmarkText);
		bookmarktextcontainer.appendChild(txt);
		elm.id="bookmark-index-"+bookmarks[i].bookmark_id;
		elm.title=bookmarks[i].comment;		//TODO make it div/span
		elm.classList.add("menu-item-bookmarks");
		if(bookmarks[i].type == 1){
			recommendedBookmarkholder.children[1].insertAdjacentElement('beforeend' , elm);
		}else{
			userAddedBookmarkholder.children[1].insertAdjacentElement('beforeend' , elm);
		}
		bookmarktextcontainer.addEventListener("click",onBookmarkItemClick.bind(this, bookmarks[i].location), false);
	}

	//Add new bookmark
	const inputholder = document.createElement('div');
	inputholder.className = 'inputholder';
	document.querySelector(".bookmarinputcontainer").appendChild(inputholder);
	var timebox = document.createElement("input");
	timebox.className = 'timebox';
	timebox.type = 'text';
	timebox.disabled = 'true';
	timebox.autocomplete="off";
	inputholder.appendChild(timebox);
	
	var inputBox = document.createElement("input");
	inputBox.id = "txtAddBookmark";
	inputBox.classList.add("txtAddBookmark");
	inputBox.autocomplete="off";
	inputholder.appendChild(inputBox);
	//TODO Readonly timestamp http://jsfiddle.net/Yt72H/
	
	//Add button
	var btn = document.createElement("BUTTON");
	btn.classList.add("btnBookmarkAdd");
	btn.id="btnBookmarkAdd";
	btn.innerHTML = 'Add';
	inputholder.appendChild(btn);
	btn.addEventListener("click", addNewBookMark);
	//Reposition
	elm = document.getElementById("bookmarkMenu");
	elm.style.left=document.getElementById("btnBookmark").offsetLeft;
	elm.style.bottom=document.getElementById("controls").offsetHeight;


	timebox.value = convertToTimecode(video.currentTime);
;
}
function onBookmarkAddClick()
{
	//TODO Disable textbox till added

	

	drawBookmarkloader('bookmarkholder');

	return new Promise((resolve , reject) => {
		
		
		if (window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				// add the added bookmark to dom when database was successfuly updated;
				resolve(this.responseText);
			}
		};
		xmlhttp.onerror = function(){
			ErrorCode(errorCode.Db , 'bookmarkholder' , 'refreshBookmark');
		}


		xmlhttp.open("GET","http://visionitlabs.com/bookmarks/addbookmark.php?url="+videoURL+"&comment="+document.getElementById("txtAddBookmark").value+"&timestamp="+video.currentTime+"&username="+video.currentTime, true);
		xmlhttp.send();
		

});
	
}

 const addNewBookMark = async (data) => {
	if(!document.getElementById("txtAddBookmark").value){
		return
	}
	const bookmarklist = JSON.parse(await onBookmarkAddClick());


const boookmarklists = bookmarklist.pop();
	
	
		elm = document.createElement("div");
		if (boookmarklists.comment.length > 30)
			bookmarkText = boookmarklists.comment.slice(0,30) + "...";
		else
			bookmarkText = boookmarklists.comment;

		//Add delete button
		
		var btn = document.createElement("BUTTON");
		btn.classList.add("btnBookmarkDelete");
		btn.id="btnBookmarkDelete";
		elm.appendChild(btn);
		btn.addEventListener("click", onBookmarkDeleteClick.bind(this, boookmarklists.bookmark_id), false);
		btn.insertAdjacentHTML('afterbegin' , `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.delete}"></use>
	</svg>`);	
		const bookmarktextcontainer =  document.createElement('div');
		bookmarktextcontainer.className= 'bookmarktextcontainer';
		elm.appendChild(bookmarktextcontainer);
		txt = document.createTextNode(convertToTimecode(boookmarklists.location) +" - "+bookmarkText);
		bookmarktextcontainer.appendChild(txt);
		elm.id="bookmark-index-"+boookmarklists.bookmark_id;
		elm.title=boookmarklists.comment;		//TODO make it div/span
		elm.classList.add("menu-item-bookmarks");
			document.querySelector('.userbookmark').children[1].insertAdjacentElement('afterbegin' , elm);
		bookmarktextcontainer.addEventListener("click",onBookmarkItemClick.bind(this, boookmarklists.location), false);
		clearBookmarkloader('bookmarkholder');	
}

function refreshBookmarkMenu(){

	createBookmarkMenu();
	
}
function deleteBookmarkMenu(val){		
	clearBookmarkloader('bookmarkholder');	
	var elm = document.getElementById(`bookmark-index-${val}`);
	elm.remove()
}
function onBookmarkDeleteClick(val)
{
	//TODO

	drawBookmarkloader('bookmarkholder');	
	if (window.XMLHttpRequest)
	{
        xmlhttp = new XMLHttpRequest();
    }
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
		   // refreshBookmarkMenu(this.responseText);
		   deleteBookmarkMenu(val);
        }
	};
	xmlhttp.onerror = function(){
		ErrorCode(errorCode.Db , 'bookmarkholder' , 'refreshBookmark');
	}
    xmlhttp.open("GET","http://visionitlabs.com/bookmarks/deletebookmark.php?id="+val+"&username="+conf.userName, true);
    xmlhttp.send();
	
	
}
function onBookmarkItemClick(val)
{
	if(event.target.id=='btnBookmarkDelete')
		return;
	video.currentTime = val;
	toggleMBwrapper('none' , '.setting_container');
	toggleMBwrapper('none' , '.bookmarkmenuholder');
	bookmarkShowStatus = true;
}

/*************************************************************************************************/
//Mute & Volume
/*************************************************************************************************/
function addVolumeSlider()
{
	volSeekbar = document.createElement("input");
	volSeekbar.id = "volSeekRange";
	volSeekbar.type="range";
	volSeekbar.classList.add("volSeekRange");
	document.querySelector(".volume-wrapper").appendChild(volSeekbar);
	volSeekRange.min=0;
	volSeekRange.max=1;
	volSeekRange.step=0.01;
	//volSeekRange.value=1; //TODO Get from cookie
	volSeekRange.value = video.volume;
	volSeekbar.addEventListener("input", onVolSeeking, false);
}
let volumeUpdated;
function onVolSeeking(e)
{
	video.volume = this.value;
	if (this.value==0){
		setMuteOn(e);
		volumeUpdated =  false;
		return
	}else{
		if(volumeUpdated == false){
			setMuteOff(e);
			volumeUpdated = true;
			return
		}
	}
		
}
function onBtnMuteClick(e)
{	
	
	if(mute)
	{
		setMuteOff(e);
	}
	else
	{
		setMuteOn(e);
	}
}
function setMuteOn(e)
{
	elm = document.getElementById("btnMute");
	elm.innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.VolumeMute}"></use>
	</svg>`;
	video.muted = true;
	mute = 1;
	document.getElementById("volSeekRange").value = 0;
}
function setMuteOff(e)
{	

	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}

	elm = document.getElementById("btnMute");
	elm.innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.VolumeHigh}"></use>
	</svg>`;
	
	
	video.muted = false;
	mute = 0;
	document.getElementById("volSeekRange").value = video.volume;
}
	
/*************************************************************************************************/
//Seekbar
/*************************************************************************************************/
function initSeekbar()
{
	seekbar = document.getElementById("seekRange");
	seekbar.min = 0;
	seekbar.max = Math.floor(videoDuration);	//TODO
	seekbar.range = 1;
	seekbar.value = 0;
}
function onSeekBarChange()
{	
	
	video.currentTime = seekbar.value;
	
}
function onSeekbarMouseDown()
{
	seeking = 1;
}
function onSeekbarMouseUp()
{
	seeking = 0;
}
function onSeeking()
{
	var curTime = seekbar.value;
	if(timeUpdateOnSeekUpdate == 0){
		document.getElementById("btnTimeDisplay").innerHTML = convertToTimecode(curTime - (videoDuration * remainingTimeDisplay)) + " / " +videoDurationText;
		seekbar.value = curTime;
		playbackProgress.value = curTime;
		if(document.querySelector('.timebox')){
			//disabled for temporary , need to uncommnet when bookmark feature is added again
			//document.querySelector('.timebox').value = convertToTimecode(curTime - (videoDuration * remainingTimeDisplay));
		}
		}else{
		document.getElementById("btnTimeDisplay").innerHTML = convertToTimecode(timeUpdateOnSeekUpdate) + " / " +videoDurationText;
		seekbar.value = timeUpdateOnSeekUpdate;
		playbackProgress.value = timeUpdateOnSeekUpdate;
		video.currentTime = timeUpdateOnSeekUpdate;
		//document.querySelector('.timebox').value =  convertToTimecode(timeUpdateOnSeekUpdate);
		}

}
function onSeekbarMouseOver(event)
{
	tooltip = document.getElementById("seektimePreview");
	tooltip.classList.remove('hide');
	tooltip.style.opacity = 1;
}
function onSeekbarMouseMove(event)
{
	var curTime = seekbar.value;
	tooltip = document.getElementById("seektimePreview");
	var pos = event.offsetX;
	var w = window.seekbar.offsetWidth;
	var tooltipwidth = tooltip.offsetWidth
	if(pos < 5){
		pos=0;
	}
	
	if((pos -  (tooltipwidth / 2) <= w-tooltipwidth) && (pos -  (tooltipwidth / 2) >= 0)){
		tooltip.style.marginLeft = pos -  (tooltipwidth / 2)
	}else if((pos -  (tooltipwidth / 2) <= w-tooltipwidth)){
		tooltip.style.marginLeft = 0
	}else{
		tooltip.style.marginLeft = w - tooltipwidth
	}
	if(seeking)
		tooltip.innerHTML = convertToTimecode(curTime - (videoDuration * remainingTimeDisplay));
	else
		tooltip.innerHTML = convertToTimecode((videoDuration/w) * pos)
		timeUpdateOnSeekUpdate = (videoDuration/w) * pos;
		
		
}
function onSeekbarMouseOut()
{
	tooltip = document.getElementById("seektimePreview");
	tooltip.style.opacity = 0;
	tooltip.classList.add('hide');
}
//Seek buttons
function onBtnSeekBackClick(e)
{
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}

	video.currentTime = video.currentTime - seekInterval;
}
function onBtnSeekFwdClick(e)
{
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}
	video.currentTime = video.currentTime + seekInterval;
}

/*************************************************************************************************/
//Playback Time Update
/*************************************************************************************************/
function onBtnTimeDisplayClick(e)
{
	//TODO
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}
	remainingTimeDisplay = 1 - remainingTimeDisplay;
	onPlaybackTimeUpdate();
	
}
function onPlaybackTimeUpdate()	//TODO onSeeking
{
	if(seeking)
		return;
	var curTime = video.currentTime;
	document.getElementById("btnTimeDisplay").innerHTML = convertToTimecode(curTime - (videoDuration * remainingTimeDisplay)) + " / " +videoDurationText;
	seekbar.value = curTime;
	playbackProgress.value = curTime;
}
//*************************************************************************************************
// QUALITY MENU
//*************************************************************************************************
function onBtnQualitySelectorClick()
{	

	hidePlaybackSpeedMenu();
	toggleMBwrapper('none'); // true is being passed so that it hide that WBrapper;
	//Toggle menu
	if(document.getElementById("qualitySelectorMenu").classList.contains("hide"))
	{
		showQualityMenu();
	}
	else
	{
		hideQualityMenu();
		}
}

function onSettingClick(e) {
	
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}
	if(settingShowStatus || !menuOpen){

		toggleMBwrapper('none' , '.bookmarkmenuholder');
		toggleMBwrapper('flex' ,'.setting_container');
		toggleMBwrapper('block');	
		hidePlaybackSpeedMenu();
		hideQualityMenu();
		menuOpen = 1;
		hide = false
		settingShowStatus = false;
		bookmarkShowStatus = true;
	}else{
		toggleMBwrapper('none' ,'.setting_container')
		hide = true;
		settingShowStatus = true;
		bookmarkShowStatus = false;
		HideControls(1000);
		menuOpen = 0;
	}
	
}

// function that make mobile buttons wrapper container hide and visible

function toggleMBwrapper(display , dom='#MBwrapper') {
	
	document.querySelector(dom).style.display= display;
						
}

function createQualityMenu()
{
	var elm = document.createElement("div");
	elm.id = "qualitySelectorMenu";
	elm.classList.add("qualitySelectorMenu");
	elm.classList.add("menu");
		elm.innerHTML = `<div class='setting-header'><svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#icon-rewind"></use>
	</svg> <span class="settingname">Quality list</span></div>`;
		document.querySelector('.setting_container').appendChild(elm);

	

	elm = document.createElement("ul");
	elm.id="qualityList";
	elm.classList.add("menu");
	document.getElementById("qualitySelectorMenu").appendChild(elm);
	
	//TODO If single level, then no menu
	if(availableQuality==1)
	{
		document.getElementById("btnQualitySelector").innerHTML= `${video.height}  p`;
		return;
	}
	//Auto switch quality
	elm = document.createElement("li");
	txt = document.createTextNode("Auto");
	elm.appendChild(txt);
	elm.id="video-quality-index--1";
	elm.classList.add("menu-item-selected");
	document.getElementById("qualityList").appendChild(elm);
	elm.addEventListener("click",onQualityItemClick.bind(this,-1), true);

	for (var i = 0; i < availableQuality.length; i++)
	{
		elm = document.createElement("li");
		txt = document.createTextNode(availableQuality[i].height+"p");
		elm.appendChild(txt);
		elm.id="video-quality-index-"+i;
		elm.classList.add("menu-item-unselected");
		document.getElementById("qualityList").appendChild(elm);
		elm.addEventListener("click",onQualityItemClick.bind(this,i), true);
	}
}
function onQualityItemClick(index)
{
	for (var i = -1; i <  availableQuality.length; i++)
	{
		document.getElementById("video-quality-index-"+i).classList.remove("menu-item-selected");
		document.getElementById("video-quality-index-"+i).classList.add("menu-item-unselected");
	}
	if(index == -1)
	{
		if(urlType=="hls")
		{
			player.loadLevel=-1;
		}
		else if(urlType=="dash")
		{	
			player.updateSettings({
				'streaming': {
					'abr': {
						'autoSwitchBitrate':{
							'video':true,
							'audio':true
						}
					}
				}
			});
		
		}
	}
	else
	{
		if(urlType=="hls")
		{	
			/*console.log(index);
			let qualityLevels = player.qualityLevels();
			console.log(qualityLevels);
			qualityLevels.selectedIndex_ = index;
			qualityLevels.trigger({ type: 'change', selectedIndex: index });
			qualityLevels	
			qualityLevels.on('change', function(e) {
				
				
			//	console.log('Quality Level changed!');
			//	console.log('New level:', qualityLevels[qualityLevels.selectedIndex]);
				
			  });
			  //console.log(player.tech_.hls.representations());
			//player.loadLevel=index;

			*/
		}
		else if(urlType=="dash")
		{	
			player.setQualityFor('video', index);
				player.setQualityFor('audio', index);
			player.updateSettings({
				'streaming': {
					'abr': {
						'autoSwitchBitrate':{
							'video':false,
							'audio':false
						}
					}
				}
			});
			
			
		}
	}
	document.getElementById("video-quality-index-"+index).classList.add("menu-item-selected");
	hideQualityMenu(); 						//Hide menu
	toggleMBwrapper('block'); // block is being passed so that it hide that WBrapper;
	
}
function hideQualityMenu()
{	
	menuOpen = 1;
	if(conf.controls.quality == "true"){
		document.getElementById("qualitySelectorMenu").classList.add("hide");
	}
	
}
function showQualityMenu()
{
	menuOpen = 1;
	elm = document.getElementById("qualitySelectorMenu");
	elm.style.left=document.getElementById("btnQualitySelector").offsetLeft;
	elm.style.bottom=document.getElementById("controls").offsetHeight;
	document.getElementById("qualitySelectorMenu").classList.remove("hide");
}
/**************************************************************************************************/
// PLAYBACK SPEED
/**************************************************************************************************/

function onDocumentClick()
{
	if((event.target.id=='btnSpeedSelector') || (event.target.id=='btnQualitySelector'))
		return;
	hideQualityMenu();
	hidePlaybackSpeedMenu();
}

function onBtnSpeedSelectorClick()
{
	hideQualityMenu();
	toggleMBwrapper('none');
	
	if(document.getElementById("playbackSpeedMenu").classList.contains("hide"))
	{
		showPlaybackSpeedMenu();
	}
	else
	{
		hidePlaybackSpeedMenu();
	}
}

function createPlaybackSpeedMenu()
{
		
	var elm = document.createElement("div");
	elm.id = "playbackSpeedMenu";
	elm.classList.add("playbackSpeedMenu");
	elm.classList.add("menu");
	
	document.querySelector('.setting_container').appendChild(elm)
	elm = document.createElement("ul");
	elm.id="playbackSpeedList";
	elm.classList.add("menu");
	document.getElementById("playbackSpeedMenu").appendChild(elm);
	document.getElementById("playbackSpeedMenu").insertAdjacentHTML("afterbegin" , `<div class='setting-header'><svg class="create_icon">
										<use xlink:href="img/svg/sprite.svg#icon-rewind"></use>
									</svg> <span class="settingname">Playback speed</span></div>`);
	for (var i = 0; i < playbackSpeeds.length; i++)
	{
		elm = document.createElement("li");
		txt = document.createTextNode(playbackSpeeds[i]+"x");
		elm.appendChild(txt);
		elm.id="playback-speed-index-"+i;
		elm.classList.add("menu-item-unselected");
		document.getElementById("playbackSpeedList").appendChild(elm);
		elm.addEventListener("click",onPlaybackSpeedItemClick.bind(this,i), true);
	}
}
function onPlaybackSpeedItemClick(index)
{
	video.playbackRate=playbackSpeeds[index];
	document.querySelector(".icon-meter").innerHTML=playbackSpeeds[index]+'x';
	hidePlaybackSpeedMenu();
	toggleMBwrapper('block');
}
function hidePlaybackSpeedMenu()
{
		hideMenu("playbackSpeedMenu");
}
function showPlaybackSpeedMenu()
{
	showMenu("playbackSpeedMenu", "btnSpeedSelector");
}
function hideMenu(menu)
{
	menuOpen =1;
	elm = document.getElementById(menu);
	elm.classList.add("hide");
}

function showMenu(menu, button)
{
	menuOpen =1;
	elm = document.getElementById(menu);
	elm.style.left=document.getElementById(button).offsetLeft;
	elm.style.bottom=document.getElementById("controls").offsetHeight;
	elm.classList.remove("hide");
}
/**************************************************************************************
// FULLSCREEN
/**************************************************************************************/
function onBtnFullscreenClick(e)
{	
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}

	if(!isFullscreen())
	{
		//element = container || video;
		let element = document.getElementById('playerContainers');
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else {
			element.webkitRequestFullScreen();
		}
			if(mobileAndTabletcheck()){
				screen.orientation.lock("landscape-primary");
			
			}
			
		}
	else
	{
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else {
			document.webkitCancelFullScreen();
		}
		screen.orientation.unlock();
		
	}
	onFullScreenChange();
	HideControls(1000);
	}
function onFullScreenChange()
{	
	if(isFullscreen())
	{
		document.querySelector('#btnFullscreen').innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.FullScreen}"></use>
	</svg>`
		
	}
	else
	{
		document.querySelector('#btnFullscreen').innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.ExitfullScreen}"></use>
	</svg>`
	}
}


document.addEventListener("fullscreenchange", function (e) {
	
	let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
	document.webkitFullscreenElement || document.msFullscreenElement;

	if (fullscreenElement != null) {
		document.querySelector('#btnFullscreen').innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.ExitfullScreen}"></use>
	</svg>`
	} else {
			document.querySelector('#btnFullscreen').innerHTML = `<svg class="create_icon">
		<use xlink:href="img/svg/sprite.svg#${iconsName.FullScreen}"></use>
	</svg>`            
	}
});
function isFullscreen()
{
	return document.fullscreenElement || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
}


function stickyToggle(){
//stickyToggleStatus

	if(!stickyToggleStatus){
		document.querySelector('.stickyToggleCheckbox').setAttribute('checked' , true);
		const status = document.querySelector('.stickyToggleCheckbox').value = true;

		if(status){
			stickyToggleStatus = true;
			showControl();
		}
		
		
	}else{
		document.querySelector('.stickyToggleCheckbox').removeAttribute('checked');
		const status = document.querySelector('.stickyToggleCheckbox').value = false;
		if(!status){
			stickyToggleStatus = false;
			HideControls(1000);
		}
	}
	

}
/******************************************************************************************************************************/
/*Play Pause*/
/******************************************************************************************************************************/

document.getElementById('playerContainers').addEventListener('click' , (e) => {
	e.preventDefault();
	if(e.target.matches('#btnBigPlay , .btnBigPlay , .Bigbtnicon')){
		showControl();
		toggleMBwrapper('none' , '.setting_container');
		menuOpen = 0;
		hide= true;
		bookmarkShowStatus = true;
		settingShowStatus = true;
		HideControls(1000);
		return;
	}else if(e.target.matches('#videoplayer , .videoplayer')){
		showControl();
		HideControls(3000);

		// close all the menu

		return;
	}else if(e.target.matches(`.${iconsName.FastBackward}-wrapper *`)){
		onBtnSeekBackClick(e);
		return;
		//asdas
	}else if(e.target.matches(`.${iconsName.FastForward}-wrapper  *`)){
		onBtnSeekFwdClick(e);
		return;
	}else if(e.target.matches('.stickyToggle  *')){

		// using a toggle button to enable and disable toggle feature;
		stickyToggle();

	}else if(e.target.matches(`.${iconsName.CenterPlay}-wrapper *`)){
		// on works if loader is not is screen;
		if(!loader){
			onBtnPlayPauseClick(e);
			
		}
		
		// creating a toggle button for 
		return;
	}else if(e.target.matches(`.${iconsName.CenterPause}-wrapper *`)){
		onBtnPlayPauseClick(e);
	}else if(e.target.matches('.setting-header *')){

		hideQualityMenu(); 	
		hidePlaybackSpeedMenu();
		toggleMBwrapper('block'); // block is being passed so that it hide that WBrapper;

	}else if(e.target.matches('.refreshBookmark *')){
		refresh();
		//clicked = 0;
	}else if(e.target.matches('.refreshVideo *')){
		refreshVideo();
	}
});


window.addEventListener('keydown' , (e)=>{

	switch(e.keyCode){
		case 32:
				onBtnPlayPauseClick(e);
				break;
		case 39:
				timeUpdateOnSeekUpdate+= seekInterval;
				onBtnSeekFwdClick(e);
				break;
		case 37:
			timeUpdateOnSeekUpdate-= seekInterval;
			onBtnSeekBackClick(e);
			break;
		case 40:

			if(video.volume <= 0){
				setMuteOn(e);
				return;
			}
			video.volume =  (video.volume - (1/10)).toFixed(2);
			document.getElementById("volSeekRange").value = video.volume;
			break;

		case 38:
			if(video.volume >= 1){
				return
			}
			setMuteOff(e);
			video.volume =  (video.volume + (1/10)).toFixed(2);
			document.getElementById("volSeekRange").value = video.volume;
		
			break;
	


	} 

});

const HideControls = (cleartime) => {
	clearTimeout(timer);
	
	timer = setTimeout(() => {
		// hide controls
		if(hide && !stickyToggleStatus && !video.paused && !loader){
				hideControlbar();
				document.getElementById("btnBigPlay").style.display= 'none';
				toggleMBwrapper('none' , '.setting_container');
						
		}
	}, cleartime)


	

}
const showControl = () => {
	clearTimeout(timer);
	showControlbar();
	document.getElementById("btnBigPlay").style.display= 'block';
} 

function sourceCapabilitiesIsAvailable(sourceCapabilities , e){
		
	if(sourceCapabilities){
		if(!e.sourceCapabilities){
			return true;
		}
	}

	return false;

}

function onBtnPlayPauseClick(e)
{	
	let sourceCapabilities = 'sourceCapabilities' in e;
	if(sourceCapabilitiesIsAvailable(sourceCapabilities , e)){
		return;
	}

	if(video.paused)
	{
		video.play();
		
		// videoisbeingplayed boolean will be used in clear loader to render correct button;
		videoIsBeingPlayed = true;
		return;
		
	}
	else
	{
		video.pause();
		videoIsBeingPlayed = false;
		return;
		
		
	}
	//TODO Ping referer validate URL
}
function onVideoPause()
{

		
	btn = document.getElementById("btnPlayPause");
	bigBtn = document.getElementById("btnBigPlay");
	centerPlay = document.querySelector(`.${iconsName.CenterPlay}-wrapper`);
	centerPause = document.querySelector(`.${iconsName.CenterPause}-wrapper`);
	if(!mobileAndTabletcheck()){
		btn.innerHTML = '';
		btn.innerHTML = `<svg class="create_icon">
			<use xlink:href="img/svg/sprite.svg#${iconsName.Play}"></use>
		</svg>`;
	}
	if(mobileAndTabletcheck()){
		centerPlay.style.display = 'flex';
		centerPause.style.display = 'none';
	}
	
	deleteTextOverlay();
	showControl();
				

}
function onVideoPlay()
{	
	
	btn = document.getElementById("btnPlayPause");
	centerPlay = document.querySelector(`.${iconsName.CenterPlay}-wrapper`);
	centerPause = document.querySelector(`.${iconsName.CenterPause}-wrapper`);
	if(!mobileAndTabletcheck()){
		btn.innerHTML = '';
		btn.innerHTML = `<svg class="create_icon">
			<use xlink:href="img/svg/sprite.svg#${iconsName.Pause}"></use>
		</svg>`;
	}
	if(mobileAndTabletcheck()){
		centerPlay.style.display = 'none';
		centerPause.style.display = 'flex';
	}
	
	if(overlayDisplayTimeout == 0)
		drawTextOverlay(true);
	else
		drawTextOverlay(false);

	//TODO: If mouse not on control bar, hide control bar
	
	HideControls(1000);

}
/****************************************************************************/
//TEXT OVERLAY
//TODO Min & Max Duration of display & timeout
/****************************************************************************/

function AvoidScreenForOverlay(percentage) { // min and max included

	
	if(Number.isInteger(percentage)){
		if(percentage < 0 || percentage > 100){
			percentage = 0
		}
	}else{
		percentage = 0;
	}
	

	let avoidScreenSize = container.offsetHeight * percentage/100;
	let topToBeAvoid = avoidScreenSize / 2;
	let bottomToBeAvoid = container.offsetHeight - topToBeAvoid;

	return Math.floor(Math.random() * (bottomToBeAvoid - topToBeAvoid + 1) + topToBeAvoid) - elm.offsetHeight;

}
function initOverlay()
{	
	window.overlayText = (conf.overlay.overlayText) ? (conf.overlay.overlayText) : "Text Overlay";
	window.overlayPosX = conf.overlay.posX ? conf.overlay.posX : "Math.random()*(container.offsetWidth - elm.offsetWidth)";
	window.overlayPosY = conf.overlay.posY ? conf.overlay.posY : "Math.random()* (container.offsetHeight - elm.offsetHeight) - 90";
	window.overlayDisplayDuration = conf.overlay.displayDuration ? "Math.random()*conf.overlay.displayDuration + 100" : "Math.random()*5000";
	window.overlayDisplayTimeout = conf.overlay.displayTimeout ? "Math.random()*conf.overlay.displayTimeout + 100" : "Math.random()*5000 + 100";	//+100 to avoid 0

}
function drawTextOverlay(permanent)
{
	if(conf.overlay.show == false)
		return;
	if(!overlayDrawn){

		let  elm = document.createElement("span");
		elm.id = elm.id+"textOverlay";
		elm.classList.add("textOverlay");
		elm.innerHTML=overlayText;
		container.appendChild(elm);

		elm.style.left = eval(overlayPosX);	
		elm.style.top = isFullscreen() ? AvoidScreenForOverlay(conf.overlay.avoidVerticalArea) : eval(overlayPosY);

		overlayDrawn = true;
		if(!permanent){
			let displayDuration = eval(overlayDisplayDuration);
			if(displayDuration < conf.overlay.minDisplayDuration){
				window.setTimeout(deleteTextOverlay, conf.overlay.minDisplayDuration);
				return;
			}
			window.setTimeout(deleteTextOverlay, displayDuration);
		}

	}

		
}


function drawMobileNumberOverlay()
{
	var elm = document.createElement("span");
	elm.classList.add("textOverlay");
	elm.classList.add("mobileNumber-overlay");
	elm.innerHTML= conf.overlayPhoneNumber.mobileNumber;
	container.appendChild(elm);
	
	// top bottom right left localtion
	elm.style[conf.overlayPhoneNumber.positionX] = eval(conf.overlayPhoneNumber.posX);
	elm.style[conf.overlayPhoneNumber.positionY] = eval(conf.overlayPhoneNumber.posY);
	

}
function deleteTextOverlay()
{
	if(!overlayDrawn)
		return;
	elm = document.getElementById("textOverlay");
	elm.parentNode.removeChild(elm);
	overlayDrawn = false;
	if(video.paused)
		return;
	
	let displayTimeout = eval(overlayDisplayTimeout);
	
	if(displayTimeout < conf.overlay.minDisplayTimeout){
		window.setTimeout(drawTextOverlay, conf.overlay.minDisplayTimeout);
		return;
	}	

	window.setTimeout(drawTextOverlay, displayTimeout);

}

/****************************************************************************/
function convertToTimecode(d){
	var sign ="";
	if(d<0)
	{
		d = d * (-1);
		sign = "-";
	}
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);
	if(h<10 && h>0)
		h="0"+h+":";
	else
		h="";
	if(m<10)
		m="0"+m;
	if(s<10)
		s="0"+s;
	return(sign+h+m+":"+s);
}
