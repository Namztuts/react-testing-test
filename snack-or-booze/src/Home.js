import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ snacks, drinks }) {
   return (
      <section className="col-md-8">
         <Card>
            <CardBody className="text-center">
               <CardTitle>
                  <h3 className="font-weight-bold">
                     Welcome to Silicon Valley's premier dive cafe (and bar)!
                  </h3>
               </CardTitle>
            </CardBody>
         </Card>

         {/* New Card to reflect how many snacks and drinks are available */}
         <Card>
            <CardBody className="text-center">
               <CardTitle>
                  <h4 className="font-weight-bold">What's on the Menu?</h4>
               </CardTitle>

               <ul>
                  <li>
                     We have ({snacks.length}) decadent{' '}
                     <Link
                        className="item-link"
                        to={'/snacks'}
                     >
                        snacks
                     </Link>{' '}
                     to choose from!
                  </li>
                  <li>
                     We have ({drinks.length}){' '}
                     <Link
                        className="item-link"
                        to={'/drinks'}
                     >
                        drinks
                     </Link>{' '}
                     to tickle your fancy!
                  </li>
               </ul>
            </CardBody>
         </Card>
      </section>
   );
}

export default Home;
