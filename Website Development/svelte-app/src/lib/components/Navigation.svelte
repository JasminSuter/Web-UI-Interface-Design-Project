<script>
    let isOpen = false; // Menu state (open/closed)
</script>

<!-- Navigation Container -->
<nav class = "nav">
    <!--Burger Menu if using a small screen-->
    <button class="burger" on:click={ () => isOpen = !isOpen} aria-label="Toggle Navigation">
        ☰
    </button>

    <!--Navigation links-->
    <ul class:open={isOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/request">Requests</a></li>
        <li><a href="/login">Log In</a></li>
        <li><a href="/upload">Upload</a></li>
    </ul>
</nav>


<style>
    @keyframes burgerOpen { /* make the burger menu fade in when opening */
        from {opacity: 0%;}
        to {opacity: 100%;}
    }
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        z-index: 3;
    }
    
    nav ul li {
        margin: 0 15px;
        font-size: 2rem;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #8590af;
        font-weight: bold;
        transition: 0.25s;
    }

    nav ul li a:hover {
        color: #5b6275; 
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: white;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
            transition: 0.25s;
            z-index: 2;
        }

        .burger:hover {
            transform: rotate(180deg);
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #111111;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            animation-name: burgerOpen;
            animation-duration: 0.25s;
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style>
