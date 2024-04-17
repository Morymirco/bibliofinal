import React from "react";
const handleButtonClick = (event) => {
  // Récupérer le type de bouton à partir de l'attribut data-type
  const buttonType = event.target.dataset.type;

  // Ajoutez ici le code à exécuter en fonction du type de bouton cliqué
  console.log("Bouton cliqué :", buttonType);
};

function ButtonFavoris(props) {
  return (
    <div>
      <div class="flex items-center justify-center mt-4 mb-5"></div>
      <div className="mx-auto p-4 container gap-20" onClick={handleButtonClick}>
        <button
          data-type="Romance"
          class="middle none center  mr-4 rounded-lg bg-[#1e478a] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Romance
        </button>
        <button
          data-type="Comedie"
          class="middle none center mr-4 rounded-lg bg-[#912324] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          comedie
        </button>
        <button
          class="middle none center mr-4 rounded-lg bg-[#176433] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Fiction
        </button>
        <button
          class="middle none center rounded-lg bg-[#bd4f11] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Horreur
        </button>
        <button
          class="middle none center  mt-2 rounded-lg bg-[#971d1d] mx-2 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Fantastique
        </button>
        <button
          class="middle none center  mt-2 rounded-lg bg-[#255365] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Action
        </button>
      </div>
    </div>
  );
}

export default ButtonFavoris;
