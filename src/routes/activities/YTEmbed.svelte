<script type='text/javascript'>
    import { liveData } from "../livedata.js";
    let now = new Date()

    function hourString(int){
        if (Math.floor(int) >= 10){
            let astring = "for " + int.toString().substring(0,2) + " hours"
            return astring
        }
        if (Math.floor(int) > 1){
            let astring = "for " + int.toString().substring(0,1) + " hours"
            return astring
        }
        else if (Math.floor(int) == 1){
            let astring = "for " + int.toString().substring(0,1) + " hour"
            return astring
        }
        else if (Math.floor(int) == 0){
            int = int / 100 * 60
            let astring = "for " + int.toString().substring(2,4) + " mins"
            return astring
        }
    }

    for (let i = 0; i < liveData.length; i++){
        let utcDate = liveData[i]['actualStartTime']
        let localDate = new Date(utcDate)
        liveData[i]['localTime'] = localDate.toISOString().substring(11,19)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
        liveData[i]['timeLive'] = hourString(hourDiff)
    }

    
</script>

<main>
    <div style='height: 100vh;'>
        <div class=videochatbox>
            <iframe class=iframeinner width="1060" height="596" id="ytvidembed" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe height="596" id="chatbox" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <h1 style="text-align: center;">Select Stream</h1>
    <h3 style="padding-left: 150px;">Click stream to watch</h3>
    <div class=outerdiv>
        
        {#each liveData as dt}
            <div class=div>
                <button id={dt.id} onclick="embedvid(this.id)">
                    <img src={dt.thumbnail} alt='thumbnail'>
                    <div style="display:flex; flex-direction:rowl">
                        <img id={dt.videolink} class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                        <div class=worddiv>
                            <p class=vidtitle2><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                            <p class=channelname>{dt.channelTitle}</p>
                            <div style='display:flex'>
                                <p class=live>Live now</p>
                                <p>{dt.timeLive}</p>
                                <p style="color:grey; padding-left: 7px">{dt.concurrentViewers} viewers</p>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        {/each}
    </div>

    

    <script>
        function embedvid(element_id){
            document.getElementById("ytvidembed").src = "https://www.youtube.com/embed/" + element_id;
            document.getElementById("chatbox").src = "https://www.youtube.com/live_chat?v=" + element_id + "&embed_domain=local_host:5173/index3.html";
        }
    </script>

</main>


<style>
    .videochatbox{
        display: flex;
        flex-direction: row;
    }

    p {
        margin-top : -8px;
    }

    .div {
        height: 300px;
        width: 320px;
        /* outline: 5px dotted green; */

    }
    .outerdiv {
        width : 1310px;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 60px;
        flex-wrap: wrap;
        padding-left: 150px;
        /* outline: 5px dotted green; */

    }

    .channelicon {
        height: 50px;
        /* outline: 5px dotted green; */
        border-radius: 50%;
    }

    .worddiv {
        display: flex;
        flex-direction: column;
        line-height: 20px;
    }

    .vidtitle2 {
        padding-top: 5px;
        padding-left: 7px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        color: white;
    }

    .channelname{
        padding-left: 7px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1;
        color: white;
    }

    .live{
        color : rgb(249, 71, 71);
        padding-left: 7px;
        padding-right: 7px;
    }
    
    .iframeinnervideo{
        padding-bottom: 50px;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
    }

    .iframeinner{
        padding-bottom: 50px;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
    }
</style>