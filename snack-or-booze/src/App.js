import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
// import FoodMenu from './FoodMenu';
// import FoodItem from './FoodItem';
// NOTE: created new generic components for Menu and Item to replace FoodMenu and FoodItem
import Menu from './Menu';
import Item from './Item';
import NewItemForm from './NewItemForm';

function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [snacks, setSnacks] = useState([]);
   const [drinks, setDrinks] = useState([]);

   const [refresh, setRefresh] = useState(0); //refresh state to refresh the page when a new item is added
   const refreshData = () => setRefresh((prev) => prev + 1);

   // NOTE: modifying the API call to also get drinks | adding a try and catch for error handling
   useEffect(() => {
      async function getData() {
         setIsLoading(true); //loading while the data is being fetched and shown on page
         try {
            const [snackData, drinkData] = await Promise.all([
               SnackOrBoozeApi.getSnacks(),
               SnackOrBoozeApi.getDrinks(),
            ]);
            setSnacks(snackData);
            setDrinks(drinkData);
         } catch (error) {
            console.error('Error fetching data:', error);
         } finally {
            // finally runs regardless of wether try or catch succeed
            setIsLoading(false);
         }
      }
      getData();
   }, [refresh]); //anytime the refresh state is updated, get the drinks and snacks

   if (isLoading) {
      return <p>Loading &hellip;</p>;
   }

   return (
      <div className="App">
         <BrowserRouter>
            <NavBar />
            <main>
               <Switch>
                  <Route
                     exact
                     path="/"
                  >
                     <Home
                        snacks={snacks}
                        drinks={drinks}
                     />
                  </Route>

                  <Route
                     exact
                     path="/snacks"
                  >
                     {/* adding basePath prop to generic menu routes */}
                     <Menu
                        items={snacks}
                        title="Snacks"
                        basePath={'/snacks'}
                     />
                  </Route>
                  <Route path="/snacks/:id">
                     <Item
                        items={snacks}
                        cantFind="/snacks"
                     />
                  </Route>

                  {/* Adding Routes for the drinks */}
                  <Route
                     exact
                     path="/drinks"
                  >
                     <Menu
                        items={drinks}
                        title="Drinks"
                        basePath={'/drinks'}
                     />
                  </Route>
                  <Route path="/drinks/:id">
                     <Item
                        items={drinks}
                        cantFind="/drinks"
                     />
                  </Route>

                  {/* Adding route to add item */}
                  <Route
                     exact
                     path="/new/:item(drinks|snacks)" //allows this route to only allow drinks or snacks | uses catch all if now
                  >
                     <NewItemForm refreshData={refreshData} />
                  </Route>

                  <Route>
                     <p className="warning">
                        Hmmm. I can't seem to find what you want.
                     </p>
                  </Route>
               </Switch>
            </main>
         </BrowserRouter>
      </div>
   );
}

export default App;
