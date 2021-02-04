import React, { useContext } from 'react';
import { ContactData } from "../Context/ContactData"

const Navbar = () => {
    const data = useContext(ContactData)

    return (


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Contact Details</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


        </nav>
    );
};

export default Navbar;