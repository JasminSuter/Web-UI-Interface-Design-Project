<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    });
</script>


<h1>Log In</h1>

<!-- form is currently not functional -->
<form>
    <label for = "user">Username</label>
    <input type="text" id="user">
    <br>
    <label for = "password">Password:</label>
    <input type="text">
    <br>
    <input type="submit">
</form>

