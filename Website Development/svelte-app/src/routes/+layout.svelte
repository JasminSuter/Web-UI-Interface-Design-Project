<script>
    // Import components
    import { Header, Footer} from "$lib";
</script>


<Header />
<!-- Page Content -->
<main>
    <slot />
</main>

<Footer />

<style>
    
    main {
        padding: 2rem;
        color: white;
        text-align: center;
        background-color: #8590af;
    }

</style>
