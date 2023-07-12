<script>
    export let cdata;
    console.log(cdata.subscriberCount.length)
    if (cdata.subscriberCount.length > 6){
        cdata.subscriberCounted = cdata.subscriberCount.substring(0,cdata.subscriberCount.length-6) + '.' + cdata.subscriberCount.substring(cdata.subscriberCount.length-6, cdata.subscriberCount.length-4) + 'M Subscribers'
    }
    else if (cdata.subscriberCount.length > 3){
        cdata.subscriberCounted = cdata.subscriberCount.substring(0,cdata.subscriberCount.length-3)  + "K Subscribers"
    }
    else {
        cdata.subscriberCounted = cdata.subscriberCount + ' Subscribers'
    }

    import { page } from '$app/stores';
    let routeId = $page.route.id;
</script>

<main>
    <div class='w-screen h-auto'>
        <div>
            <img class='object-center object-fill h-1/2' src='{cdata.channelThumbnail}=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj' alt='channel banner'>
        </div>
        <div class='pl-[7%] pt-5  bg-[#242424] flex flex-row'>
            <img src={cdata.thumbnail} alt='channel icon' class='w-[88px] rounded-full'>
            <div class='pl-6 flex flex-col'>
                <p class='text-xl font-medium'>{cdata.name}</p>
                <p>{cdata.subscriberCounted}</p>
                <p>{cdata.customUrl}</p>
            </div>
        </div>
        <div class='pl-[7%] pt-5 bg-[#242424] flex flex-row'>
            <nav>
                <ul class='flex flex-row'>
                        <a class:active={routeId == '/channels/[channelId]'} href='/channels/{cdata.id}'>
                            <li class='h-14 py-4 px-3 w-24 text-center font-medium hover:bg-neutral-500'>
                                Streams
                            </li>
                        </a>
                    <a class:active={routeId == '/channels/[channelId]/about'} href='/channels/{cdata.id}/about'>
                        <li class='h-14 py-4 px-3 w-24 text-center font-medium hover:bg-neutral-500'>
                            About
                        </li>
                    </a>
                </ul>
            </nav>
        </div>

    </div>
        
</main>

<style>
    .active{
        color: rgb(32, 187, 204);
    }
</style>