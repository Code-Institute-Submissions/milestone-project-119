// Send form details to email account

function sendMail(contactForm) {
    emailjs.send("gmail", "cornwall", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message_query": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
};

// Modal pop up when form submitted

$('#myForm').on('submit', function (e) {
    $('#myModal').modal('show');
    e.preventDefault();
});