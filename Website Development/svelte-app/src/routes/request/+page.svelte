<script>
    import { onMount } from 'svelte';
    import { Form } from '$lib';

    onMount(() => {
        console.log("Request Page Loaded");
    })
</script>

<h1>Commission Requests</h1>

<p>Look at requests from users looking for artists to commission.</p>

<br>

<div class="Forms">
    <Form title="FantasyWorks inc." medium="2D Digital Art" genre="Fantasy" dueDate="15/06/2025" price="$200"
    description="Looking for an artist to create concept art for a fantasy comic series in the works. Contact us for more details."></Form>

    <Form title="Sarah Byrne" medium="Photography" genre="Wedding Photographer" dueDate="04/04/2026" price="$750"
    description="We need a photographer for our wedding next April! Will give half on acceptance and other half on the wedding day!"></Form>

    <!--placeholder-->
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
    <Form title="x" medium="x" genre="x" dueDate="x" price="x" description="x"></Form>
</div>


<style>
h1 {color: #111111;}
p {font-size: 18px;}

.Forms {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
</style>
