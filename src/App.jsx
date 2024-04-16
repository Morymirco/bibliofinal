// import './App.css'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { db } from "./firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Card from "./Card/card";
import Card2 from "./../src/card2.jsx";
import Sign from "./sign.jsx";
import Login from "./login.jsx";
import New from "./Pages/NewBook/New.jsx";
import { useNavigate } from "react-router-dom";
import { auth } from "./../src/firebaseconfig";
import Livres from "./Pages/NewBook/Livres.jsx";
import Example from "./Head3.jsx";
import LivreDetail from "./Detail.jsx";
import Homepage from "./Pages/NewBook/Homepage.jsx";
function App() {
  const [connected, setConnect] = useState(localStorage.getItem("isAuth"));
  const [onligne, setOnligne] = useState();
  const signUserOut = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      setConnect(false);
      window.location.pathname = "/connexion";
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setOnligne(currentUser);
    });
  }, []);
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50" >
      <Example connected={connected} onligne={onligne} decon={signUserOut} />

      <Routes>
        <Route path="/" element={<Homepage/>} /> {/* Route pour Card2 */}
        <Route
          path="/connexion"
          element={<Sign setConnect={setConnect} />}
        />{" "}
        <Route
          path="/inscription"
          element={<Login setConnect={setConnect} />}
        />{" "}
        <Route path="/newbook" element={<New connected={connected} />} />
        <Route path="/Livres" element={<Livres onligne={onligne} />} />
        <Route path="/Livres/:id" element={<LivreDetail />} />
        {/* Route pour Sign */}
        {/* Ajoutez d'autres routes si nécessaire */}
      </Routes>
      {/* <Load/> */}

    </div>
  );
}

export default App;
