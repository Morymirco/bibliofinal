import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import Footer from "../Components/Footer/footer";
import Modal from "../Components/ModalShare/Modal";
import Similaire from "../Components/LivresSimilaires/similaire";
function LivreDetail() {
  const location = useLocation();
  const livre = location.state; // Récupérer les données du livre passées via l'état de localisation
  const [livreDetails, setLivreDetails] = useState(null);
  const [showmodal, setshowmodal] = useState(false);

  useEffect(() => {
    // Fonction pour récupérer les détails du livre à partir de la base de données
    const fetchLivreDetails = async () => {
      try {
        const docRef = doc(db, "Livres", livre.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLivreDetails(docSnap.data());
        } else {
          console.log("Aucun document trouvé !");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du livre :",
          error
        );
      }
    };

    fetchLivreDetails();
  }, [livre.id]);

  const handleshowmodal = () => {
    setshowmodal(!showmodal);
  };
  const telecharger = (url) => {
    const nom = url.split("/").pop();
    const a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", true); // Définir l'attribut download sur true
    a.setAttribute("target", "_blank"); // Optionnel : ouvrir dans un nouvel onglet
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <div className="min-h-screen flex flex-col">
      {showmodal && <Modal showmodal={showmodal} setshowmodal={setshowmodal} />}
      {livreDetails ? (
        <>
          <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={livre.downloadURL}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button
                        className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                        onClick={() => {
                          telecharger(livre.pdfDownloadURL);
                        }}
                      >
                        Télecharger
                      </button>
                    </div>
                    <div className="w-1/2 px-2">
                      <button
                        className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300"
                        onClick={handleshowmodal}
                      >
                        Partager
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {livre.titre}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{livre.auteur}</p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700">
                        Date de publication
                      </span>
                      <span className="text-gray-600 block">
                        {livre.selectedYear}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700">
                        Catégorie :
                      </span>
                      <span className="text-gray-600 block">
                        {livre.selectedCategory}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700">
                      Nombre de pages
                    </span>
                    <span className="text-gray-600 text-sm block">201</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-bold text-gray-700">
                      Langues disponibles
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                        Fr
                      </button>
                      <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                        An
                      </button>
                      <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">
                        ES
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700">
                      Description:
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      {livre.description}
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Livres similaires{" "}
              </h1>

              <Similaire categorie={livre.selectedCategory} />
            </div>
          </div>
        </>
      ) : (
        <div
          role="status"
          className="min-h-screen space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96">
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[460px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default LivreDetail;
