<script>
    import ButtonRow from "../ButtonRow.svelte";
    import YtEmbed from './YTEmbed.svelte';
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
        </div>
      </div>

    </div>
    
  </main>
  
  <style>
    .button {
      background-color: rgb(169, 167, 167);
  
    }
    .button:hover{
      background-color: grey;
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
  
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
      filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
      color: #7a7a7a;
    }
    .divflex{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 15px; 
    }
  </style>
  