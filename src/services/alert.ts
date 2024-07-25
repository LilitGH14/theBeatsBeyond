import { Subject } from "rxjs";
import { filter } from "rxjs/operators";

export const AlertType = {
  Success: "Success",
  Error: "Error",
  Info: "Info",
  Warning: "Warning",
};

const alertSubject = new Subject<any>();
const defaultId = "default-alert";

const onAlert = (id = defaultId) => {
  return alertSubject.asObservable().pipe(filter((x: any) => x && x.id === id));
};

const success = (message: string, options: any) => {
    console.log(333)
  alert({ ...options, type: AlertType.Success, message });
};

const error = (message: string, options: any) => {
  alert({ ...options, type: AlertType.Error, message });
};

const info = (message: string, options: any) => {
  alert({ ...options, type: AlertType.Info, message });
};

const warn = (message: string, options: any) => {
  alert({ ...options, type: AlertType.Warning, message });
};

const alert = (alert: any) => {
  alert.id = alert.id || defaultId;
  alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
  alertSubject.next(alert);
};

const clear = (id = defaultId) => {
  alertSubject.next({ id });
};

export const alertService = {
  onAlert,
  success,
  error,
  info,
  warn,
  alert,
  clear,
};
