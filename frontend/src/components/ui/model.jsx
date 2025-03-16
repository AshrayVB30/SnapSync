import React from "react";

export const Modal = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export const ModalContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const ModalHeader = ({ children }) => (
  <h2 className="text-xl font-bold mb-2">{children}</h2>
);

export const ModalBody = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const ModalFooter = ({ children }) => (
  <div className="flex justify-end space-x-2">{children}</div>
);

export default Modal;
