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
  <div class='flex flex-row'>
    <ButtonRow></ButtonRow>
    <div class='pl-32'>
      <div>
        <h1 class="text-6xl font-bold py-6 text-center">Archives</h1>
        <div class=outerdiv>
          {#each data.archive as dt}
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

</style>
