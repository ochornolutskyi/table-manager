import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import Loader from "./components/Loader";
import Main from "./components/Main";
import { fetchData } from "./redux/actions";

function App() {
   const isLoading = useSelector((state) => state.table.loader);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchData());
   }, []);
   
   return <div className="App">{isLoading ? <Loader /> : <Main />}</div>;
}

export default App;
