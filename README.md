# Markr

- Geocoding API
- Maps JavaScript API
- Places API

Inspired by [Flickr](https://www.flickr.com), Markr is a Landmark sharing app where people can post their favorite landmarks. Users can also interact with other user's landmark post by putting reviews and suggestions.

All features update the page the user is on without a refresh of the page through use of the Redux store.

- [Live Site](https://mark-r.herokuapp.com/)
- [MVP Feature List](https://github.com/jrbauti-09/markr/wiki/MVPs)
- [Database Schema](https://github.com/jrbauti-09/markr/wiki/Database-Schema)

# Technologies Used

## Hosting

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Backend

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Additional React Libraries used

![Googlemaps](https://raw.githubusercontent.com/JustFly1984/react-google-maps-api/master/logo.png)

- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)

- [use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)

- [@reach/combobox](https://www.npmjs.com/package/@reach/combobox)

- [react-toastify](https://www.npmjs.com/package/react-toastify)

## Documentation used for google API

https://react-google-maps-api-docs.netlify.app/

https://developers.google.com/maps/documentation/javascript/places-autocomplete

# Getting started

1. Clone this repository

   `git clone https://github.com/jrbauti-09/markr.git`

2. CD into the backend directory and install dependencies

   `npm install`

3. CD into the frontend directory and install dependencies

   `npm install`

4. Create a .env file based on the .env.example given

5. Create a user in psql based on your .env DB_USERNAME

   `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

6. Create the database, migrate, and seed

   `npx dotenv sequelize db:create`

   `npx dotenv sequelize db:migrate`

   `npx dotenv sequelize db:seed:all`

7. Open up two terminals and cd into the backend and frontend directories, respectively. Start the server in each by running:

   `npm start`

# Features

## Splash Page & User Authentication

Users can log into an existing account or sign up. Alternatively, users can test the site with the Demo Login feature.

![Splash Page](./readme_images/Splash_page.png)
![Login Form](./readme_images/Login_page.png)
![Sign Up Page](./readme_images/Sign_Up.png)

## User Explore/Collections Page

### Navigation

- The active tab that is currently being displayed is shown on the navigation bar.

Once the user is logged in, they can view all Landmarks posted on the app.

- Hovering over landmarks creates a transition letting the user know which landmark is in focus.
- Clicking on a landmark will display a zoomed in modal of that landmark, with a navigation button that directs the user to the landmark details tab.

A user can post a new landmark by clicking "Post landmark" in the navigation bar.

- Edit and delete buttons only for users that own the landmark post.

This feature is available on the Collections tab which can be viewed by clicking "Your Landmarks" in the navigation bar.

![User Explore](./readme_images/Explore_page.png)
![User Collections](./readme_images/Collections_page.png)
![LandMark Image](./readme_images/ladnmark_pop.png)

## Landmark Form

Users can post their favorite landmarks via the "Post landmark" tab. The landmark form includes:

- Landmark name input
- Image file upload via AWS hosting
- Description of their favorite landmark
- An address search bar which uses Places API to autocomplete and list address options for user.

![Create Landmark Form](./readme_images/Landmark_Form.png)
![Edit Landmark Form](./readme_images/can_edit_landmark.png)

- AWS upload, image files. .png .jpg etc.
  ![AWS upload](./readme_images/aws_upload.png)
- User can also delete their Landmarks on the "Your landmarks" tab.
  ![Delete Image Form](./readme_images/can_delete_landmark.png)

## Landmark Details and Reviews

When user clicks on a landmark on either the "Your Landmarks" tab or the "Explore" tab they have the option to go to the details page of that specific landmark. After clicking the map logo they are directed to the details page which contain:

- Landmark reviews posted by user or other users in the community.
- Description of Landmark and date of post.
- User who posted Landmark.
- Image of the Landmark posted.
- Interactive google map which the user can explore with to discover other places they might stumble upon!

![Can fetch image from google api](./readme_images/landmark_details.png)

- User can add a review clicking the icon below the Landmark Reviews
  ![User can post a review icon](./readme_images/add_review_icon.png)
- User can post a review
  ![User can post a review](./readme_images/add_review_form.png)
- User can edit their form
  ![User can edit a review](./readme_images/edit_review_form.png)

## Search

When posting/editing a Landmark, users can search landmark address for latitude and longitude coordinates.

Search coverage: Entire world map

### Google Maps API

- Maps Java script API
  - Unlimited requests per day.
  - 30,000 loads per minute.
  - 300 loads per minute per user.
  - Shows surrounding details via customized radius view option(object).
- Geocoding API
  - Provides geocoding and reverse geocoding of addresses based on user's input.
  - Converts user's address input into geographic coordinates (like latitude and longitude) via getGeocode in the usePlacesAutoComplete react library.
- Places API
  - Integrated with Geocoding API (reverse geocoding of address).
  - Map will pan to location based on user's input.
  - Place Search returns list of places based on a user's location or search string.
  - Place Autocomplete automatically fills in the name and/or address of a place as users type.
  - Place photos provides access to the millions of place-related photos stored in Google's Place database.

![Prior Search](./readme_images/Before_search.png)

- Shows address options for users as they type.

![During Search](./readme_images/during_search.png)

![Option Search](./readme_images/prior_click_search.png)

- Pans map to selected option.

![Result](./readme_images/Result_Search.png)

- Can fetch images around location via google api.

![live image](./readme_images/statue_of_liberty_live_image.png)

- Automatically fills in geographic coordinates for user's landmark form.

![Post Search](./readme_images/auto_pan_input.png)

- Can show surrounding details around centered location.

![Fetch Search](./readme_images/Fetches_other_details_surrounding.png)

## Upcoming Features

- Ability for user to filter their landmark explore page based on the desired region. (North America, South America, Europe, Asia, Africa etc.)
- User profile page which can have comments and ratings.
- Ability to message other users in the application.
- Ratings for Landmark posts.
