import { render } from '@testing-library/react';
import App from './App';

//NOTE: i have not been able to run tests with React | i have spoke to my mentor and it does not work | i don't know how to resolve this

//Smoke test | render
test('App renders without crashing', () => {
   render(<App />);
});
