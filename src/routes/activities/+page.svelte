<script>
    import ButtonRow from "../ButtonRow.svelte";
    import YtEmbed from './YTEmbed.svelte';
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

    for (let i = 0; i < data.live.length; i++){
        let utcDate = data.live[i]['actualStartTime']
        let localDate = new Date(utcDate)
        data.live[i]['localTime'] = localDate.toISOString().substring(11,19)
        const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
        data.live[i]['timeLive'] = hourString(hourDiff)
    }
  </script>
  
  <main>
    <div class=sidepanel>
      <div class=side>
          <ButtonRow></ButtonRow>
      </div>
      <div style="margin-left: 140px">
        <div>
          <h1 style='text-align: center'>Watch</h1>
          <YtEmbed></YtEmbed>

          <h1 style="text-align: center;">Select Stream</h1>
          <h3 style="padding-left: 150px;">Click stream to watch</h3>
          <div class=outerdiv>
        
        {#each data.live as dt}
            <div class=div>
                <button id={dt.id} onclick="embedvid(this.id)">
                    <img src={dt.thumbnail} alt='thumbnail'>
                    <div style="display:flex; flex-direction:rowl">
                        <img id={dt.videolink} class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                        <div class=worddiv>
                            <p class=vidtitle2>{dt.title}</p>
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
        </div>
        
      </div>
    </div>
  </main>
  
  <style>  
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
  </style>
  