<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Profile Page Loaded");
    })
</script>

<h1>Profile</h1>
<p>Look at your profile, uploads, commission details (price, style, etc.)</p>

<!-- temporary option to log in, just so you can access the page right now -->
<p>If you're not logged in, do so <a href="/login"> here. </a></p>


<style>
h1 {color: #007bff;}
p {font-size: 18px;}
</style>
