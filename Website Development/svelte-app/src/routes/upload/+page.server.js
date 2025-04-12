/* Handles image uploads  */

import { writeFile } from 'fs/promises'; /* importing function from node.js ti allow writing files to filesystem */
import { extname } from 'path'; /* function used to extract extension o fa file name eg jpg or png */
export const prerender = false;




/* handles form submission, default when form is submitted without specific action */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData(); /* breaks down incoming request as form data to allow access to submitted files */
        const file = formData.get('image'); /* Retrieves image file from form data */

        /* checking wether a file was uploaded */
        if (!file || typeof file === 'string') {
            return { success: false, message: 'No file uploaded' };
          
        }

        const buffer = Buffer.from(await file.arrayBuffer()); /* reads uploaded file into buffer */
        const timestamp = Date.now(); // current timestamp, important for displaying newest picture on homepage
        const filename = `${timestamp}${extname(file.name)}`; // generate unique filename with timestamp to avoid file collision
        const filepath = `static/uploads/${filename}`; /* path where uploaded file will be saved */

        const upload = filename;

        await writeFile(filepath, buffer); /* writes uploaded file to specified filepath */

        return { success: true, path: `/uploads/${filename}` }; /* returns success response with path */
    }
};