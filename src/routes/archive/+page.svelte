<script>
    import ButtonRow from '../ButtonRow.svelte';
    export let data

    let now = new Date()

    function hourString(int){
        let num = int.toString().split(".")[0]

        if (Math.floor(num) >= 24){
            int = int/24
            let num = int.toString().split(".")[0]
            let astring = "Stream ended " + num + ' days ago'
            return astring
        }
        if (Math.floor(num) > 1){
            let astring = "Streamed ended " + num + " hours ago"
            return astring
        }
        else if (Math.floor(num) == 1){
            let astring = "Streamed ended " + num + " hour ago"
            return astring
        }
        else if (Math.floor(num) == 0){
            int = int / 100 * 60
            let astring = "Streamed ended " + int.toString().substring(2,4) + " mins ago"
            return astring
        }
    }

    for (let i = 0; i < data.archive.length; i++){
        let utcDate = data.archive[i]['actualEndTime']
        let localDate = new Date(utcDate)
        data.archive[i]['localTime'] = localDate.toISOString().substring(11,19)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
        data.archive[i]['timeLive'] = hourString(hourDiff)
    }
  </script>
  
  <main>
    <div class=sidepanel>
      <div class=side>
          <ButtonRow></ButtonRow>
      </div>
      <div style="margin-left: 140px">
        <div>
          <h1 style='text-align: center'>Archives</h1>
          <div class=outerdiv>
            {#each data.archive as dt}
                <div class=div>
                    <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                    <div style="display:flex; flex-direction:rowl">
                        <img class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                        <div class=worddiv>
                            <p class=vidtitle2><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                            <p class=channelname>{dt.channelTitle}</p>
                            <p class=channelname style="color: grey;">{dt.timeLive}</p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        </div>
      </div>
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
  
    .side {
      background-color: rgb(52, 52, 52);
      padding: 4px;
      height: 100vh;
      position: fixed;
    }
  
    .sidepanel {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  
  </style>
  