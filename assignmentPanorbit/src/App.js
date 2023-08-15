import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";
import Todo from "./components/Todo";
import Gallery from "./components/Gallery";
import Post from "./components/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Profile" exact element={<CardDetails />} />
        <Route path="/Todo" exact element={<Todo />} />
        <Route path="/Gallery" exact element={<Gallery />} />
        <Route path="/Post" exact element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
