<script>
    // allowing customisation of card title, description and image
    export let title = "Card Title";
    export let description = "This is a brief description of the card.";
    export let image = '';
</script>


<!-- Card Container -->
<div class="card">
	
    <!-- Dynamic Placeholder Image -->
        <img src={image || '/PlaceholderIcon1.png'} alt={title} class="card-image"/>

	<!-- Card Content -->
	<div class="content">
		<h2>{title}</h2>
		<!-- Description is initially hidden and shows on hover -->
		<p class="description">{description}</p>
	</div>
</div>

<style>
    h2{
        color:  #000000;
    }
    /* Card container with smooth hover effects */
    .card {
        background: rgb(185, 196, 228);
        border-radius: 10px; /* Rounded corners */
        border: 2px solid  #111111; /* Add border around card */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden; /* Don't display any content that goes beyond card boundary */
        width: 280px;
        height: 620px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
        position: relative; 
        transform-origin: center; /* card will scale from point of origin */
    }

    .description {
		position: absolute; /* position within the card is absolute */
        text-align: left;
        
        /* positions the card in the bottom left corner of the card with some padding*/
		bottom: 40px;
		left: 10px;
		right: 10px;
	}

        /* Content Styling: Padding for better spacing */
    .content {
        position: absolute; 
	    top: 10px;
	    left: 10px;
	    width: 100%;
	    height: 100%;
	    color: white;
	    display: flex;
	    flex-direction: column;
	    align-items: flex-start; /* Align to the left */
        transition: opacity 0.3s ease-in-out;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures image fills the card without stretching */
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0; /* Keeps it behind the overlay content */
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /* Description Styling */
    .content p {
        font-size: 1rem;
        color: #000000;
    }

    /* Pseudo-Element: Adds a thin underline before the card title
       Creates a subtle decorative effect to enhance UI */
    .content h2::after {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background:  #000000;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    /* Pseudo-Class: Hover Effect
    Adds a subtle lift when hovering over the card */
    .card:hover {
        transform: scale(1.2);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        z-index: 2;
    }

    .card:hover .card-image {
        object-fit: cover; /* Ensures image fills the card without stretching */
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0; /* Keeps it behind the overlay content */
    }


    /* When .card is hovered, expand the decorative effect to 80% */
    .card:hover .content h2::after {
        width: 80%; /* Expanded width on hover */
    }

    /* Show description only when hovering over image */
    .card:hover .description {
		opacity: 1; /* Make it visible */
		transition: opacity 0.3s ease, visibility 0s 0s; /* Smooth transition */
	}

</style>



