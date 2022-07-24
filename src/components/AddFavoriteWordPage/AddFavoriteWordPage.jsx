//imports
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddFavoriteWordPage() {
  //create store
  const thisWord = useSelector(
    (store) => store.thisWord
  );
  const params = useParams();
  const wordID = params.id;

  // const [identity, setIdentity] = useState(
  //   thisWord[0].id
  // );

  const handleAddFavorite = () => {
    console.log("in handleAddFavorite");
    console.log("word in addfav: ", thisWord);
    console.log("identity: ", wordID);

    //make a POST request to add a favorite
    axios.post("/api/favorites", {
      favorites_id: 1, //this should be dynamic
      word_id: wordID, //do i have to make the ID a reducer
    });
  };

  return (
    <div>
      {/* button that says AddFav that runs handleAddFavorite when clicked */}
      <button onClick={handleAddFavorite}>
        Add Favorite
      </button>
    </div>
  );
}

export default AddFavoriteWordPage;
