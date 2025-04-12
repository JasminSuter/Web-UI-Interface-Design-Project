
<script lang="ts">
    let file: FileList | null = null; /* file can either be a file list, initialized to null so no file selected is the default */
  
    let imageUrl: string | ArrayBuffer | null = null;

    function handleFileSelect(event: Event): void {
      const input = event.target as HTMLInputElement;
      const file = input?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
  </script>
  
  <!-- form that sends data using POST method, enrypting is essential to correctly transmit data to server -->
  <h2>Update Image</h2>
  <form method="POST" enctype="multipart/form-data">
    <input type="file" name="image" on:change={handleFileSelect} bind:files={file} accept="image/*" required />

      <!-- type="file" allow users to select files from their device
        name="image" assign name "image" to the input
        bind:files={file} svelte specfic, binds the selected files to file variable 
        accept="image" restircts file seleciton dialog to show only image files to filter acceptable types
        recuired ensures that user must select file before submitting-->

    <div> 
      {#if imageUrl}
        <img src={imageUrl as string} alt="preview" style="max-width: 300px; margin-top: 10px;" />
      {/if}
    </div>
    
    <button type="submit">Upload</button>   <!-- button that submits data to server when clicked-->
  </form>
