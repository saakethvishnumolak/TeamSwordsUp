//import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';

//import {render} from "@testing-library/react";
//import App from '../App';


const playerSearch = require("./App")

require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  fetch.resetMocks();
})


const handleButtonClick = require('./App/handleEnter');
test('Validate number of played games', () => {
  playerSearch.state.playerName = 'Lebron';

  handleButtonClick();
  expect(playerSearch.state.playerStats['games_played']).toBe(67);
});


//This test is to see if the code actually works and should pass

/*
test("Search for a player that is in the NBA (valid name)", async () => {
  render(<App />);
  const search_for_player = "Paul George";
  const search_directory = `https://www.balldontlie.io/api/v1/players?search=${search_for_player}`
  fetch(search_for_player + search_directory);
  expect(App(search_for_player)).toBe(search_directory);
});
*/

//This test is to see if the code actually works and it should fail

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/


