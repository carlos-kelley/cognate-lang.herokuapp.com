//imports
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./AddFavoriteWordPage.css";

function AddFavoriteWordPage() {
  //create store
  const params = useParams();
  const wordID = params.id;
  const dispatch = useDispatch();

  const [faved, setFaved] = useState(false);
  const [open, setOpen] = useState(false);

  const favorites = useSelector(
    (store) => store.favorites
  );

  const checkIfFaved = () => {
    console.log("in compareFavorites: ");
    console.log(
      "compare with favorites: ",
      favorites
    );
    console.log("compare with wordID: ", wordID);

    const check = favorites.findIndex(function (
      favorite
    ) {
      return favorite.word_id === Number(wordID);
    });
    console.log("check: ", check);
    //if word is in favorites, set faved to true
    if (check !== -1) {
      setFaved(true);
    }
    //if word is not in favorites, set faved to false
    else if (check === -1) {
      setFaved(false);
    }
  };

  const handleAddFavorite = () => {
    console.log("in handleAddFavorite");
    console.log("identity: ", wordID);

    dispatch({
      type: "ADD_FAVORITE",
      payload: wordID,
    });
    // setFaved(true);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleDeleteFavorite = () => {
    console.log("in handleDeleteFavorite");
    console.log("identity: ", wordID);
    dispatch({
      type: "DELETE_FAVORITE",
      payload: wordID,
    });
    // setFaved(false);
    setOpen(true);
  };

  useEffect(() => {
    checkIfFaved();
  }, [checkIfFaved]);

  return (
    <div>
      {/* button that says AddFav that runs handleAddFavorite when clicked */}
      {!faved ? (
        <button
          onClick={handleAddFavorite}
          className="addFavbutton"
        >
          Add Favorite
        </button>
      ) : (
        <button
          onClick={handleDeleteFavorite}
          className="deleteFavbutton"
        >
          Delete Favorite
        </button>
      )}
      {/* <Snackbar
        className={faved ? "faved" : "notFaved"} //this should not work cus it doesnt say class but thats fine because it was annoying
        open={open}
        autoHideDuration={150000}
        onClose={handleClose}
        // if button says "Add Favorite" then snackbar should say "Added to Favorites"
        // if button says "Delete Favorite" then class sould be "delete-favorite"
        // if button says "Delete Favorite" then snackbar should say "Removed from Favorites"
        message={
          faved
            ? "Favorite added!"
            : "Favorite removed!"
        }
        action={action}
        color="secondary"
        ContentProps={{
          sx: {
            background: "white",
            font: "inherit",
            "& .MuiSnackbarContent-message": {
              color: "black",
            },
          },
        }}
        sx={
          {
            //width 250
            // width: "250px",
          }
        }
      /> */}
    </div>
  );
}

export default AddFavoriteWordPage;
