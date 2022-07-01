import { HashRouter } from "react-router-dom";
import Router from "../router";
import React from "react";
function Loading() {
  return <h2>loading</h2>;
}

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      {/* <NavBarDiv className="App" style={{ backgroundImage: `url(${bgImage})` }}>
        <TabBar left={leftTitle} right={rightTitle} />
      </NavBarDiv> */}
      {/* <BrowserRouter> */}
      <HashRouter>
        <Router />
      </HashRouter>
      {/* </BrowserRouter> */}
    </React.Suspense>
  );
}

export default App;
