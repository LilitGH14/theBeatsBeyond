import { Subject } from "rxjs";

export type ModalSubject = {
  children: JSX.Element[] | JSX.Element;
  title: string;
  className?: string;
};

const modalSubject = new Subject<ModalSubject | null>();

const openModal = (modalData: ModalSubject) => {
  modalSubject.next(modalData);
};

const closeModal = (): void => {
  modalSubject.next(null);
};

export const modalService = {
  modalSubject,
  openModal,
  closeModal,
};
