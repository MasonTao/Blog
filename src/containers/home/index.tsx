import React from "react";
import "~containers/home/Home.css";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Welcome to Razzles</h2>
      </div>
      <ul className="Home-resources">
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
