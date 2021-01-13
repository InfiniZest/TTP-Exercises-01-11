import logo from './logo.svg';
import './App.css';
import CreateContactCard from './CreateContactCard.js';
// import ContactLibrary './ContactLibrary.js';

/*
 * 1) (Done) Define a ContactCard component that takes in a contact name,
 * mobile number, work phone, and email as properties and display
 * the results in a visually appealing way.
 * 2) (TODO) Make name, mobile, and email required but the work phone is optional
 * 3) (TODO) Create a page that displays at least 3 differnt contact cards with differnt info
*/

// Wait for input
function App() {
  // if there is nothing in the library, run the Create 
  return (
    // Load Input Component when pressing create new contact button
    // ContactLibrary will load to createcontact component if there is no contacts in lib
    /*
    <div className="ContactLib">
        <ContactLibrary />
    </div>
    */
    <div className="InputFrame">
        <CreateContactCard />
    </div>
  );
}

export default App;
