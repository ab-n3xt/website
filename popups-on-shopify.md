# Popups on Shopify
__April 15, 2024__

I was helping one of my clients with their Shopify website when I realised Shopify doesn't offer a built-in feature to have a popup appear to new users visiting the website. A feature like this would help immensely to get users to sign up for a mailing list to get the latest on new promotions and products.

Therefore, I decided to do some digging around in and found a quick and dirty way to get started. This guide will be for those who already know how to build websites with HTML/CSS/JavaScript, but I'll do my best to go step-by-step so even those without the experience can follow along.

## Approach
To get started, I tried a bare-bone example of what I want to do, with as little code as possible. My goal was to have some text appear on the first visit, and then disappear if I visited the website again.

Therefore, I created this single HTML file with the CSS and JS embedded:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .popup {
            display: none;
        }

        .popup.active {
            display: block;
        }
    </style>
</head>
<body>
    <div class="popup">
        <p>Subscribe for 10% off your first purchase.</p>
        <button class="form-button">
            Click here to sign up!
        </button>
    </div>

    <script>
        var first_visit = { timestamp: new Date().getTime() };
        var popupElement = document.querySelector(".popup");

        checkFirstVisit();
        function checkFirstVisit() {

            if (popupElement) {
                if (localStorage.getItem('has_visited')) {
                    const tenSeconds = 10000; // 1000 * 10;
                    var last_visit = JSON.parse(localStorage.getItem('has_visited'));
                    var moreThanTenSeconds = (new Date().getTime() - last_visit.timestamp < tenSeconds) ?
                        false : true;
                    if (moreThanTenSeconds) {
                         localStorage.removeItem('has_visited');
                         checkFirstVisit();
                     }
                 }
                 else {
                     localStorage.setItem('has_visited', JSON.stringify(first_visit));
                     popupElement.classList.add("active");
                 }
             }
         }
 
         document.querySelector(".form-button").addEventListener("click", () => {
             popupElement.classList.remove("active");
         });
     </script>
 </body>
 </html>
```
![Popup Example](./01.gif)
The key part is in the JavaScript, where the popup element is found and makes the popup appear based on one of the following conditions:
- The user visited for the first time
- It has been more than a day since their last visit
                
Obviously, it doesn't look that good. Let's change that by upgrading our HTML and CSS (icon provided by Iconoir):
```html
<div class="popup">
    <div>
        <img class="popup-close" width="20px" height="20px" src="xmark-circle-solid.svg">
        <img id="popup-image" width="100px" height="auto" src="bowl.webp">
        <div class="popup-text">
            <p>Subscribe for 10% off your first purchase.</p>
            <button class="form-button">
                Click here to sign up!
            </button>
        </div>
    </div>
</div>
```
```css
.popup {
    display: none;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
}

.popup.active {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.popup-close {
    position: absolute;
    top: -10px;
    right: -10px;
}

.popup>div {
    background-color: white;
    display: flex;
    position: relative;
    min-width: 400px;
    width: 20%;
}

.popup-text {
    padding: 32px 12px;
}

#popup-image {
    object-fit: cover;
}
```
![Gif showing proper example][./02.gif]

## Adding Code to Shopify
Shopify allows us to change the code within a theme, adding in our own custom components. This part will outline how to add the code above as a drag-and-drop component so we can easily add it to existing pages on our Shopify account.

### Edit Code
Go to Online Store > Current Theme. Click the three dots and select 'Edit Code' from the dropdown.
![Screenshot of Shopify clicking the theme's 'Edit Code' function]['./03.gif']

On the left side, find the 'Section' folder and select 'Add a new section'. A popup menu will appear. Name it **email-popup** and make sure the file type is set to **liquid**.

**Enter code for email-popup.liquid**

On the left side, find the 'Assets' folder and select 'Add a new asset'. Another popup menu will appear. Name it **popup** and make sure the file type is set to **css**.

**Enter code for popup.css**

### Adding the Email Popup Section
Woo! We got past the code part, now onto adding the email popup to the website.

Go back to the Online Store > Current Theme menu and select 'Customize'.

Now you should be in the website builder. Select 'Add section' within the 'Header' group, and our 'Email Popup' section should appear. Select it.

You can customize the message on the popup, as well as the text on the button.

Save the website and now when you preview it, the popup should appear!
![Gif showing the popup functionality on the Shopify website.][./final.gif]