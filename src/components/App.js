import React ,{useState} from 'react';
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import './new.css';


function App() {
 
const [contacts ,SetContacts] = useState([]);
const addContactHandler = (contact)=> {
SetContacts([...contacts , contact]);
};

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
