<script>
    // allowing customisation of card title and description
    export let title = "Card Title";
    export let medium = "Medium wanted";
    export let genre = "Genre wanted";
    export let price = "Price";
    export let dueDate = "When the piece needs to be completed by";
    export let description = "This is a brief description of the card.";
</script>


<!-- Modified from Card code to create a form for commission requests -->
<div class="list">
    <!--Card Content-->
    <div class="content">
        <h2>{title}</h2>
        <p>{medium}</p>
        <p>{genre}</p>
        <p>{price}</p>
        <p>{dueDate}</p>
        <p>{description}</p>
    </div>
</div>

<style>
    /* Currently just from the card code */ 
    h2{
        color:  #111111;
    }
    /* Card container with smooth hover effects */
    .list {
        background: white;
        border-radius: 10px; /* Rounded corners */
        border: 2px solid  #111111;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden;
        width: 280px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
    }

    /* Content Styling: Padding for better spacing */
    .content {
        padding: 1.5rem;
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /* Description Styling */
    .content p {
        font-size: 1rem;
        color: #555;
    }

    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the card */
    .list:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* Pseudo-Element: Adds a thin underline before the card title
       Creates a subtle decorative effect to enhance UI */
    .content h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background:  #111111;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    /* When .card is hovered, expand the decorative effect to 80% */
    .list:hover .content h2::before {
        width: 80%; /* Expanded width on hover */
    }
</style>