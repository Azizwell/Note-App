import React, { useContext, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export default function Notes({ notes }) {
  const { removeNote } = useContext(FirebaseContext);
  // const nodeRef = useRef(null);
  return (
    <div>
      <TransitionGroup component={"ul"} className="list-group">
        {notes.map((note) => {
          return (
            <CSSTransition
              key={note.id}
              // nodeRef={nodeRef}
              classNames={"note"}
              timeout={800}
            >
              <li /* ref={nodeRef}*/ className="list-group-item note">
                <div>
                  <strong>{note.title}</strong>
                  <small>{note.date}</small>
                </div>
                <button
                  onClick={() => removeNote(note.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  &times;
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
