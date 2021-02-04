import React, { useContext } from 'react';
import { ContactData } from "../Context/ContactData"

const ContactDetails = ({ user }) => {
    const { dispatch } = useContext(ContactData)
    return (
        <>

            <td><b> {user.name}</b></td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><button type="button" className="btn btn-outline-danger"
                onClick={() => dispatch({ type: 'REMOVE_DATA', id: user.id })}>Remove</button></td>

        </>
    );
};

export default ContactDetails;