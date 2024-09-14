document.addEventListener("DOMContentLoaded", () => {
    // Array of London image URLs in the order of the images in your HTML
    const londonImages = [
        "https://images.unsplash.com/photo-1562777717-62d8f33abcb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // The City of London
        "https://images.unsplash.com/photo-1516038392082-7a337ffb692a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Buckingham Palace
        "https://images.unsplash.com/photo-1589395595558-cf2a89948eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Camden Town
        "https://images.unsplash.com/photo-1519751138087-5bf80f6f6d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Soho
        "https://images.unsplash.com/photo-1549547134-2460d43a5fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Kensington + Chelsea
        "https://images.unsplash.com/photo-1505923630310-0bd6f46c4070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  // Shoreditch
    ];

    // Get all the images in the gallery section
    const images = document.querySelectorAll("#london-gallery .gallery img");

    // Log to check if images are being selected correctly
    console.log("Images found:", images.length);

    // Assign a specific image URL to each image tag in the gallery
    images.forEach((image, index) => {
        if (index < londonImages.length) {
            console.log(`Setting image ${index} to ${londonImages[index]}`);
            image.src = londonImages[index];
            image.width = 300;
            image.height = 200;
        } else {
            console.warn(`No URL for image index ${index}`);
        }
    });
});