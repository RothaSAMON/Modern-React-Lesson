import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'y1k',
            label: 'can i use react',
            content: 'You can you react. You can you react. You can you react. You can you react. You can you react.'
        },
        {
            id: 'y2k',
            label: 'can i use js',
            content: 'You can you js. You can you js. You can you js. You can you js. You can you js. You can you js'
        },
        {
            id: 'y3k',
            label: 'can i use css',
            content: 'You can you css.You can you css .You can you css. You can you css. You can you css'
        }
    ];

    return <Accordion items={items} />
};

export default AccordionPage;