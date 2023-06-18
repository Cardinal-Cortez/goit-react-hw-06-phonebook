import React, { useState} from "react";
import { AddContact, Section, H1, ContactForm } from "./styled";
import { InputName } from "components/InputName";
import { InputNumber } from "components/InputNumber";
import { Filter } from "components/ButtonAdd";
import { nanoid } from 'nanoid';
import { ContactList } from "components/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "components/Redux/filterReducer";
import { setContacts } from "components/Redux/contactsReducer";

export const Input = () => {

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  console.log(contacts)

  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  // useEffect(() => {
  //   const storedContacts = localStorage.getItem("myContacts");
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("myContacts", JSON.stringify(contacts));
  // },[contacts]);

  
const handleDeleteContact = (id) => {
  dispatch(setContacts(contacts.filter((contact) => contact.id !== id)));
};


  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value))
  };

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
    const id = nanoid();
    const newContact = { id, name, number };
    const updatedContacts = [...contacts, newContact];
    dispatch(setContacts(updatedContacts));
    setName('');
    setNumber('');
  };

  const filters = () => {
    if (Array.isArray(contacts) && contacts.length > 0) {
      return contacts.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
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
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        filter={filter}
        contacts={filters()}
        onDeleteContact={handleDeleteContact}
      />
    </Section>
  );
};
