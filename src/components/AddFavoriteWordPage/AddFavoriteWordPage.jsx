//imports
import React from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function AddFavoriteWordPage() {
  //create store
  const thisWord = useSelector(
    (store) => store.thisWord
  );
  const params = useParams();
  const wordID = params.id;
  const dispatch = useDispatch();

  const [faved, setFaved] = useState(false);
  const [open, setOpen] = useState(false);

  const styles = {
    snackbarStyleViaContentProps: {
      backgroundColor: "white",
    },
  };

  const handleAddFavorite = () => {
    console.log("in handleAddFavorite");
    console.log("identity: ", wordID);

    //make a POST request to add a favorite
    axios.post("/api/favorites", {
      favorites_id: 1, //this should be dynamic
      word_id: wordID,
    });
    setFaved(true);
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Favorite added!"
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
//900 gradient posit

        
      />
    </div>
  );
}

export default AddFavoriteWordPage;
