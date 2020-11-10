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

Testing this site was conducted using various methods to identify any bugs throughout the site. I did not use automatic testing such as Jasmine
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

* User Goals
    * As a user, I want to be able to navigate through the entire site, comfortably and securely.
        * When the site is first loaded, a navbar is presented clearly and is easily readable. Users are made to feel comfortable with the
        simplicity of the site.
        * A hero image gives the user an insight of waht to expect to see in Cornwall.
        * Content hinting gives incentive to scroll down.
        * The user is also invited through the navbar to click between pages. The navbar remains present on all pages, so the security of knowing
        you can go anywhere at anytime is there.
    * As a user, I want to be able to easily contact the site with any initial queires that I may have, submit questions, and recieve an
        acknowledgement of my message being received, and a due response.
        * At first sight of the home page, a navbar clearly indicates the option to 'Contact'.
        * Upon clicking 'Contact', the user is presented with a hero image, and again content hinting to encourage them to scroll. Upon scrolling,
        the user will see a minimal form to keep the process clear and simple.
        * The form encourages the user with a heading and asks for their name, email and message, follwed by a clear 'Submit' button.
        * The user cannot submit the contact form until it is filled out correctly, and all fields are filled in.
        * Once the user has clicked the submit button, a modal pop up is presented with acknowledgement of success with the submission of the form.
    * As a user, I want to learn more about the county of Cornwall and its history, and what can be seen and done there, where to eat and where to
        stay.
        * After arriving at the easy-to-read home page, the navbar presents two other clear options: 'Experience' and 'Contact'.
        * Content hinting is found on the home page where the user can scroll down, and discover an inspiring story of Cornwalls history, images
        relating to the story, and a YouTube video on how to make a Traditional Cornish pasty.
        * Upon navigating to the 'Experience' page, the user is inviteds to interact with a map, where they can click on buttons, dropping markers
        onto the map, and then click the dropped markers to recveal an info window of information, containing the name and address of the location,
        phone numbers and a clickable link to the corresponding website.
        * Between the 'History' and 'Experience' pages, the user can learn all they need to about Cornwall, and what they can expect to find and do.
    * As a user, I want to be able follow links from the site to the site I am looking at, ie hotel or activity own's website.
        * As stated above, once the user has interacted with the map found on the 'Experience' page, and clicked on the dropped markers, an info
        window is opened, revealing information about the current marker. In each info window, a clickable link to the markers locations website
        is presented, taking the user to the corresponding website.
        * The beach locations info windows are the only info windows that do not contain a website. This is due to not all beaches have a website.
        * Upon clicking the buttons that interact with the map and drop the markers on the map, three cards are presented to the user below the map,
        with a heading 'Top 3 Recommendations'. These cards provide an image, a short sentence, and then a button that will redirect the user to the
        corresponding website.
    * As a user, I want to watch content on a Traditional Cornish pasty, perhaps even following along to the video to make their own.
        * From the home page, once the user has scrolled through the story, they are presented with an embedded YouTube video. This video
        demonstrates the method and what is needed to make a Traditional Cornish pasty. The user can enlarge the video for easier viewing,
        enabling a clearer image to follow along with.
    * As a user, I want to feel comfortable and informed about visiting Cornwall.
        * The entire site is created to provide a welcoming and calming feeling. 
        * After learning about the history of Cornwall, and watching the video on making a Traditional Cornish pasty, the user can navigate to the
        'Experience' page where they can find all the information they want using the interactive map, as stated above. They can also enquire
        further using the form  on the 'Contact' page.
    * As a user, I want to be able to follow links to social media sites.
        * In the footer of each page, the user will find clickable social media icons that once clicked will direct them to the respective platform,
        opened in a new tab.

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

talk about free formatter

clearing form