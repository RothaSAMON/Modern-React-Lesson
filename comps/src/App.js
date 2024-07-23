import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    // I set defualt this 'null' cuz mean no item currently selected
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'}
    ];

    return (
        <div className="flex">
            <Dropdown 
            options={options} 
            value={selection} 
            onChange={handleSelect} />
            
            <Dropdown 
            options={options} 
            value={selection} 
            onChange={handleSelect} />
        </div>
        
    );
};

export default App;