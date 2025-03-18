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
    </ul>
</nav>


<style>
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 15px;
        font-size: 2rem;
    }
    
    nav ul li a {
        text-decoration: none;
        color: #8590af;
        font-weight: bold;
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
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #007bff;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style>
