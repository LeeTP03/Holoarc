<script>
    import { upcomingData } from './livedata.js';
    let now = new Date()

    function hourString(int){
        if (Math.floor(int) >= 100){
            let astring = "Starts in " + int.toString().substring(0,3) + " hours"
            return astring
        }
        if (Math.floor(int) >= 10){
            let astring = "Starts in " + int.toString().substring(0,2) + " hours"
            return astring
        }
        if (Math.floor(int) > 1){
            let astring = "Starts in " + int.toString().substring(0,1) + " hours"
            return astring
        }
        else if (Math.floor(int) == 1){
            let astring = "Starts in " + int.toString().substring(0,1) + " hour"
            return astring
        }
        else if (Math.floor(int) == 0){
            int = int / 100 * 60
            let astring = "Starts in " + int.toString().substring(2,4) + " minutes"
            return astring
        }
    }

    for (let i = 0; i < upcomingData.length; i++){
        let utcDate = upcomingData[i]['scheduledStartTime']
        let localDate = new Date(utcDate)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;

        let time = hourString(hourDiff)
        upcomingData[i]['timeDiff'] = time
    }
</script>

<main>
    <div class=outerdiv>
        {#each upcomingData as dt}
            <div class=div>
                <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                <div style="display:flex; flex-direction:rowl">
                    <img class=channelicon style="margin:auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                    <div class=worddiv>
                        <p class=vidtitle2><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                        <p class=channelname>{dt.channelTitle}</p>
                        <p class="channelname">{dt.timeDiff}</p>
                    </div>
                </div>
                
            </div>
        {/each}
    </div>
</main>

<style>
    p {
        margin-top : -8px;
    }

    .div {
        height: 300px;
        width: 320px;
        /* outline: 5px dotted green; */

    }

    .outerdiv {
        width : auto;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
        padding-left: 50px;
        flex-wrap: wrap;
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
</style>