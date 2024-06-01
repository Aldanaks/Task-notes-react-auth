import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Users from "./pages/Users";
import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "./api/storage";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <div className="App font-mono ">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/notes" Component={Notes} />
        <Route path="/notes/:noteId" Component={Note} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/users" Component={Users} />
      </Routes>
    </div>
  );
}

export default App;
