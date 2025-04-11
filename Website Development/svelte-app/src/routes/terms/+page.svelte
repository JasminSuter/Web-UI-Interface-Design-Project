<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Terms of Service Page Loaded");
    });
</script>

<svelte:head>
	<title>Terms of Service</title>
</svelte:head>

<div class = "terms">

    <h1>Terms and condtions</h1>

    <br>

    <p>These terms and conditions govern the use of Web UI Design. 
        The Site is owned and operated by Sophia Stanley, Rebecca Hollidge and Jasmin Suter.
        This is an image hosting site.</p>
    <p>By using this Site, you indicate that you have read and understood these Terms and Conditions and agree
        to abide by them at all times.
    </p>

    <br>

    <h2>Intellectual Property</h2>
    <p>All content published and made available is the property of the individual uploader.</p>

    <br>

    <h2>Acceptable Use</h2>
    <p>As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes and not to:</p>
    <ul>
        <li>Harass or mistreet other users of our Site</li>
        <li>Violate the intellectual property rights of the Site owners and other users</li>
        <li>Hack into the account of another user of the Site</li>
        <li>Post any material that may be deemed inappropriate or offensive</li>
    </ul>
    <p>If we believe you are using our Site illegaly or in a manner that violates these Terms and Conditions,
        we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take 
        any legal steps necessary to prevent you from accessing our Site.</p>

    <br>

    <h2>User Contribution</h2>
    <p>User may post the following content on our Site:</p>
    <ul>
        <li>Photos or Images</li>
        <li>Videos</li>
        <li>Public comments</li>
    </ul>
    <p>By posting publicly on or Site, you agree not to act illegally or violate these Terms and Conditions.</p>
   
    <br>

    <h2>Accounts</h2>
    <p>When you create an account on our Site, you agree that you are solely responsivle for your account and the security and privacy of your account, including password
        or sensitive information attached to that account </p>

    <p>We reserve the right to suspendor terminate your account if you are using our Site illegally or if you 
        violate these Terms and Conditions. </p>
    
    <br>

    <h2>Links to Other Websites</h2>
    <p>Our Site may contain links to third party websites or services that we do not own or control.
        We are not responsible for the content, policies or practices of any third party website or service linked
        to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these
        third party websites before using them. </p>
    
    <br>

    <h2>Limitation of Liability</h2>
    <p>The owners of this Site will not be liable for any actions, claims, losses, damages, liabilities and expenses
        including legal fees from use of the Site. </p>
    
    <br>

    <h2>Applicable Law</h2>
    <p>These Terms and Conditions are governed by the laws of Ireland</p>
    
    <br>
    
    <h2>Changes</h2>
    <p>These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and
        to reflect any changed to the way we operate our Site and the way we expect users to behave on our Site. We
        will notify users by email of changes to these Terms and Conditions or post notice on our Site.
    </p>

    <h2>Contact</h2>
    <p>Please contact us if you have any questions or concerns:</p>
    <ul>
        <li>Sophia Stanley: c00299461@setu.ie</li>
        <li>Rebecca Hollidge: c00300511@setu.ie</li>
        <li>Jasmin Suter: c00301545@setu.ie</li>
    </ul>

    <br>

</div>


    <style>
    @keyframes fadeIn {
        from {opacity: 0%;}
        to {opacity:100%;}
    }
    .terms {
        animation-name: fadeIn;
        animation-duration: 1s;
    }
    .terms h1 {
        color: #111111;
        font-weight: bold;
    }
    .terms h2 {
        color: #111111;
    }
    .terms ul {
        list-style: inside;
    }
</style>