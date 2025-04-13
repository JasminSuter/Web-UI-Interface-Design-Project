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
    <Card title="Image 1" description="This is the second image." image="ART_1.png"/>
    <Card title="Image 2" description="This is the second image." image="ART_2.png"/>
    <Card title="Image 3" description="This is the second image." image="ART_3.png"/>
    <Card title="Image 4" description="This is the second image." image="ART_4.png"/>
    <Card title="Image 5" description="This is the second image." image="ART_5.png"/>
    <Card title="Image 6" description="This is the second image." image="ART_6.png"/>
    <Card title="Image 7" description="This is the second image." image="ART_7.png"/>
    <Card title="Image 8" description="This is the second image." image="ART_8.png"/>
    <Card title="Image 9" description="This is the second image." image="ART_9.png"/>
    <Card title="Image 10" description="This is the second image." image="ART_10.png"/>
    <Card title="Image 11" description="This is the second image." image="ART_11.png"/>
    <Card title="Image 12" description="This is the second image." image="ART_12.png"/>
    <Card title="Image 13" description="This is the second image." image="ART_13.png"/>
</div>

<style>

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
