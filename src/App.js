import * as forms from './config/form.js';
import Form from './utils/FormLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import './utils/styles/font.css';
import { useState } from 'react';


let formList = [];
for (let key in forms) {
	formList.push({
		form: key,
        name: forms[key].Name
	});
}


const App = () => {

    const [selectedForm, setSelectedForm] = useState("workshopForm");

    const formListElements = formList.map((form, index) => {
        return <option value={form.form} key={index}>{form.name}</option>
    })

    function onFormChange(event) {
        setSelectedForm(event.target.value);
    }

    return (
        <div className="App">
            <Header />
            <select value={selectedForm || ""} onChange={onFormChange}>
                {formListElements}
            </select>

            <Form formId={selectedForm} />
            <Footer />
        </div>
    );
}

export default App;