# Testing
[back to README.md file](https://github.com/Gregory4321/milestone-project-2/blob/master/README.md)
## Table of Contents:
* [W3C Validators](#w3c-validators)
* [DevTools](#devtools)
* [Site Testing](#site-testing)
    * [User Stories from User Experince (UX) Section](#user-stories-from-user-experience-(ux)-section)
        * [First Time Visitor Goals](#first-time-visitor-goals)
    * [User Testing](#user-testing)
        * [Peer Code Review](peer-code-review)
        * [User Review](user-review)
    * [Further Testing](#further-testing)
***

Testing this site was conducted using various methods to identify any bugs throughout the site. I did not use any automatic testing such as Jasmine
as I did not feel confident in having enough knowledge to execute the testing in this area. I did use however automatic testing in the form of W3C
Validators and JSHint.

## W3C Validators

The W3C Markup Validator and W3C CSS Validator Services were used to validate the code on all of the pages and to make sure that there were no
syntax errors in the project. Both the HTML and CSS code was run through these services regualarly during the building of this project to ensure
the code was valid throughout the process and to avoid nasty suprises at the end. 

* [W3C Markup Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## JSHint Validator

The JSHint validatorwas used to pass the JS code through and increase the code quality and detect any potential bugs. It pointed out any issues and
warnings that I could then easily rectify, as also showing what variables were unused or undefined. I found a lot of warnings in my maps.js code,
about how 'template literal syntax' is only available in ES6 (use 'esversion: 6'). I believe these warnings can be overlooked as I was advised by
tutor support and the slack community throughout this project, as well as the CI lessons, that template literals were a better way of coding, creating
cleaner and more easy to read code.

* [JSHint](https://jshint.com/)

## DevTools

Google Chrome DevTools was used for rigorous testing of the site. It was used for various different reasons.
    
* It tested for the responsiveness of the site across multiple screen resolutions.
    * It revealed an issue with the navbar. When the screen resolution was smaller, and the hamburger icon took over for the navbar, once it was then
    clicked the text was not very clear, so a media query was added to set a background colour of the dropdown menu.
    * When scrolling the screen, the back to top button appeared, but it appeared that when the bottom of the screen was reached, the back to top
    button sat over the footer and social icons, making the last icon impossible to click. Media queries were added to change the size and
    positioning of the button.
    * The socail link icons also had media queries added once tested, to control and ensure the size and placement on different
    screen sizes.
    * The Bootstrap grid system was updated and implemented more often to control how the columns responded.
    * When opening the site through the link of the deployed webiste from Github, the console produced and error regarding the favicon. A link tag
    was added into the head of all pages which resolved this issue.
    * After placing console.log though the code whilst testing, one main issue I discovered was it was saying how the selectedLocations was undefined,
    and this didn't make sense due to the map was working correctly pulling locations from the arrays they were meant to, by using a loop containing
    the selectedLocations. I discovered that the solution was a simple one, the inncorrect positioning of a bracket. The if statement needed to
    contain all the code relating to markers.
    
* Debugging
    * Highlighted incorrect use of styling and/or Bootstrap.
    * The social icons wrapping together, and navbar links being not very visible, and the back to top button overlaying the social icons. All of
    these issues were addressed using media queires to alter sizes, positioning and background colour across the various screen sizes.
    * Console.log was used and placed amoungst the code to debug any issues

## Site Testing 

### User Stories from User Experience (UX) Section

* First Time Visitor Goals:
    * As a first visitor, I want to be able to navigate through the entire site, comfortably and securely.
        * When the site is first loaded, a navbar is presented clearly and is easily readable. Users are made to feel comfortable with the simplicity of the site. 
        * A hero image underneath contains overlaying text of a welcoming and informative manner. There is also a call to action button to join the gym now. 
        * Content hinting gives incentive to scroll down.
        * The user is also invited through the navbar to click between pages. The navbar remains present on all pages, so the security of knowing you can go anywhere at anytime is there.

    * As a first-time visitor, I want to be able to easily message the gym with any initial queires that I may have.
        * At first sight of the home page, a navbar clearly indicates the option to 'Contact'.
        * Upon clicking 'Contact', the user is presented with a minimal form to keep the process clear and simple.
        * The form encourages the user with a heading and asks for their name, email and message, follwed by a clear 'Submit' button.

    * As a first-time visitor, I want to learn more about the gym and what is available.
        * After arriving at the easy-to-read home page, the navbar presents two clear options: 'Classes' and 'About'. Content hinting is also found on the home page where the user can scroll down, read testimonials, and reveals an image displaying the text 'Coming Soon'.
        * Upon navigating to other pages, the user can read - alongside an image - what classes are available and what to expect. They can also read (in a vertical manner presented in cards) a flowing story of the origins of Soul Gym and its mission for the future.

* Prospective Gym Member:
    * As a prospective gym member, I want to know how much membership costs.
        * When the user first loads the site, overlaying the eye-catching hero image, text clearly displays the cost of a membership at £30 per month.
    * As a prospective gym member, I want to be able to book a tour.
        * At the bottom of each page, in the footer, a user can clearly read 'Want to see more? Book a tour here' with a calender icon that is clickable.
        * Using this link directs the user to the contact page where they can fill out the form and enquire about booking a tour. They are also reminded that they can book a tour in the heading for the contact form.
        * The user is expected to fill out this basic form to request a tour.
    * As a prospective gym member, I want to see what classes and facilities the gym offers.
        * The user from the home page is invited to scroll down the page, which reveals an image informing them that a spa is coming soon.
        * Having navigated to the 'Classes' page using the clear navbar, the user can see what classes are available and what they all offer.
    * As a prospective gym member, I want to feel comfortable and informed that this gym is right for me.
        * The entire site is created to provide a welcoming and calming feeling. The user can navigate to the 'About' page, where they can read the inspiring story of the owner's journey to starting Soul Gym.
    * As a prospective gym member, I want to be able to contact and locate the gym.
        * As written above, once the user has used the navigation to the 'Contact' page, a form is presented to contact the gym. Content hinting is also used here to have the user scroll to reveal the gym's contact details, along with an interactive map.
    * As a prospective gym member, I want to be able to sign up to the gym.
        * Using the clear and tidy navbar, the user can follow it to the 'Register' page, where a form is offered to be filled out.
        * Users must create a username, provide an email address, and create a password. They will also have to confirm this password for added security.
        * The user cannot submit the registration form until it is filled out correctly.
        * The user is then redirected to a 'Thank You' page and a button to return them to the 'Home' page. The navbar is also still of use on this page.

* As a member of Soul Gym:
    * As a member of Soul Gym, I want to be able to login to my account with the gym.
        * The user is clearly invited through the use of the navbar to head over to the 'Login' page.
        * Here, a basic form is presented asking for a username/email address and password.
    * As a member of Soul Gym, I want to be able to book a class.
        * Once the user knows what class they would like to book, they have two options which will lead to the same outcome. 
        * At the top of the 'classes' page, the user can clearly see a call to action button reading 'Book Now'.
        The navigation bar can also be used to access the contact page. The user then has to fill out the form simply stating name email and message, i.e. what class and what time slot they'd like to book. 
    * As a member of Soul Gym, I want to be kept up to date on any new facilities and initiatives the gym is working towards.
        * When following the invitation to scroll down the 'Home' page, a large image presents information that a spa is coming soon. This section will be used to display any new information of up and coming events.
    * As a member of Soul Gym, I want to be able to easily access a weekly class timetable, so I can plan my visits.
        * The user can use the navbar to access the 'Classes' page from any other page. Content hinting is used to provoke the user to scroll down. Once they do they are presented with the timetable of classes.
    * As a member of Soul Gym, I want to be able to submit any questions, feedback or complaints.
        * The navbar clearly presents the 'Contact' page. A form is first seen after the heading of 'Got a question'. The user can use this form to submit a query, complaint or feedbak they like.


[Back to Top](#table-of-contents)

### User Testing

Once my project was nearly finsihed, minus the odd bug issue, I sent it out to be reviewed.

#### Peer-code-review

My project was submitted to the peer-code-review channel page of the Slack community for Code Institute. The overall reviews were positive, 
providing compliments of the dynamic and fluid structure to the scrolling of the pages, and the clean and tidy spacing of the elements of the page.

I was advised to check a few basic spelling errors, as well as the text-align used on my home page could be cleaner if it was set to justify. I
implemented these changes where necessary.

#### User Review

My project was also sent out to various friends and family members to review the site thouroughly and read through the supporting documentation. I
received feedback from people of different ages and professions and they notifyied me of any bugs and/or user experience issues. The general
reviews of my page were positive, commenting on the inviting colours and appealing imagery. The structure was complemented along with the ease of
navigation, and the site's uncluttered design.

### Further Testing
The website was tested on Google Chrome, Internet Explorer, Microsoft Edge, Mozilla Firefox and Safari browsers. It was viewed on a range of
different devices, such as desktop, laptops, iPhone 5S, iPhone 8 plus, iPhone 12 Pro, iPhoneX, iPad 2019, and Samsung Galaxy. Extensive testing
was carried out to make sure the links were working correctly, and that the images are loading correctly.