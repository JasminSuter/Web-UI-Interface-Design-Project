<!-- Source: https://alphonso-javier.medium.com/svelte-simple-login-with-local-storage-and-stores-723759da36b3 -->
<!-- Modified slightly from that website-->
<!-- Thanks for your help Libor!-->
<script>
	import { username, password } from '$lib/store'
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	//import { onDestroy } from 'svelte'
	//let user_value = {username: "", password: ""}; // object for storing username and password
	//user.subscribe((u) => (user_value = u)) // changing user value to whatever u is, if u is updated
	//let unsubscribe = user.subscribe((u) => (user_value = u))
	//let username = ""; // username value for input form
	//let password = ""; // password value for input form

	let isLogged = false;
	
	function handleLogin() {
		if (!$username || !$password) {
			alert('please enter your credentials')
			return
		}

		// @ts-ignore
		localStorage.setItem('username', get(username))
		// @ts-ignore
		localStorage.setItem('password', get(password))
		isLogged = true;
		
		//const newUser = {
		//	username: username, 
		//	password: password
		//}
		//user.set(newUser)
		//JSON.stringify(user_value)
	}

	function handleLogout() {
		//user.update((u) => (u = '')) // emptying user value after log out
		//const defaultUser = {}
		username.set("")
		password.set("")
		// @ts-ignore
		localStorage.setItem('username', get(username))
		// @ts-ignore
		localStorage.setItem('password', get(password))
		//user.set(defaultUser)
		isLogged = false;
        console.log("Logged Out Successfully");
	}

	onMount( () => {
		console.log($username);
		console.log($password);
		if ($username !== "" && $password !== "")
			isLogged = true;
	});
	//$: console.log(user_value)
	//onDestroy(unsubscribe)
</script>

<svelte:head>
	<title>Log In</title>
</svelte:head>

<div class="login">
{#if isLogged}
	<h3>You are logged in as: {$username}</h3>
	<button on:click={handleLogout}>Logout</button>
{:else}
	<h3>Username</h3>
	<input type="username" bind:value={$username} placeholder="Enter username" />
	<br>
	<h3>Password</h3>
	<input type="password" bind:value={$password} placeholder="Enter password" />
	<br>
	<button on:click={handleLogin}>Login</button>
{/if}
</div>

<style>
	.login {
		justify-content: center;
	}
	.login input
	{
		height: 30px;
	}
	.login button {
		height: 50%;
		width: 10%;
	}
	.login h3 {
		color: #111111;
		font-weight: bold;
	}
</style>