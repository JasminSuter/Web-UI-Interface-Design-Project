<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("FAQ Page Loaded");
    });
</script>

<h1>Frequently Asked Questions</h1>

<br>

<h2>Why should I use your website over another?</h2>
<p>Our goal is to make the commissioning process as streamlined as possible within our website. Our unique requesting feature allows artists to find</p>
<p>clients easier and helps commissioners find the perfect artist for their vision.</p>

<br>

<h2>How do I upload content?</h2>
<p>First, make sure you're logged in to your account. Navigate to your profile, and press the upload button. Then you can upload your image and give it the appropriate caption, description, and tags, then press the upload button.</p>

<br>

<h2>How do I set my commission prices?</h2>
<p>On your profile page, there is a button for your commissions, from there, you can select your preferred medium and minimum prices for your work.</p>

<style>
    h1 {
        color: #111111;
        font-weight: bold;
    }
    h2 {
        color: #111111;
    }
</style>