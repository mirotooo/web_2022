import React from 'react';

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick, handleDeleteClick}) => {
    return (
        <tr>
            <td>
               <input
          type="text"
          required="required"
          placeholder="Enter Id..."
          name="Identite_nationale"
          value={editFormData.Identite_nationale}
          onChange={handleEditFormChange}
          ></input>
          </td>

        <td>
            <input
          type="text"
          required="required"
          placeholder="Enter your name"
          name="Nom"
          value={editFormData.Nom}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your date of birth"
          name="date_de_naissance"
          value={editFormData.date_de_naissance}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your country of birth"
          name="Pays_de_naissance"
          value={editFormData.Pays_de_naissance}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your country of residence"
          name="Pays_de_residence"
          value={editFormData.Pays_de_residence}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="sexe"
          name="sexe"
          value={editFormData.sexe}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="your civil status"
          name="Etat_civil"
          value={editFormData.Etat_civil}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
        <input
          type="text"
          required="required"
          placeholder="your language"
          name="Langue"
          value={editFormData.Langue}
          onChange={handleEditFormChange}
          ></input>
          </td>
          <td>
            <button type='submit'>Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
          </td>
          </tr>
    );
};

export default EditableRow;