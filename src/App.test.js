import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App/>);
 const colorButton = screen.getByRole('button', { name:'Change to blue' });
 //expect background color to be red
 expect(colorButton).toHaveStyle({backgroundColor: 'red'});
 //click the button
 fireEvent.click(colorButton);
 //expect background color to be blue
 expect(colorButton).toHaveStyle({backgroundColor:"blue"});
 //expect background text to be 'Change to Red'
 expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions',()=>{
  render(<App/>);
  //check button starts as enabled
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();
  //check check box starts out unchecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
})
test('disable button when checkbox is checked and vice versa',()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  const checkBox = screen.getByRole('checkbox', {name:"Disable button"});
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
})
test("change button to gray when checkbox is checked and revert to red",()=>{
  render(<App/>)
  const checkBox =screen.getByRole("checkbox",{name:"Disable button"});
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({backgroundColor:"gray"});
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({backgroundColor:"red"});
})
  
test("change button to blue and enable checkbox to change background color to gray which is disabled",()=>{
  render(<App/>)
  const checkBox =screen.getByRole("checkbox",{name:"Disable button"});
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  fireEvent.click(colorButton);
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({backgroundColor:"gray"});
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({backgroundColor:"blue"});
});

describe("spaces before camel-case capital letters",()=>{
  test("works for no inner capital letters",()=>{
expect(replaceCamelWithSpaces("Red")).toBe("Red");
  })
  test("works for one inner capital letters",()=>{
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  })
  test("works for multiple inner capital letters",()=>{
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  })
})