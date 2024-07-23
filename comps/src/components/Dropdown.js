import {useState, useEffect, useRef} from 'react';
import {GoChevronDown} from "react-icons/go";
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) =>  {
            // This mean if we not assign to any ref, then just return the early handler
            if (!divEl.current) {
                return;
            }
            // This make a Ref to the Dropdown so can we can aother to close like body page
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        //Functional Style
        // setIsOpen((currentIsOpen) => !currentIsOpen);

        //Simple style
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        //Close dropdown
        setIsOpen(false);
        //What option did user click on
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    // Make a condition to show the selection... if no value if selected show its value
    //HERE i use inline condition instead
    // let content = 'Select...';
    // if(selection) {
    //     content = selection.label;
    // }

    return (
        <div ref={divEl} className='w-48 relative'>
            {/* {selection?.label || 'Select...'} This code is the inline condition that show the selection... if no value if selected show its value */}
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick} >
                {value?.label || 'Select...'}
                <GoChevronDown/>
            </Panel>
            {/* This use the condition to hide */}
            {isOpen && (
                <Panel className='absolute top-full'>
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
};

export default Dropdown;