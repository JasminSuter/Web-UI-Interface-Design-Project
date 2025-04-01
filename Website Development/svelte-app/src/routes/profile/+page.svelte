<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Profile Page Loaded");
    })
</script>

<h1>Profile</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="column left">
<!-- Profile picture container -->
    <div class="profilepic">
        <Card title="Profilepic" description="This is your profile"/>
    </div>

    
</div>

<div class="column right">
<!-- Image Containers in the gallery -->
    <div class="image">
        <Card title="Image 1" description="This is the first image." />
        <Card title="Image 2" description="This is the second image." />
        <Card title="Image 3" description="This is the third image." />
        <Card title="Image 4" description="This is the fourth image." />
        <Card title="Image 5" description="This is the fifth image." />
        <Card title="Image 6" description="This is the sixth image." />
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

    /* Apply a different background color to even-numbered cards */
    :global(.image > .card:nth-child(even)) {
        background-color: #ebebeb;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.image > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.image > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.image > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

    /* Exclude the first and last card from being affected by nth-child styling */
    :global(.image > .card:not(:first-child):not(:last-child)) {
        border-radius: 18px; /* Softens edges for middle cards */
    }

            </style>