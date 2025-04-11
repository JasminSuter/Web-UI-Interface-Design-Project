<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Home Page Loaded");
    })
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<!-- Gallery Container -->
<div class="gallery">
    <img src="ART_1.png" alt ="art-1">
    <img src="ART_2.png" alt ="art-2">
    <img src="ART_3.png" alt ="art-3">
    <img src="ART_4.png" alt ="art-4">
    <img src="ART_5.png" alt ="art-5">
    <img src="ART_6.png" alt ="art-6">
    <img src="ART_7.png" alt ="art-7">
    <img src="ART_8.png" alt ="art-8">
    <img src="ART_9.png" alt ="art-9">
    <img src="ART_10.png" alt ="art-10">
    <img src="ART_11.png" alt ="art-11">
    <img src="ART_12.png" alt ="art-12">
    <img src="ART_13.png" alt ="art-13">
</div>

<style>
    /* Flexbox for Dynamic Layout */
    img{
            height: 100%;
            width :100%;
            
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /*Responsive Column*/
        gap: 40px; /* Creates spacing between items */
        margin-top: 2rem;
    }
    
  

    /* Pseudo-Element: Add Decorative Line After Gallery */
    .gallery::after {
        content: "";
        width: 60%;
        height: 3px;
        background: linear-gradient(to right,  #111111, transparent);
        margin: 2rem auto 0 auto;
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .img:nth-child(even)) {
        background-color: #ebebeb;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .img:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .img:hover ~ .img) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .img:hover + .img) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.gallery > .img:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }
    </style>
