import React, {useState, Fragment} from 'react';

import './App.css';
import data from './mock-data.json';
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Identite_nationale: "",
    Nom: "",
    date_de_naissance: "",
    Pays_de_naissance: "",
    Pays_de_residence:  "",
    sexe:  "",
    Etat_civil: "",
    Langue: "",
  });
  const [editFormData, setEditFormData] = useState({
    Identite_nationale: "",
    Nom: "",
    date_de_naissance: "",
    Pays_de_naissance: "",
    Pays_de_residence:  "",
    sexe:  "",
    Etat_civil: "",
    Langue: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();

    let fieldName = event.target.getAttribute("name");
    
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    let fieldName = event.target.getAttribute("name");
    
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      Identite_nationale: contacts.slice(-1)[0].Identite_nationale + 1,
      Nom: addFormData.Nom,
      date_de_naissance: addFormData.date_de_naissance,
      Pays_de_naissance: addFormData.Pays_de_naissance,
      Pays_de_residence: addFormData.Pays_de_residence,
      sexe: addFormData.sexe,
      Etat_civil: addFormData.Etat_civil,
      Langue: addFormData.Langue,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id:editContactId,
      Identite_nationale: editFormData.Identite_nationale,
      Nom: editFormData.Nom,
      date_de_naissance: editFormData.date_de_naissance,
      Pays_de_naissance: editFormData.Pays_de_naissance,
      Pays_de_residence: editFormData.Pays_de_residence,
      sexe: editFormData.sexe,
      Etat_civil: editFormData.Etat_civil,
      Langue: editFormData.Langue,
    };
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.Identite_nationale === editContactId);
    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.Identite_nationale);

    const formValues = {
      Identite_nationale: contact.Identite_nationale,
      Nom: contact.Nom,
      date_de_naissance: contact.date_de_naissance,
      Pays_de_naissance: contact.Pays_de_naissance,
      Pays_de_residence: contact.Pays_de_residence,
      sexe: contact.sexe,
      Etat_civil: contact.Etat_civil,
      Langue: contact.Langue,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.Identite_nationale === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Identite_nationale</th>
            <th>Nom</th>
            <th>date_de_naissance</th>
            <th>Pays_de_naissance</th>
            <th>Pays_de_residence</th>
            <th>sexe</th>
            <th>Etat_civil</th>
            <th>Langue</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment key={contact.Identite_nationale}>
              {editContactId === contact.Identite_nationale ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <h2> Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>

        <input
          type="text"
          name="Nom"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="date_de_naissance"
          required="required"
          placeholder="Enter date of Birth"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Pays_de_naissance"
          required="required"
          placeholder="Enter native country"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Pays_de_residence"
          required="required"
          placeholder="Enter country of residence"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="sexe"
          required="required"
          placeholder="your sexe"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Etat_civil"
          required="required"
          placeholder="Your marital status"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Langue"
          required="required"
          placeholder="Your language"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;

