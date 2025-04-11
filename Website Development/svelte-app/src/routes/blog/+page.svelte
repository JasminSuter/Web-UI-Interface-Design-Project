<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Terms of Service Page Loaded");
    });
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<div class = "blog">

    <h1>News</h1>

    
    <div class = "post">   
        <h2> Ready to launch! </h2>
        <p style="color:rgb(109, 119, 150)">11/04/2025</p>
        <p>The clock is ticking and soon art/srj is gonna go live! Don't miss it! </p>
    </div>

    <div class = "post">   
        <h2> Let's log in! </h2>
        <p style="color:rgb(109, 119, 150)">08/04/2025</p>
        <p>The log in feature is now live. Check out the page by logging in to your account and get started! </p>
    </div>

    <div class = "post">   
        <h2> Art/srj </h2>
        <p style="color:rgb(109, 119, 150)">25/03/2025</p>
        <p>We are finally ready to announce our name! Welcome to art/srj. Here we focus on the artist. Our goal is to make it easy
            to get your art seen, find the artists that speak to you and get the commissions rolling.
        </p>
    </div>

    <div class = "post">   
        <h2> In development! </h2>
        <p style="color:rgb(109, 119, 150)">18/03/2025</p>
        <p>The team is working hard on the creation of an inovative new image sharing website! 
            Soon you will be able to share your creative creations here, find the hottest new artists and find commissioneers and commissioners.</p>
    </div>

</div>


    <style>
    @keyframes fadeIn {
        from {opacity: 0%;}
        to {opacity:100%;}
    }

        /* Pseudo-Element: Add Decorative Line After Gallery */
        .post::after {
            content: "";
            display: block;
            width: 40%;
            height: 2px;
            background:  #000000;
            margin: 0 auto 20px auto;
            transition: width 0.3s ease-in-out;
    }

    .blog {
        animation-name: fadeIn;
        animation-duration: 1s;
    }
    .blog h1 {
        color: #ffffff;
        font-weight: bold;
    }
    .blog h2 {
        color: #111111;
    }

</style>