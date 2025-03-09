import { Redirect, useParams, useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function Item({ items, cantFind }) {
   const { id } = useParams();
   //using useHistory here because this version or react-router does not have useNavigate
   const history = useHistory();

   let item = items.find((item) => item.id === id);
   if (!item) return <Redirect to={cantFind} />;

   return (
      <section>
         <Card>
            <CardBody>
               <CardTitle className="font-weight-bold text-center">
                  {item.name}
               </CardTitle>
               <CardText className="font-italic">{item.description}</CardText>
               <p>
                  <b>Recipe:</b> {item.recipe}
               </p>
               <p>
                  <b>Serve:</b> {item.serve}
               </p>
               {/* Adding a button */}
               <button
                  className="Item-back-button"
                  onClick={() => history.goBack()}
               >
                  Back
               </button>
            </CardBody>
         </Card>
      </section>
   );
}

export default Item;
