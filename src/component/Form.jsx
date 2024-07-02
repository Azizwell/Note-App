import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export default function Form() {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);
  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Заметка было создано", "success");
        })
        .catch(() => {
          alert.show("Что-то пошло не так", "danger");
        });

      setValue("");
    } else {
      alert.show("Введите название заметки");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Введите название заметки"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}
