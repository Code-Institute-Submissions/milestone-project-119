function sendMail(contactForm) {
    emailjs.send("gmail", "cornwall", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_query": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}