<script>
    import ButtonRow from "../ButtonRow.svelte";
    export let data;

</script>

<div class=side>
    <ButtonRow></ButtonRow>
</div>

<h1 style="padding-left: 200px;"> Work in progress, i have no idea how to do this ngl</h1>

<style>
    .side {
      background-color: rgb(52, 52, 52);
      padding: 4px;
      height: 100vh;
      position: fixed;
    }
</style>

<!-- <script>
    export let data;
  </script>

  <ul>
    {#each data.archive as dt}
      <li>{dt.title}</li>
    {/each}
  </ul> -->