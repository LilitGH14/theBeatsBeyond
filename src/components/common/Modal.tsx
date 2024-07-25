"use client";
import React, { useEffect } from "react";

type ModalProps = {
  open: boolean;
  close: () => void;
  children: JSX.Element[] | JSX.Element;
  title: string;
  className?: string;
};
const Modal = ({
  open,
  close,
  children,
  title,
  className = "",
}: ModalProps) => {
  useEffect(() => {
    open && document.body.setAttribute("style", "overflow:hidden");

    return () => {
      document.body.removeAttribute("style");
    };
  }, [open]);

  if (open) {
    return (
      <div className={`bb-modal ${className}`}>
        <div className="bb-modal-content ms-bg-2">
          <div className="bb-modal-header">
            <h3>{title}</h3>
            <i className="fa fa-times" role="button" onClick={close}></i>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
