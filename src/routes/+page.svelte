<script>
    import ButtonRow from './ButtonRow.svelte';

  export let data
  let open = false

  $: ({live} = data)
  $: ({upcoming} = data)

  let now = new Date()

  function hourString(int){
      if (Math.floor(int) >= 10){
          return int.toString().substring(0,2) + ' hours'
      }
      if (Math.floor(int) > 1){
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

  for (let i = 0; i < data.live.length; i++){
      let utcDate = data.live[i]['actualStartTime']
      let localDate = new Date(utcDate)
      data.live[i]['localTime'] = localDate.toISOString().substring(11,19)
      const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
      data.live[i]['timeLive'] = 'for ' + hourString(hourDiff)
  }

  for (let i = 0; i < data.upcoming.length; i++){
      let utcDate = data.upcoming[i]['scheduledStartTime']
      let localDate = new Date(utcDate)
      const hourDiff = Math.abs(now.getTime() - localDate.getTime())/36e5;
      data.upcoming[i]['timeDiff'] = 'Starts in ' + hourString(hourDiff)
  }

</script>

<main>
  <div>
    <div class=side>
        <ButtonRow></ButtonRow>
    </div>
    <div style="margin-left: 140px;">
      <div>
        <h1 class="text-6xl font-bold py-8 text-center">Live!</h1>
        <div class=outerdiv>
          {#each live as dt}
              <div class=div>
                  <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                  <div style="display:flex; flex-direction:row;">
                      <img class=channelicon style="margin: auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                      <div class="flex flex-col pt-4" >
                          <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                          <p class="pl-2 pt-2">{dt.channelTitle}</p>
                          <div class='pt-2' style='display:flex'>
                              <p class=live>Live now</p>
                              <p>{dt.timeLive}</p>
                              <p style="color:grey; padding-left: 7px">{dt.concurrentViewers} viewers</p>
                          </div>
                      </div>
                  </div>
              </div>
          {/each}
      </div>
      </div>

      <div>
        <h1 class="text-6xl font-bold py-8 text-center" >Upcoming Streams</h1>
        <div class=outerdiv>
          {#each upcoming as dt}
              <div class=div>
                  <a href={dt.videolink}><img src={dt.thumbnail} alt='thumbnail'></a>
                  <div style="display:flex; flex-direction:rowl">
                      <img class=channelicon style="margin:auto 0;" alt="thumbnail" src={dt.channelThumbnail}>
                      <div class="flex flex-col pt-4">
                          <p class="text-left overflow-hidden text-ellipsis line-clamp-2 pl-2"><a style='color: white;' target="_blank" href={dt.videolink}>{dt.title}</a></p>
                          <p class="pl-2 pt-2">{dt.channelTitle}</p>
                          <p class="pl-2 pt-2">{dt.timeDiff}</p>
                      </div>
                  </div>
                  
              </div>
          {/each}
       </div>
      </div>

    </div>
  </div>
  
</main>

<style lang="postcss">

  .side {
    background-color: rgb(52, 52, 52);
    padding: 4px;
    position: fixed;
    height: 100vh;
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