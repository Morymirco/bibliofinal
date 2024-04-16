import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebaseconfig";
import Footer from "./footer";
import Modal from "./Modal";
function LivreDetail() {
  const location = useLocation();
  const livre = location.state; // Récupérer les données du livre passées via l'état de localisation
  const [livreDetails, setLivreDetails] = useState(null);
const [showmodal,setshowmodal] = useState(false);
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
        console.error("Erreur lors de la récupération des détails du livre :", error);
      }
    };

    fetchLivreDetails();
  }, [livre.id]);
const handleshowmodal = ()=>{
setshowmodal(!showmodal)
}
  return (
    <div>
 {showmodal && <Modal showmodal={showmodal} setshowmodal={setshowmodal} />}
      {livreDetails ? (
        <>
         <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={livre.downloadURL} alt="Product Image"/>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Télecharger</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={handleshowmodal}>Partager</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{livre.titre}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">

                {livre.auteur.name}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Date de publication</span>
                        <span class="text-gray-600 dark:text-gray-300">{livre.selectedYear}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Catégorie :</span>
                        <span class="text-gray-600 dark:text-gray-300">{livre.selectedCategory}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Nombre de pages</span>
                    <div class="flex items-center mt-2">
                        {/* <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button> */}
                        <span className="text-gray-600 dark:text-gray-300 text-sm">201</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Langues disponibles</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">Fr</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">An</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">ES</button>
                        {/* <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button> */}
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300"> Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {livre.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
      ) : (
        
<div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div class="w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>


      )}
      <Footer/>
    </div>
  );
}

export default LivreDetail;



