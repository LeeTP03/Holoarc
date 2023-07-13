<script>
    import ButtonRow from '../../../ButtonRow.svelte';
    import Banner from '../banner.svelte';

    export let data
</script>

<main>
    <div class=side>
        <ButtonRow ></ButtonRow>
    </div>
    <div style='margin-left : 7%;'>
        <Banner cdata={data.postData.channel[0]}></Banner>
    </div>
    <div class='pl-[14%] pt-12 flex-row flex'>
        <div class='w-3/4'>
            <p class=' font-bold text-2xl underline '>Description</p>
            <pre class='pt-2'>{data.postData.channel[0].description}</pre>
        </div>
        <div class='pt-4 flex flex-col gap-4 min-h-screen'>
            <p class='text-2xl'>Stats</p>
            <p class='text-lg'>{data.postData.channel[0].videoCount} videos</p>
            <p class='text-lg'>{data.postData.channel[0].viewCount} total views</p>
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

</style>

