import React, { useContext } from 'react';
import InputHook from "../hook/InputHook"
import { ContactData } from "../Context/ContactData"
const ContactForm = () => {

    const { dispatch } = useContext(ContactData)

    const [name, setName, resetName] = InputHook("")
    const [email, setEmail, resetEmail] = InputHook("")
    const [phone, setPhone, resetPhone] = InputHook("")
    var RandomNumber = Math.floor(Math.random() * 100) + 1;


    const addNewContact = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_CONTACT',
            newContact: { id: RandomNumber, name: name, email: email, phone: phone }
        })
        resetName()
        resetEmail()
        resetPhone()
    }
    return (
        <div>
            <form onSubmit={addNewContact}>
                <h2 className="mb-5"><b> Add Contact</b></h2>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter The Name"
                        value={name}
                        onChange={setName} />
                </div>

                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter The Email"
                        value={email}
                        onChange={setEmail} />
                </div>

                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Enter The Phone"
                        value={phone}
                        onChange={setPhone} />
                </div>

                <div className="form-group">
                    <input type="submit" value="Add Contact"
                        className="btn btn-outline-secondary"
                    />
                </div>
            </form>

        </div>
    );
};

export default ContactForm;