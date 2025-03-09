import { Link, useHistory } from 'react-router-dom';
import './FoodMenu.css';
import {
   Card,
   CardBody,
   CardTitle,
   CardText,
   ListGroup,
   ListGroupItem,
} from 'reactstrap';

function Menu({ items, title, basePath }) {
   const history = useHistory();

   return (
      <section className="col-md-4">
         <Card>
            <CardBody>
               <CardTitle className="font-weight-bold text-center">
                  {title} Menu
               </CardTitle>
               <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
               </CardText>
               <ListGroup>
                  {items.map((item) => (
                     <Link
                        to={`${basePath}/${item.id}`}
                        key={item.id}
                     >
                        <ListGroupItem>{item.name}</ListGroupItem>
                     </Link>
                  ))}
               </ListGroup>
               <button
                  className="Menu-add-button"
                  onClick={() => history.push(`/new/${title.toLowerCase()}`)}
               >
                  Add {title.toLowerCase()}
               </button>
            </CardBody>
         </Card>
      </section>
   );
}

export default Menu;
