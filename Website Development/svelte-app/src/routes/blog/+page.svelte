<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Terms of Service Page Loaded");
    });
</script>
<div class = "blog">

    <h1>News</h1>

    <br>

    <p>Find the newset updates about the sites development here!</p>

    <br>


</div>


    <style>
    @keyframes fadeIn {
        from {opacity: 0%;}
        to {opacity:100%;}
    }
    .terms {
        animation-name: fadeIn;
        animation-duration: 1s;
    }
    .terms h1 {
        color: #111111;
        font-weight: bold;
    }
    .terms h2 {
        color: #111111;
    }
    .terms ul {
        list-style: inside;
    }
</style>