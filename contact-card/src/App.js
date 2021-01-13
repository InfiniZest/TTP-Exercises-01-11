import logo from './logo.svg';
import './App.css';
import CreateContactCard from './CreateContactCard.js';

/*
 * 1) (Done) Define a ContactCard component that takes in a contact name,
 * mobile number, work phone, and email as properties and display
 * the results in a visually appealing way.
 * 2) (TODO) Make name, mobile, and email required but the work phone is optional
 * 3) (TODO) Create a page that displays at least 3 differnt contact cards with differnt info
*/

// Wait for input
function App() {
  let cardNumber = 0;
  return (
    <div className="InputFrame">
        <CreateContactCard id={cardNumber.toString()}/>
    </div>
    );
}

export default App;
