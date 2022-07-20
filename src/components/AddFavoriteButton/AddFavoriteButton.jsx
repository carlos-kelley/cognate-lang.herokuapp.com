import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


function AddFavoriteButton() {
    //create store 
    const word = useSelector(
      (store) => store.globalSearch
    );
    const id = useSelector(
        (store) => store.id
    );

    const handleAddFavorite = () => {
        console.log("word in addfav: ", word);
        console.log("id.id in addfav: ", id.id);
        //make a POST request to add a favorite
        axios.post("/api/favorites", {
            favorites_id: 1,//this should be dynamic
            word_id: id.id, //do i have to make the ID a reducer
        });
    }

  
  return (
    //button that says AddFav that runs handleAddFavorite when clicked
      <button onClick={handleAddFavorite}>AddFav</button>
      
  );
}

export default AddFavoriteButton;
