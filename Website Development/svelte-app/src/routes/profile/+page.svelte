<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';
	import ProfileCard from '$lib/components/ProfileCard.svelte';

    onMount(() => {
        console.log("Profile Page Loaded");
    })
</script>

<h1>Profile</h1>
<p>This is your profile!</p>

<div class="column left">
<!-- Profile picture container -->
    <div class="profilepic">
        <ProfileCard title="Max Muster" description="Hello! I am an artist doing art and stuff." image="PROFILE.png"/>
        
    </div>

    
</div>

<div class="column right">
<!-- Image Containers in the gallery -->
    <div class="image">
        <Card title="Image 1" description="In this image you can see Hugs, a firbolg barbarian making friends with a little forest critter :)." image="TEST_1.png"/>
        <Card title="Image 2" description="This is the second image." image="TEST_2.png"/>
        <Card title="Image 3" description="This is the third image." image="TEST_3.png"/>
        <Card title="Image 4" description="This is the fourth image." image="TEST_4.png"/>
        <Card title="Image 5" description="This is the fifth image." image="TEST_5.png"/>
        <Card title="Image 6" description="This is the sixth image." image="TEST_6.png"/>
    </div>
</div>

<style>

    .column {
        float: left;
    }

    .left {
        width: 20%;
    }

    .right {
        margin-top: -25rem;
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
        transform: scale(2);
        opacity: 1;
        z-index: 3;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    /* all other cards shrink and fade slightly when hovering over a card*/
    :global(.card) {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

</style>