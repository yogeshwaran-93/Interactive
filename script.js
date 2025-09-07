document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You could do more validation or send to a server here
    document.getElementById("confirmation").textContent = "Thank you for your message! I’ll get back to you soon.";

    // Optionally clear the form
    document.getElementById("contactForm").reset();
});
