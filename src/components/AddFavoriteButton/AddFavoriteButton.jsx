import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function AddFavoriteButton() {
    const handleAddFavorite = () => {
        //make a POST request to add a favorite
        axios.post("/api/favorites", {
            favorites_id: "1",
            word_id: "4",
        });
    }

  
  return (
    //button that says AddFav that runs handleAddFavorite when clicked
      <button onClick={handleAddFavorite}>AddFav</button>
      
  );
}

export default AddFavoriteButton;
