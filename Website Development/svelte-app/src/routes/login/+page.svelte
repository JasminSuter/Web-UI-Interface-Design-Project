<script>
    import { onMount } from 'svelte';
    let email = "";
    let isValid = false;

    onMount(() => {
        console.log("Contact Page Loaded");
        const saved = localStorage.getItem("email");
        if (saved) email = saved;
        console.log(email); // this doesn't work right now oopsies
    });

    function validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = regex.test(email);
    }

    function handleInput(event) {
        if (isValid)
        {
            email = event.target.value;
            localStorage.setItem("email", email);
            console.log("good job");
        }
        else {
            console.log("NO");
        }
    }
</script>


<h1>Log In</h1>

<input type="email" bind:value={email} on:input={validateEmail} placeholder="Enter your email">

<button on:click={handleInput}>Submit</button>
{#if email}
    {#if isValid == false}
        <p>Please enter a valid email</p>
    {/if}
{/if}

