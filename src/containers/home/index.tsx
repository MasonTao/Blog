import React from "react";
import { Timer } from "~svgs";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <Timer width={20} height={20} />
      </div>
    </div>
  );
};

export default Home;
