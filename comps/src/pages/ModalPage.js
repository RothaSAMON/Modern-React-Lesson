import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() { 
    const [showModal, setShowModal] = useState(false);

    const handlClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary={true}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>
            Here is something you need to know!
        </p>
    </Modal>

    return (
        <div className="relative">
            <Button 
            onClick={handlClick} 
            primary={true} 
            rounded={true} >Open Modal</Button>

            {/* This condition is it True show the Modal, if it False show nothing */}
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus consequat leo. Donec nibh dui, rutrum nec nunc nec, eleifend ultrices tellus. Donec eleifend erat ut ante rutrum tincidunt. Etiam vitae commodo augue, nec sodales nisl. Donec non metus vel ligula molestie consequat ac vel sapien. Sed sodales in enim eu efficitur. Cras faucibus velit non mi ornare aliquet. Proin at dui vel augue bibendum tempus vel ac metus.
            </p>
        </div>
    );
}

export default ModalPage;
