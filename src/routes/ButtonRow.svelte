<script>
  import {base} from "$app/paths"

  let button = [{'name': 'Home', "link" :  base + '/'},
          {'name':'Activities', "link" : base + '/activities'},
          {'name' : 'Favourite', "link" : base + '/favourite'},
          {'name' : 'Archives', "link" : base + '/archive'}]

</script>


<main>
    <div class=flexbox>
        <a href="/"><img class=logo alt='company logo' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Hololive_Production.png"></a>
        {#each button as btn}
         <a style="color: white;"href={btn.link}> <div class="hover:bg-white text-white font-semibold hover:text-gray-700 py-2 px-4 ease-in-out transition-all duration-200 rounded">{btn.name}</div></a>
        {/each}
    </div>
</main>

<style>
    .logo{
        width: 120px;
        height: auto;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 50px;
    }

  .flexbox{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
</style>