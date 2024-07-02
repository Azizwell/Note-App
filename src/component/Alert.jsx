import React, { useContext, useRef, useEffect, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

export default function Alert() {
  const { alert, hide } = useContext(AlertContext);
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(alert.visible);

  useEffect(() => {
    setVisible(alert.visible);
  }, [alert.visible]);

  return (
    <div
      ref={nodeRef}
      className={`alert alert-${
        alert.alertType || "warning"
      } alert-dismissible ${visible ? "fade-in" : "fade-out"}`}
      style={{
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <strong>Внимание!</strong>
      &nbsp;{alert.text}
      <button
        onClick={() => {
          hide();
          setVisible(false);
        }}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
}
