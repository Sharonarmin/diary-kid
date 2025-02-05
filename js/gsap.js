$(document).ready(function () {
    // GSAP Page Load Animation
    gsap.from(".product-small img, .product-medium img", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".highlight", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out"
    });

    // Product Click Animation
    $(".product-item").click(function () {
        let newImage = $(this).attr("src");
        let newName = $(this).attr("data-product");
        let newTitle = $(this).attr("data-title");
        let tl = gsap.timeline();

        // Fade out the main image & text
        tl.to("#mainImage, .product-name, .product-title", {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
            onComplete: function () {
                // Update content
                $("#mainImage").attr("src", newImage);
                $(".product-name").text(newName);
                $(".product-title").text(newTitle);
                
            }
        });

        // Animate back in with a bounce effect
        tl.to("#mainImage, .product-name, .product-title", {
            opacity: 1,
            scale: 1,
            rotate: 5,
            duration: 0.6,
            ease: "bounce.out"
        });
    });

    // Hover Effect for Products
    $(".product-item").hover(
        function () {
            gsap.to(this, { scale: 1.15, rotate: 5, duration: 0.3, ease: "power2.out" });
        },
        function () {
            gsap.to(this, { scale: 1, rotate: 0, duration: 0.3 });
        }
    );
});