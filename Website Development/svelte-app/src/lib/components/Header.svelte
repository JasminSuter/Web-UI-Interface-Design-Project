
<script>
    import { Navigation } from "$lib";
</script>
<!-- Header -->
<header>
    <!-- logo-->
    <div class = "logo">
        <img src="/PlaceholderLogo.png" alt ="Website Logo">
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
        width: 50px;
        margin-right: 0.625rem;
    }
    h1{
        color: #ffffff;
    }
</style>