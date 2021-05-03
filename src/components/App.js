import React from "react";
import KegControl from "./KegControl";

function App(){
  return (
    <React.Fragment>
      <div className="container">
        <div className="header">
        </div>
        <div className="content">
        </div>
        <div className="footer">
          <KegControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;