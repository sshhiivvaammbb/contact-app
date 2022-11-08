import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from './ContactList';
import './new.css';


function App() {
  const contacts = [
    {
      id:"1",
      name:'shivam',
      email:"shivambhardwaj@gmail.com"

    },
    {
      id:"2",
      name:'lucky',
      email:"luckybhardwaj@gmail.com"

    }
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      
    </div>
  );
}

export default App;
