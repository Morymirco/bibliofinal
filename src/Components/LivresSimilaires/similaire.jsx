import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

function Similaire({ categorie }) {
  const [livresSimilaires, setLivresSimilaires] = useState([]);

  useEffect(() => {
    const fetchLivresSimilaires = async () => {
      try {
        const livresRef = collection(db, "Livres");
        const q = query(livresRef, where("selectedCategory", "==", categorie));
        const querySnapshot = await getDocs(q);
        const livres = [];
        querySnapshot.forEach((doc) => {
          livres.push({ id: doc.id, ...doc.data() });
        });
        // Limiter l'affichage à seulement 3 livres similaires
        setLivresSimilaires(livres.slice(0, 3));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des livres similaires :",
          error
        );
      }
    };

    if (categorie) {
      fetchLivresSimilaires();
    }
  }, [categorie]);

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {livresSimilaires.map((livre) => (
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://www.bod.fr/fileadmin/_processed_/2/0/csm_FR-easyCover_Roman-modern-1_d65ba05c25.jpg"
            alt="Coffee"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{livre.titre}</h3>
            <p
              class="text-gray-700 text-base  overflow-hidden"
              style={{ maxHeight: "3.6em", lineHeight: "1.8em" }}
            >
              {livre.description}
            </p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-gray-700 font-medium">{livre.auteur}</span>
              <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                voir plus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Similaire;
