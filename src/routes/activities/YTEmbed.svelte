<main>
    <div style='height: 100vh;'>
        <div class=videochatbox>
            <iframe class=iframeinner width="1060" height="596" id="ytvidembed" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe height="596" id="chatbox" src='' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</main>


<style>
    .videochatbox{
        display: flex;
        flex-direction: row;
    }

    .iframeinner{
        padding-bottom: 50px;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
    }
</style>