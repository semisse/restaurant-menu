# Restaurant Menu App

A “step-by-step” restaurant menu in React.

## Getting Started

Some steps to get the app running.

### Installing

```
$ git clone git@github.com:semisse/restaurant-menu.git
$ cd restaurant-menu
$ npm install
```

Then simply

```
$ npm start
```

## Dependecies
- Router v4
- Styled Components
- Proptypes
- History

## Architecture

### App
The App.js file will initialise the app.
The state has 4 properties:

#### data
Will hold all the data coming from the API.

#### step
Will register at which step the user is in.

#### required
It will check if Main Course page has at least one selected item.

#### loading
To check if the page is loaded or not.

ComponentDidMount() will fetch data from the API (I'm using one free service, hope it is ok). It will also set the step state to the current url. This will be important to validate if the user can or cannot go to Desert and Confirmation Pages.

After that we will have five functions. isMainCourseSelected() is a helper function to check if there is any item selected in the Main Course page.

nextStep() and previousStep() will be responsible for the navigation through buttons.

update() will register each chosen item. Also, it will check if user is on the Main Course page and if there is any selected item there. If there is, it will set the required state to false.

handleRequired() will be responsible to show a warning in the Main Course page if there is no item selected.

Since we are using Router, we wrap and pass all the props to a new component called Menu.

### Menu
This component will be responsible to render the right content in the right pages.

The switch will check the URL and render a Section component. Each component will share a lot of propos but will differ on one: category. Here we are passing a integer relative to the this.props.data.courseType we want to filter.

We will also have a redirect if the user tries to go to Desert or Confirmation page without selecting one item on the Main Course page.

Then we render the Switch, but before and after that we will also render the Map and the Navigation components respectively.

We will catch any other urls and redirect them to the Hors d'oeuvres page.

### Map
This component's goal is to show where the user is.

It will render the Router's NavLink component and it will link to every respective section.

As this component has a more intricate style, I decided to separate it from the styles/global.js and make its own file (these styles are not shared with any other element).

### Navigation
It will render two buttons where we can navigate forward or backwards.

It has a function to add a class 'disabled' to the Next button.

It has also a ternary operator to chech if the user is on Confirmation page and, if he is, show a submit button instead.

### Section
This will be a shared component that will hold the list of items from the corresponding sections.

It has a function to filter the data and get only the items listed with a certain courseType. After that, it will pass the filtered data as a prop to the Course component.

Since the API doesn't give us the names of each Section, it has also an array of Titles that will be selected accordingly.

### Course
This component will render a card for each item in our data.

In componentDidMount() we will check it the user is on the Main Course page and execute the handleRequired() - which will set the required state to true.

The handleUpdate() will execute the update() function.

renderRequired() will check if the Main Course has at least one item selected and show or hide a warning to the user.

### Confirmation
This is the last page and it will show all the selected items to the user.

It has an allergyInfo() function that will check it there is any courses with allergenic ingredients. If there is, it will show a message and a button that opens a modal. The modal will reveal which item contains allergenic ingredients and list them.

It has two more functions. SelectedCourses() will take in a parameter and will render each selected item.

Results() will map through Titles array, set each title and execute the SelectedCourses() function.

### Allergy
This will output a message to tell users there are some items selected that contain allergenic ingredients. It holds the modal.

It has its own state, to control the modal visibility.

### Required
It is only a presentational component (aka dumb component) that holds some text. I decided to make it own component as it may be reused to other messages in the future.


## Self Review
There's more than one way to skin a cat and we are always learning. It was really fun to build this app and a challange like this is always usefull to improve my skills.

My first attempt was to build the app without Router. The idea was to use the least amount of dependencies so you could better understand what is my real level of expertise. But at a certain point I decided to use Router because the app had to have some routing logic.

There is no 'done' in our industry and if I had more time I would make a bunch of things better. Here are some of the ones I identified:
- Pager is using a lot or repeat code, it could have a map. But again, if this was a real app I would probably ask for some changes on the API, if that was possible (namely the 'allery' typo).
- The same thing is true to the Menu component.
- If I were using Redux the props repetition wouldn't happen.
- If you are wondaring why am I not using find() in some functions, is because I wanted it to be compatible with IE11
- It would be cool be able to remove the course from the last page
- I didn't have time to implement better an accessability strategy, most important the usage of the tab functionality (for a quick solution I would install the react-tabs package).
- I'm not happy with the styling. It could be much better, but it does the trick. Also, I should be using some global variables (colors, for example).