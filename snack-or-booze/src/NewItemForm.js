import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SnackOrBoozeApi from './Api';
import { Form, FormGroup, Label, Input } from 'reactstrap'; //usingreactstrap stylings like the existing app components
import './App.css';

const NewItemForm = ({ refreshData }) => {
   const { item } = useParams();

   const INITIAL_FORM_STATE = {
      // id: '' | id is added server side somehow
      name: '',
      description: '',
      recipe: '',
      serve: '',
   };
   const [formData, setFormData] = useState(INITIAL_FORM_STATE);

   const handleChange = (event) => {
      const { name, value } = event.target; //grabbing both the value and the input 'name' property
      //the [name] as the key is used to set name as an inital key | used when creating an object so we don't have to initialize it before
      setFormData((formData) => ({
         // the formData state is being updated with existing formData (...spread) and then the new name (associated with each input) and value from that input
         ...formData,
         [name]: value,
      }));
   };

   const history = useHistory();

   const handleSubmit = (event) => {
      event.preventDefault();

      //stops the form from being submitted if any fields are empty
      if (Object.values(formData).some((field) => field.trim() === '')) {
         alert('All fields must be filled out!');
         return;
      }

      if (item === 'drinks') {
         SnackOrBoozeApi.addDrink(formData);
      } else if (item === 'snacks') {
         SnackOrBoozeApi.addSnack(formData);
      }
      console.log('form data', { ...formData });
      refreshData(); //refresh the data to add the item to the page

      history.push('/'); //back to the homepage after form is submitted
   };

   // stops the form from adding to the db when the cancel button is clicked
   const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
   };

   return (
      <Form
         className="NewItemForm"
         onSubmit={handleSubmit}
      >
         <FormGroup>
            <Label
               className="label"
               htmlFor="name"
            >
               Name
            </Label>
            <Input
               id="name"
               type="text"
               name="name"
               placeholder="Name"
               value={formData.name}
               onChange={handleChange}
            />
         </FormGroup>

         <FormGroup>
            <Label
               className="label"
               htmlFor="description"
            >
               Description
            </Label>
            <Input
               id="description"
               type="text"
               name="description"
               placeholder="Description"
               value={formData.description}
               onChange={handleChange}
            />
         </FormGroup>

         <FormGroup>
            <Label
               className="label"
               htmlFor="recipe"
            >
               Recipe
            </Label>
            <Input
               id="recipe"
               type="text"
               name="recipe"
               placeholder="Recipe"
               value={formData.recipe}
               onChange={handleChange}
            />
         </FormGroup>

         <FormGroup>
            <Label
               className="label"
               htmlFor="serve"
            >
               Serve
            </Label>
            <Input
               id="serve"
               type="text"
               name="serve"
               placeholder="Serve"
               value={formData.serve}
               onChange={handleChange}
            />
         </FormGroup>

         <div className="NewItemForm-buttons">
            <button className="add">Add Item</button>
            <button
               className="cancel"
               onClick={handleCancel}
               //NOTE: going back to home page instead of going back to drinks/snacks page
            >
               Cancel
            </button>
         </div>
      </Form>
   );
};

export default NewItemForm;
