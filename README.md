# Choice Lunch - Lunch Roulette

## About
Deciding where to eat lunch in downtown Boston has never been easier! Come use Choice Lunch to decide where to go next. New suggestions, old suggestions, if there's a new restaurant in town then feel free to add it to the list! You can edit and delete your own suggestions. If you don't feel like logging in you don't have to! Just click to get a new suggestion!

[Github Client Repo](https://github.com/nancyho629/choice-lunch-client)

[Github API Repo](https://github.com/nancyho629/choice-lunch-api)

[Choice Lunch Deployed](https://nancyho629.github.io/choice-lunch-client/)

[Heroku Deployed API](https://choice-lunch-api.herokuapp.com/)

## Features
- Create an account or sign into an existing one.
- Change your password.
- Add a new restaurant suggestion.
- Edit or delete restaurant suggestions owned by only by you.
- Surprise feature when adding a restaurant suggestions!
- Click to get a randomly selected restaurant from the list.
- View all restaurant suggestions and get a randomly suggested restaurant  even if you're not signed in.

### Features in the works
- Add favorites.
- Restaurant list looks like a list rather than forms, but upon clicking update it will look like a form.
- Be able to upload an image of the restaurant.
- Integrate Google Maps for directions.
- Put the list of restaurant suggestions in a modal.
- Mobile friendly.
- Implement an actual roulette wheel that gets remade with a new subset of restaurant suggestions each time a button is pressed.
- Implement a roulette wheel that spins and slows down to decide on a restaurant.

## Planning
- Write out user stories, draw out wireframe, plan entitiy relationship diagram (ERD)
- Set Up API
- Set Up Client
- Build API using one to many Rails API relationship
  - Test with curl scripts
- Build client
- Test
- Style
- Refactor


### User Stories
- As a user, I want to sign up.
- As a user, I want to log in.
- As a user, I want to add a restaurant suggestion: Restaurant Name, Best Thing(s) to Order, Address, URL, Cuisine
- As a user, I want to edit my suggestion.
- As a user, I want to delete my restaurant suggestion.
- As a user, I want to click a button to get a random suggestion.

### Wireframes
![Choice Lunch Wireframe](https://imgur.com/a/jfjQmKP)

## Technologies Used
- HTML
- CSS
- SASS
- Bootstrap
- JavaScript
- JQuery
- Ajax
