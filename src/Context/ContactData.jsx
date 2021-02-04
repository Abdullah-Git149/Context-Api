import React, { createContext, useEffect, useReducer, useState } from 'react';
import { ContactReducer } from "../reducer/ContactReducer"
export const ContactData = createContext()
const ContactDataProvider = (props) => {

    const [contacts, dispatch] = useReducer(ContactReducer, [], () => {
        const localData = localStorage.getItem("Contacts")
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("Contacts", JSON.stringify(contacts))
    }, [contacts])

    return (

        <ContactData.Provider value={{ users: contacts, dispatch }}>
            {props.children}
        </ContactData.Provider>

    );
};

export default ContactDataProvider;