import React from "react";
import { useHistory } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function HomePage() {
    const history = useHistory();
  return (
    <div className="container">
      <p>Home Page</p>
      <Button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/globalsearch");
        }}
      >
        Global Search
      </Button>
      <Button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push("/favorites");
        }}
      >
        Favorites
      </Button>
    </div>
  );
}

export default HomePage;
