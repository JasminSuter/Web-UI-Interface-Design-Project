<!-- Source: https://alphonso-javier.medium.com/svelte-simple-login-with-local-storage-and-stores-723759da36b3 -->
<!-- Modified slightly from that website-->
<script>
	import { user } from '$lib/store'
	import { onDestroy } from 'svelte'
	let user_value = {"username": "", "password": ""}; // object for storing username and password
	user.subscribe((u) => (user_value = u)) // changing user value to whatever u is, if u is updated
	let unsubscribe = user.subscribe((u) => (user_value = u))
	let username = ""; // username value for input form
	let password = ""; // password value for input form
	function handleLogin() {
		if (!username || !password) {
			alert('please enter your credentials')
			return
		}
		
		user.update((u) => u = JSON.stringify({ username: username, password: password }))
	}
	function handleLogout() {
		user.update((u) => (u = '')) // emptying user value after log out
        console.log("Logged Out Successfully");
	}
	$: console.log(user_value)
	onDestroy(unsubscribe)
</script>

<svelte:head>
	<title>Log In</title>
</svelte:head>

{#if !user_value}
	<input type="username" bind:value={username} placeholder="enter username" />
	<input type="password" bind:value={password} placeholder="enter password" />
	<button on:click={handleLogin}>Login</button>
{:else if user_value}
	<h3>You are logged in as: {(user_value).username}</h3> <!--The username doesn't display when you first log in, but does after refresh?-->
	<button on:click={handleLogout}>Logout</button>
{/if}