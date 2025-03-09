import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './Menu';

const snacks = [
   { id: 'chips', name: 'Chips' },
   { id: 'pretzels', name: 'Pretzels' },
];

// test('debug component output', () => {
//    const { debug } = render(
//       <Menu
//          items={[]}
//          title="Snacks"
//          basePath="/snacks"
//       />
//    );

//    // Debug to see the full output of the component
//    screen.debug();
// });

test('01 renders Menu component with snack items', () => {
   render(
      <MemoryRouter>
         <Menu
            items={snacks}
            title="Snacks"
            basePath="/snacks"
         />
      </MemoryRouter>
   );

   expect(screen.getByText('/snacks/i')).toBeInTheDocument();
   //    expect(screen.getByText('Chips')).toBeInTheDocument();
   //    expect(screen.getByText('Pretzels')).toBeInTheDocument();
});

// test('Renders App component', () => {
//    const { getByText, debug } = render(
//       // NOTE: should work but tests are not running | getting error "Cannot find module 'react-router-dom' from 'src/App.test.js'"
//       // NOTE: initialEntries is the page we are on right now, most recent location | in our case it is the root route
//       <MemoryRouter>
//          <Menu
//             items={snacks}
//             title="Snacks"
//             basePath="/snacks"
//          />
//       </MemoryRouter>
//    );

//    debug(); //NOTE: doesn't get this far

//    expect(getByText('Snacks Menu')).toBeInTheDocument();
// });
