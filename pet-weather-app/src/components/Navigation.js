import React from "react";

import { Link } from "react-router-dom";

const Navigation = () => {
  const id = 1;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pets/new">New Pet</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
