// import './App.css'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { db } from "./firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Sign from "./Pages/sign.jsx";
import Login from "./Pages/login.jsx";
import New from "./Pages/New.jsx";
import { auth } from "./../src/firebaseconfig";
import Livres from "./Pages/Livres.jsx";
import Example from "./Components/Header/Head3.jsx";
import LivreDetail from "./Pages/Detail.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Contact from "./Pages/contact/contact.jsx";
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
    <div className="bg-gradient-to-bl from-blue-50 to-violet-50">
      <Example connected={connected} onligne={onligne} decon={signUserOut} />

      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route pour Card2 */}
        <Route
          path="/connexion"
          element={<Sign setConnect={setConnect} />}
        />{" "}
        <Route
          path="/inscription"
          element={<Login setConnect={setConnect} />}
        />{" "}
        <Route path="/contact" element={<Contact />} />
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
