<script>
    // allowing customisation of card title, description and image
    export let title = "Card Title";
    export let description = "This is a brief description of the card.";
    export let image = '';

    export let medium = "Mediums offered";
    export let genre = "Genres offered";
    export let price = "Price range";
    export let other = "other info about commissions";
</script>


<!-- Card Container -->
<div class="profilecard">
	<div class="content">
		<h2>{title}</h2>
        <img src={image || '/PlaceholderIcon1.png'} alt={title} class="profilecard-image"/>
		<p>{description}</p>
	</div>

    <div class="commission">
        <p>{medium}</p>
        <p>{genre}</p>
        <p>{price}</p>
        <p>{other}</p>
    </div>

</div>

<style>
    h2{
        color:  #000000;
    }
    /* Card container with smooth hover effects */
    .profilecard {
        background: rgb(185, 196, 228);
        border-radius: 10px; /* Rounded corners */
        border: 2px solid  #111111; /* Add border around card */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden; /* Don't display any content that goes beyond card boundary */
        width: 280px;
        height: 840px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
        position: relative; 
        transform-origin: center; /* card will scale from point of origin */
    }

    .profilecard-image {
        width: 90%; /* Set a fixed width and height and make it square */
        height: auto;
        position: relative;
        border-radius: 50%; /* Make image a circle */
        border: 2px solid #000000; /* White border around the circle */
        object-fit: cover; /* image fills circle */
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        text-align: left;
        padding-left: 10px;
    }

    /* Description Styling */
    .content p {
        font-size: 1rem;
        color: #000000;
        position: relative; /* position within the card is absolute */
        text-align: left;
        padding-left: 10px;
        padding-bottom: 10px;
    }

    /* Description Styling */
     .commission p {
        font-size: 1rem;
        color: #000000;
        position: relative; /* position within the card is absolute */
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
    }

    /* Pseudo-Element: Adds a thin underline underneath title*/
    .content h2::after {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background:  #000000;
    }

    /* Pseudo-Element: Adds a thin underline underneath description*/
    .content p::after {
        content: "";
        display: block;
        width: 80%;
        height: 2px;
        background:  #000000;
    }

    /* Pseudo-Class: Hover Effect
    Adds a subtle lift when hovering over the card */
    .profilecard:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        z-index: 2;
    }

</style>



