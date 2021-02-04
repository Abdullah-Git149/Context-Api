import React, { useContext } from 'react';
import {ContactData} from "../Context/ContactData"

const Navbar = () => {
    const data = useContext(ContactData)    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Contacts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

          
      </nav>
    );
};

export default Navbar;