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
  const dispatch = useDispatch();

  const [faved, setFaved] = useState(false);

  const handleAddFavorite = () => {
    console.log("in handleAddFavorite");
    console.log("identity: ", wordID);

    //make a POST request to add a favorite
    axios.post("/api/favorites", {
      favorites_id: 1, //this should be dynamic
      word_id: wordID,
    });
    setFaved(true);
  };

  const handleDeleteFavorite = () => {
    console.log("in handleDeleteFavorite");
    console.log("identity: ", wordID);
    //make a Delete request to remove this favorite
    axios.delete(
      `/api/favorites?id=${wordID}`,
      {}
    );
    setFaved(false);
  };
  // axios.delete("/api/favorites", {
  //   favorites_id: 1, //this should be dynamic
  //   word_id: wordID,
  // });
  // setFaved(false);

  return (
    <div>
      {/* button that says AddFav that runs handleAddFavorite when clicked */}
      {!faved ? (
        <button onClick={handleAddFavorite}>
          Add Favorite
        </button>
      ) : (
        <button onClick={handleDeleteFavorite}>
          Delete Favorite
        </button>
      )}
    </div>
  );
}

export default AddFavoriteWordPage;
