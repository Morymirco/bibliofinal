import React from "react";
import { useState } from "react";
function ButtonFavoris({ livres, setLivres }) {
  // Fonction pour filtrer les livres en fonction de la catégorie sélectionnée
  const [trouver, settrouver] = useState(false);

  const filterLivresByCategory = (category) => {
    const filteredLivres = livres.filter(
      (livre) => livre.selectedCategory === category
    );
    setLivres(filteredLivres);
    console.log(filteredLivres);
    // Afficher un message si aucune correspondance n'est trouvée
    if (filteredLivres.length === 0) {
      settrouver(true);
    } else {
      settrouver(false);
    }
    if (category === "all") {
      console.log("bio");
      setLivres(livres);
    }
  };
  // Fonction pour afficher tous les livres
  const showAllLivres = () => {
    setLivres(livres);
  };
  return (
    <div>
      <div class="flex items-center justify-center mt-4 mb-5"></div>
      <div className="mx-auto p-4 container gap-20">
        <button
          onClick={showAllLivres}
          data-type="Romance"
          class="middle none center  mr-4 rounded-lg bg-[#255365] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          All
        </button>
        <button
          onClick={() => filterLivresByCategory("Romance")}
          data-type="Romance"
          class="middle none center  mr-4 rounded-lg bg-[#1e478a] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Romance
        </button>
        <button
          onClick={() => filterLivresByCategory("Comedie")}
          data-type="Comedie"
          class="middle none center mr-4 rounded-lg bg-[#912324] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          comedie
        </button>
        <button
          onClick={() => filterLivresByCategory("Fiction")}
          data-type="fiction"
          class="middle none center mr-4 rounded-lg bg-[#176433] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Fiction
        </button>
        <button
          onClick={() => filterLivresByCategory("Horreur")}
          data-type="horreur"
          class="middle none center rounded-lg bg-[#bd4f11] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Horreur
        </button>
        <button
          onClick={() => filterLivresByCategory("Fantastique")}
          data-type="fantatisque"
          class="middle none center  mt-2 rounded-lg bg-[#971d1d] mx-2 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Fantastique
        </button>
        <button
          onClick={() => filterLivresByCategory("Action")}
          data-type="action"
          class="middle none center  mt-2 rounded-lg bg-[#255365] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Action
        </button>
      </div>
      {trouver && (
        <div className="min-h-screen flex justify-center items-center text-gray-600">
          <img
            src="https://img.freepik.com/vecteurs-libre/detective-suivant-illustration-du-concept-empreintes_114360-21835.jpg?t=st=1713311123~exp=1713314723~hmac=1287566e1bd76bcfb520cbdbe6d810fac6a805a577917def4cedd1c5575b28a3&w=740"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default ButtonFavoris;
