import React from "react";
import Backdrop from "./Backdrop";
import "./modal.css";

const AddressModal = (props) => {
  // const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div
        className={`modal antialiased p-2 w-5/6 md:w-auto flex flex-col justify-center items-center text-center rounded-lg shadow-2xl ${props.classAdd}`}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        <div>{props.children}</div>
      </div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
    </>
  );
};

export default AddressModal;
