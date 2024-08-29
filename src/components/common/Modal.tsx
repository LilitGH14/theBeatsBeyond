"use client";
import { modalService, ModalSubject } from "@/services/modal";
import React, { useEffect, useState } from "react";

const Modal = () => {
  const [data, setData] = useState<ModalSubject | null>(null);

  const onClose = (): void => {
    modalService.closeModal();
    document.body.removeAttribute("style");
  };

  useEffect(() => {
    modalService.modalSubject.subscribe((res) => setData(res as ModalSubject));
  }, []);

  if (!data) return null;

  return (
    <div className={`bb-modal ${data?.className}`}>
      <div className="bb-modal-content ms-bg-2">
        <div className="bb-modal-header">
          <h4>{data?.title}</h4>
          <i className="fa fa-times" role="button" onClick={onClose}></i>
        </div>
        {data?.children}
      </div>
    </div>
  );
};

export default Modal;
