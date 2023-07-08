<script>
  import {base} from "$app/paths"

  let button = [{'name': 'Home', "link" :  base + '/'},
          {'name':'Activities', "link" : base + '/activities'},
          {'name' : 'Favourite', "link" : base + '/favourite'},
          {'name' : 'Archives', "link" : base + '/archive'}]

</script>


<main>
    <div class=flexbox>
        <img class=logo alt='company logo' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Hololive_Production.png">
        {#each button as btn}
         <a style="color: white;"href={btn.link}> <div class=button>{btn.name}</div></a>
        {/each}
    </div>
</main>

<style>
    .logo{
        width: 120px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 50px;
    }
    .button {
    background-color: rgb(52, 52, 52);
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;

  }

  .button:hover {
    background-color: grey;
  }

  .flexbox{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
</style>