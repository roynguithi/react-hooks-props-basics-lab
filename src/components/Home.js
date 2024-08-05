import React from "react";

function Home({ username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
