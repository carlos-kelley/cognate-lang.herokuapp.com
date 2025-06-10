import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function FavoritesPageButton(props) {
    const dispatch = useDispatch();
      const history = useHistory();

  return (
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
      
    <button
      type="button"
      onClick={() => {
        history.push("/favorites");
      }}
    >
      Favorites
    </button>
  );
}

export default FavoritesPageButton;
