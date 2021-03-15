# Virtualtrips code challenge

[Live app](https://poi-search.netlify.app/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Technologies used

- `create-react-app` to bootstrap the app.
- `Typescript` for type checking.
- `Prettier` for consitent code formatting.
- `ESLint` for code linting.
- `styled-components` for managing CSS in React.
- `axios` for performing HTTP requests.
- `react-router-dom` for routing functionality.
- `react-testing-library` for testing components
- `lodash.debounce` to save API calls by waiting for the user to finish typing before triggering the API call.

## Features

- Can search for points of interest.
- Points of interest are displayed dynamically as the user performs the search.
- When clicking on `See more...` of one of the results, the user is taken to the details where he gets a map view of the location as well as the details of the location.

## Improvements

- Better handling of errors
- A loader to show when a search is on going
- Cover more cases in the tests
- A nicer design :)
