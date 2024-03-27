
var type = new Typed(".text", {
    strings:["consectetur","adipisicing"],
    typeSpeed: 150,
    backSpeed:150,
    loop: true
  });

  document.addEventListener("DOMContentLoaded", function() {
    const contactButton = document.getElementById("contactButton");
    const contactModal = document.getElementById("contactModal");
    const closeButton = document.querySelector(".close");

    contactButton.addEventListener("click", function() {
        contactModal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        contactModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    });

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const formData = new FormData(contactForm);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        
        contactModal.style.display = "none";
    });
});


function submitForm() {

  alert("Thank you for contacting us!");
}
