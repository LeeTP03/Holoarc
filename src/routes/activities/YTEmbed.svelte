<script type='text/javascript'>
    import { liveData } from "../livedata.js";

    export let data

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

    // for (let i = 0; i < liveData.length; i++){
    //     let utcDate = liveData[i]['actualStartTime']
    //     let localDate = new Date(utcDate)
    //     liveData[i]['localTime'] = localDate.toISOString().substring(11,19)
    //     const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
    //     liveData[i]['timeLive'] = hourString(hourDiff)
    // }

    
</script>

<main>
    <div style='height: 100vh;'>
        <div class=videochatbox>
            <iframe class=iframeinner width="1060" height="596" id="ytvidembed" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe height="596" id="chatbox" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</main>


<style>
    .videochatbox{
        display: flex;
        flex-direction: row;
    }

    .iframeinner{
        padding-bottom: 50px;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
    }
</style>