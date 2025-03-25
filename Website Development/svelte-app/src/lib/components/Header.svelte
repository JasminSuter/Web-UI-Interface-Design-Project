
<script>
    import { Navigation } from "$lib";
</script>
<!-- Header -->
<header>
    <!-- logo-->
    <div class = "logo">
        <img src="/logoB.png" alt ="Website Logo">
        <h1>Web UI Design</h1>
    </div>

    <!--importing the header from navigation-->
    <Navigation />
</header>


<style>
    /*Header Styling*/
    header {
        background-color: #111111;
        padding: 1rem;
        text-align: right;
       
    }
    /*Logo container*/
    .logo {
        display: flex;
        align-items: center;
    }
    .logo img {
        width: 75px;
        margin-right: 0.625rem;
        transition: 0.5s;
    }

    .logo img:hover {
        transform: rotate(360deg);
    }
    h1{
        color: #ffffff;
    }
    /* Making the header responsive */
    @media (max-width: 768px) {
        header {
            text-align: center;
        }
    }
</style>