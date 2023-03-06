import React, { useContext, useState } from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [chosenVariant, setChosenVariant] = useState(VARIANT_OPTIONS[0]);
  const { addToast } = useContext(ToastContext);

  function handleMessageChange(e) {
    const { value } = e.target;

    setMessage(value);
  }

  function handleVariantChange(e) {
    const { value } = e.target;

    setChosenVariant(value);
  }

  function handleToastPop(e) {
    e.preventDefault();

    addToast(message, chosenVariant);

    setMessage("");
    setChosenVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <form className={styles.wrapper} onSubmit={handleToastPop}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label key={variant} htmlFor={`variant-notice-${variant}`}>
                <input
                  id={`variant-notice-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={chosenVariant === variant}
                  onChange={handleVariantChange}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
