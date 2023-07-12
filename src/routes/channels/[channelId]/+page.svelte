<script>
    import ButtonRow from '../../ButtonRow.svelte';
    import Banner from './banner.svelte';

    export let data
    let now = new Date()

    function hourString(int){
        let num = int.toString().split(".")[0]

      if (Math.floor(num) >= 24){
          int = int/24
          return int.toString().split(".")[0]  + ' days'
      }
      else if (Math.floor(int) >= 10){
          return int.toString().substring(0,2) + ' hours'
      }
      else if (Math.floor(int) > 1){
        return int.toString().substring(0,1) + ' hours'
      }
      else if (Math.floor(int) == 1){
          return int.toString().substring(0,1) + " hour"
      }
      else if (Math.floor(int) == 0){
          int = int / 100 * 60
          return int.toString().substring(2,4) + " mins"
      }
  }

  for (let i = 0; i < data.postData.live.length; i++){
      let utcDate = data.postData.live[i]['actualStartTime']
      let localDate = new Date(utcDate)
      data.postData.live[i]['localTime'] = localDate.toISOString().substring(11,19)
      const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
      data.postData.live[i]['timeLive'] = 'for ' + hourString(hourDiff)
  }

  for (let i = 0; i < data.postData.archive.length; i++){
      let utcDate = data.postData.archive[i]['actualEndTime']
      let localDate = new Date(utcDate)
      data.postData.archive[i]['localTime'] = localDate.toISOString().substring(11,19)
      const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
      data.postData.archive[i]['timeLive'] = 'Streamed ' + hourString(hourDiff) + ' ago'
  }

</script>

<main>
    <div class=side>
        <ButtonRow ></ButtonRow>
    </div>
    <div style='margin-left : 7%;'>
        <Banner cdata={data.postData.channel[0]}></Banner>
        <h1 class="text-6xl font-bold pt-12 pb-12 text-center">{data.postData.live[0].channelTitle}</h1>
        <div class=outerdiv>
            {#each data.postData.live as dt}
                <div class=div>
                    <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                    <div style="display:flex; flex-direction:row;">
                        <img class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                        <div class="flex flex-col pt-4" >
                            <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                            <a href='/channels/{dt.channelId}'><p class="pl-2 pt-2 text-blue-400">{dt.channelTitle}</p></a>
                            <div class='pt-2' style='display:flex'>
                                <p class=live>Live now</p>
                                <p>{dt.timeLive}</p>
                                <p style="color:grey; padding-left: 7px">{dt.concurrentViewers} viewers</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
            {#each data.postData.archive as dt}
              <div class=div>
                  <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                  <div style="display:flex; flex-direction:row;">
                      <img class="rounded-full h-12" style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                      <div class="flex flex-col pt-3">
                          <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                          <a href='/channels/{dt.channelId}'><p class="pl-2 pt-2 text-blue-400">{dt.channelTitle}</p></a>
                          <p class="pl-2 pt-2 text-stone-500">{dt.timeLive}</p>
                      </div>
                  </div>
              </div>
          {/each}
        </div>
    </div>
</main>


<style>
    .side {
    background-color: rgb(52, 52, 52);
    padding: 4px;
    position: fixed;
    height: 100vh;
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

    .live{
        color : rgb(249, 71, 71);
        padding-left: 7px;
        padding-right: 7px;
    }

</style>