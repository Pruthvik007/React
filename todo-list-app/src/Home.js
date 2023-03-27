import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home
      <br />
      <Link to="/tasksList">
        <button>Tasks List</button>
      </Link>
    </div>
  );
};

export default Home;
