import React, { createContext, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(message, variant) {
    const toastObject = {
      message,
      variant,
      id: crypto.randomUUID(),
    };

    setToasts((toasts) => [...toasts, toastObject]);
  }

  function removeToast(id) {
    const filteredToasts = toasts.filter((toast) => toast.id !== id);

    setToasts(filteredToasts);
  }

  useEscapeKey(() => {
    setToasts([]);
  });

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
