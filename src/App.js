import "bootswatch/dist/materia/bootstrap.min.css";

import './App.css';
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import ContactDataProvider from "./Context/ContactData";

function App() {
  return (
    <div>
      <ContactDataProvider>
        <Navbar />
        <div className="container mt-5">
       <ContactForm/>
        <Contacts/>
        </div>
      </ContactDataProvider>

    </div>
  );
}

export default App;
