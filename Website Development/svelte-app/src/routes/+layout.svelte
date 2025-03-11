<script>
    // Import components
    
</script>


<!-- Header -->
<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/request">Requests</a></li>
        </ul>
    </nav>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2025 My Svelte App. All rights reserved.</p>
</footer>


<style>
    
    header {
        background-color: #111111;
        padding: 4rem;
        text-align: right;
    }
    
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #8590af;
        font-weight: bold;
        
    }
    
    main {
        padding: 2rem;
        color: white;
        text-align: center;
        background-color: #8590af;
    }
    
    footer {
        background-color: #111111;
        color: #8590af;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

</style>
