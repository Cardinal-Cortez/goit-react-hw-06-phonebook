import React, { useState} from "react";
import { AddContact, Section, H1, ContactForm } from "./styled";
import { InputName } from "components/InputName";
import { InputNumber } from "components/InputNumber";
import { Filter } from "components/ButtonAdd";
import { ContactList } from "components/ContactList"; 
import { useDispatch, useSelector } from "react-redux";

import { addContacts } from "Redux/contactsReducer";

export const Input = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  console.log(contacts); 
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingContact = contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContacts(name, number));
    setName('');
    setNumber('');
  };


  return (
    <Section>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={handleSubmit}>
        <InputName handleNameChange={handleNameChange} name={name} />
        <InputNumber
          handleNumberChange={handleNumberChange}
          number={number}
        />
        <AddContact type="submit">Add Contact</AddContact>
      </ContactForm>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </Section>
  );
};
