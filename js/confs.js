

const conf = {

    container: "playerContainer",
    get link(){
        const isIOS =  navigator.platform && /iPad|iPhone/.test(navigator.platform);

        if(isIOS){
             return {
                 hls:"http://104.199.144.5:1935/vod/smil:4380201902171700.smil/playlist.m3u8"
                // hls:"http://104.199.144.5:1935/vod/smil:4380201902171700.smil/playlist.m3u8"
             }
        }else{
            return{
                  //  mp4:"../test.mp4"
                    dash:"http://104.199.144.5:1935/vod/smil:8580201909161700.smil/manifest.mpd"
                    // dash:'http://localhost:1935/pro/smil:test.smil/manifest.mpd'
                   // dash:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd" 
                    // dash:"http://visionitlabs.com/vplayer3/player.php?id=4380201902171700"
                    // dash:"https://cors-anywhere.herokuapp.com/http://visionitlabs.com/vplayer3/js/smil:test.smil/manifest.mpd?DVR"

               //hls:"http://104.199.144.5:1935/vod/smil:4380201902171700.smil/playlist.m3u8"

               //
             
            }
        }

    },  

    // hls:'https://visionias.akamaized.net/vision-vod/smil:test.smil/playlist.m3u8?hdnts=<?php print $token; ?>',
    // hls:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    // using hls: "http://104.199.144.5:1935/vod/smil:4380201902171700.smil/playlist.m3u8",
    // hls: "http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8",
    // dash:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
    // dash: "http://192.169.10.5:1935/vod/smil:42151608201701.smil/manifest.mpd",
    // mp4: ["http://localhost/player/720p.mp4", "http://localhost/player/stock.mp4"],
    // mp4: "http://192.169.10.5/player/720p.mp4",
    // webm: "http://localhost/player/stock.webm",
    poster: "http://localhost/player/poster.jpg",
    controls: {
        play: "true",
        seekBack: "true",
        seekFwd: "true",
        seekInterval: 15,
        sticky: "true",
        autoHide: "true",
        quality:"true",
        bookmark:false
    },
    overlay: {
        overlayText: "ksdwivedi@visionias.in",
        pposX: 100,
        pposY: 200,
        ddisplayDuration: 2000,
        ddisplayTimeout: 2000
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

