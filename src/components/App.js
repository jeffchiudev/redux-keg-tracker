import React from "react";
import Header from './Header';
import KegControl from "./KegControl";

function App(){
  return (
    <React.Fragment>
      <div class="container">
        <Header/>
        <div class="keg">
          <KegControl/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;