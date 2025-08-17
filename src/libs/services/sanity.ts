import { createClient } from "next-sanity";

 const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your Sanity project ID
    dataset: 'production', // e.g., 'production'
    apiVersion: '2025-08-16', // Use the current date or a specific API version
    useCdn: true, // Set to false if you need fresh, un-cached data
    // token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
});

export default sanityClient;