import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts &&
        toasts.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              message={toast.message}
              variant={toast.variant}
              id={toast.id}
            />
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
