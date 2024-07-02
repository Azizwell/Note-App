import React, { useContext, useEffect } from "react";
import Form from "../component/Form";
import Notes from "../component/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Loader from "../component/Loader";

function Home() {
  const { loading, notes, fetchNotes, removeNote } =
    useContext(FirebaseContext);
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </div>
  );
}

export default Home;
