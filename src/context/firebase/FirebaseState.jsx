import React, { useReducer } from "react";
import { FirebaseContext } from "./firebaseContext";
import { FirebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";
import axios from "axios";

const url = import.meta.env.VITE_DB_URL;

export default function FirebaseState({ children }) {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}`);
    const payload = res.data.map((note) => {
      return {
        ...note,
        id: note.id,
      };
    });
    dispatch({ type: FETCH_NOTES, payload });
  };
  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON(),
    };
    try {
      const res = await axios.post(`${url}`, note);
      const payload = { ...note, id: res.data.id };
      dispatch({ type: ADD_NOTE, payload });
    } catch (e) {
      throw new Error(e.message);
    }
  };
  const removeNote = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
     
      dispatch({
        type: REMOVE_NOTE,
        payload: id,
      });
    } catch (e) {
      console.error("Error removing note:", e.message);
    }
  };
  return (
    <div>
      <FirebaseContext.Provider
        value={{
          showLoader,
          addNote,
          removeNote,
          fetchNotes,
          loading: state.loading,
          notes: state.notes,
        }}
      >
        {children}
      </FirebaseContext.Provider>
    </div>
  );
}
