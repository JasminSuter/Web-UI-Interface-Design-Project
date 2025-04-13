<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
    
    onMount(() => {
        console.log("Profile Page Loaded");
    })
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<h1>Profile</h1>
<p>This is your profile!</p>

<div class="column left">
<!-- Profile picture container -->
    <div class="profilepic">
        <ProfileCard title="Max Muster" description="Hello! I am an artist doing art and stuff. Here is some of my art :)" 
        medium="2D Digital Art and Illustrations" genre="Fantasy, DnD, Comics, Illustrations"  
        price="Starting at €20 for characters, +€15 for each following character or background elements" 
        other="I mostly draw fantasy art of silly characters, but I'm open for anything so just message me if you like my artsyle!" image="/PROFILE_1.png"/>
        
    </div>

    
</div>

<div class="column right">
<!-- Image Containers in the gallery -->
    <div class="image">
        <Card title="Hugs" description="In this image you can see Hugs, a firbolg barbarian making friends with a little forest critter :)." image="/TEST_1.png"/>
        <Card title="Learnean Menace" description="A greek themed dnd party." image="/TEST_2.png"/>
        <Card title="Beyond the forest creek" description="This is a commission I did for a childrens book" image="/TEST_3.png"/>
        <Card title="The Troubleshooters" description="From left to right: Kassa a dhampir necromancer, Kalina a fetchling witch, Noro a halfling barbarian and Sy'len a ghost fighter" image="/TEST_4.png"/>
        <Card title="DnD Party" description="I drew my dnd group!" image="/TEST_5.png"/>
        <Card title="AAAAAHHHHHHHHHH" description="A scene from my dnd game lol" image="/TEST_6.png"/>
    </div>
</div>

<style>

    .image {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    }

    .column {
        float: left;
    }

    .left {
        width: 20%;
    }

    .right {
        margin-top: -54rem;
        margin-left: 20rem;
    }

    /* Flexbox for Dynamic Layout */
    .profilepic {
        display: block;
    }

    /* Flexbox for Dynamic Layout */
    .image {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /*Responsive Column*/
        gap: 25px; /* Creates spacing between items */
        margin-top: 2rem;
    }

    /* Pseudo-Element: Add Decorative Line After Gallery */
    .image::after {
        content: "";
        width: 60%;
        height: 3px;
        background: linear-gradient(to right,  #111111, transparent);
        margin: 2rem auto 0 auto;
    }

    /* Target all cards when hovering inside image container*/
    :global(.image:hover .card) {
        transform: scale(0.95);
        opacity: 0.8;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    /* Overrides above rule for image currently hovered over*/
    :global(.image .card:hover) {
        transform: scale(1.8);
        opacity: 1;
        z-index: 2;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    /* all other cards shrink and fade slightly when hovering over a card*/
    :global(.card) {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }


    :global(.card-profilepic) {
        width: 150px;
        height: 150px;
        border-radius: 50%; /* Makes the image circular */
        border: 5px solid #ffffff; /* White border around the image */
        object-fit: cover; /* Ensures the image covers the entire area */
        margin-bottom: 15px;
    }

    :global(.card-description) {
        font-size: 1rem;
        text-align: center;
    }

    :global(.profilepic img) {
        transition: transform 0.5s ease; /* Smooth transition for the rotation */
        width: 100%; /* Ensures the image fills the container */
        height: 100%; /* Ensures the image fills the container */
        object-fit: cover; /* Maintains aspect ratio and covers the container */
    }

    :global(.profilepic:hover img) {
        transform: rotate(360deg); /* Rotates the image 360 degrees */
    }

    /* changing layout on mobile */
    @media (max-width: 768px) {
        .right {
            margin-top: 0rem;
            margin-left: 0rem;
        }
    }
</style>