<script>
    import { page } from '$app/state';
</script>
  



<div class="container">
    <p>   <img src = "/PlaceholderLogo.png"alt="logo" > </p>
    <h1 class="error-code">404</h1>
    <p class="message">
    Sorry, the page <code>{page.url.pathname}</code> doesn't exist.
    </p>
    <a class="home-button" href="/">← Go back home</a>
</div>
  

<style>
    .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background-color: var(--background, #f9f9f9);
        color: var(--text-color, #333);
    }
   
    
    img {height: 300px;width: 300px;}

    .error-code {
        font-size: 6rem;
        font-weight: 700;
        margin: 0;
        color: var(--primary-color, #8590af);
        animation: pop 0.5s ease-out;
    }

    .message {
        font-size: 1.25rem;
        margin: 1rem 0;
    }

    code {
        background-color: rgba(0, 0, 0, 0.05);
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        font-size: 1rem;
    }

    .home-button {
        margin-top: 1.5rem;
        padding: 0.75rem 1.5rem;
        background-color: var(--primary-color, #8590af);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        transition: background-color 0.2s ease-in-out;
    }

    .home-button:hover,
    .home-button:focus {
        background-color: var(--primary-dark, #8590af);
    }

    @keyframes pop {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
  