import React, { useContext, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "./../../firebaseconfig";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../../footer";
import { useNavigate } from "react-router-dom";
import ButtonFavoris from "./ButtonFavoris";
import LivreDetails from "../../Detail";
import Load from "./load";

function Livres({ onligne }) {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const dbref = collection(db, "Livres");

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const data = await getDocs(dbref);
        setLivres(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des livres:", error);
        setLoading(true);
      }
    };

    fetchLivres();
  }, []);

  const deletelivre = async (id) => {
    const dlivre = doc(dbref, id);
    try {
      await deleteDoc(dlivre);
      toast.success("Livre supprimé avec succès");
      // Mise à jour de l'état des livres après suppression
      setLivres((prevLivres) => prevLivres.filter((livre) => livre.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du livre:", error);
      toast.error("Erreur lors de la suppression du livre");
    }
  };

  const handleVoirPlus = (livre) => {
   
    navigate(`/Livres/${livre.id}`, { state: livre }); // Pass livre data as state
  };

  // lg:h-screen
  return (
    <div class="bg-gradient-to-bl from-blue-50 to-violet-50 items-center justify-center ">
      <ButtonFavoris />
      {loading ? (
        <Load />
      ) : (
        <div class="container mx-auto m bg-gradient-to-bl from-blue-50 to-violet-50">
          <div class="grid grid-cols-1 m sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {livres.map((livre) => (
              <div >
                <div class="bg-white rounded-lg border p-4 mb-3">
                  <img
                    src={livre.downloadURL}
                    alt="Placeholder Image"
                    class="w-full h-48 rounded-md object-cover"
                  />
                  <div class="px-1 py-4">
                    <div class="font-bold text-xl mb-2">{livre.titre}</div>
                    <p
                      className="text-gray-700 text-base overflow-hidden"
                      style={{
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        display: "-webkit-box",
                      }}
                    >
                      {livre.description}
                    </p>
                    <p className="text-gray-800 mt-2">
                      Par {livre.auteur.name}
                    </p>
                  </div>
                  <div class="px-1 py-1 flex justify-between items-center">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleVoirPlus(livre)} // Call handleVoirPlus
                    >
                      Voir plus
                    </button>

                    {onligne && livre.auteur.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          deletelivre(livre.id);
                        }}
                        className="text-red-500"
                      >
                        Supprimer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
     <div class="max-w-full  bg-white p-6 rounded-lg shadow-sm">
        <div class="flex justify-end">
          <nav class="flex space-x-2" aria-label="Pagination">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm bg-[#127CE5] from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              Precedent
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              1
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              2
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              3
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm bg-blue-600 from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              Suivant
            </a>
          </nav>
        </div>
      </div> 

       <Footer />
    </div>
  );
}

export default Livres;
