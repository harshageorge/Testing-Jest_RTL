import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

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
  const colorButton = screen.getByRole('button');
  const checkBox = screen.getByRole('checkbox');
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

 
})

  