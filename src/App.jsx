import React, { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import { Home } from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <div className="App">{loading ? <Loading /> : <Home />}</div>;
}

export default App;


