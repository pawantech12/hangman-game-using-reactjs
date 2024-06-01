import React from "react";

function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-[#E6CB91] p-5 rounded shadow-lg text-center">
        <div className="text-2xl mb-4">{children}</div>
        <button
          onClick={onClose}
          className="text-center w-1/2 mx-auto bg-custom-dark-grey text-white text-2xl cursor-pointer mt-5 p-2 rounded hover:bg-custom-grey"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
