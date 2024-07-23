import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}) {
    // set useState to (0) it's mean the item at index-0 will be expanded and other less is collapsed
    const [expendedIndex, setExpandedIndex] = useState(-1);

    // This make a condition to click and click again it close the accordion
    // And also i set index of useState to (-1)
    const handleClick = (nextIndex) => {
        //Functional version
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });
        // This is the simple version : just a bit bug it everyone use this style
        // if (expendedIndex === nextIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    };

    const renderedItems = items.map((item, index) => {
        // This make the True/False like the first is expanded and other is collapsed
        const isExpanded = index === expendedIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)} >
                    {item.label}
                    {icon}
                </div>
                {/* This check the True/False and hide the other but not the first one */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    });

    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>;
}

export default Accordion;