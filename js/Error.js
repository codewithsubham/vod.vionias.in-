const errorCode = {

    Dash:{
        manifestError:{
            parse: 'Sorry there was an error while loading Video , Please Refresh Your page (0EDMP)',
            nostreams: 'Sorry there was an error while loading Video , Please Refresh Your page (0EDMN)',
            codec: 'Sorry the was an error with Video file Please Refresh Your page (0EDMC)',
        },
        download:{
            manifest: 'Sorry there was an error while loading Video , Please Refresh Your page (1EDDM) -> (0EDMP)',
            initialization:'Sorry video file could not be load (1EDDI)' ,
            content:'Sorry for inconvenience , please refres  your page (1EDDC)',
        },
        mediasource:'Sorry , Please try again (2EDM)'
    },
    Hls:{
        networkError:{
            mediaError: 'asdad',
            manifestLoadError:'Sorry Video Could not be loaded, Please Refresh Your page (3EHNM)',
            fragLoadTimeOut:'Sorry there was an network error while loading video , Please Refresh Your page (3EHNF)',
            manifestLoadTimeOut:'Sorry Video Could not be loaded ,Please Refresh Your page (3EHNM1)',
            manifestParsingError:'Sorry video was corrupt , Please Refresh Your page (3EHNM2)',
            levelLoadError:'Sorry Video was inturrupted,Please Refresh Your page (3EHNL)' , 
        },
        mediaError:{
            bufferStalledError:'Sorry video is being interrupted , please make sure internet is working (4EHMB)' 
        }
    },
    Db:'Something went wrong withyour bookmark ,Please refresh or try after sometime  (5EHD)',  
    undefined:'Sorry Video Could not be loaded, Please Refresh Your page (000000)'



}
