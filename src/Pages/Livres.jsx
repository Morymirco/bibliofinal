import React, { useContext, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/footer";
import { useNavigate } from "react-router-dom";
import ButtonFavoris from "../Components/ButtonFavoris/ButtonFavoris";
import Load from "../Components/Load/load";

function Livres({ onligne }) {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const dbref = collection(db, "Livres");
  const [searchTerm, setSearchTerm] = useState("");
  const [originalLivres, setOriginalLivres] = useState([]);
  const [trouver, settrouver] = useState(false);

  useEffect(() => {
    const fetchLivres = async () => {
      try {
        const data = await getDocs(dbref);
        const livresData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLivres(livresData);
        setOriginalLivres(livresData); // Stocker la liste d'origine
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des livres:", error);
        setLoading(true);
      }
    };
    fetchLivres();
    console.log(onligne);
  }, []);
  const handleSearch = (searchTerm) => {
    const filteredLivres = originalLivres.filter((livre) =>
      livre.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setLivres(filteredLivres);
    // Afficher un message si aucune correspondance n'est trouvée
    if (filteredLivres.length === 0) {
      settrouver(true);
    } else {
      settrouver(false);
    }
  };

  // Écouteur de changement sur le champ de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value);
    console.log(event.target.value);
  };

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
      <div class="flex items-center justify-center mt-4 mb-5">
        <div class="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px] drop-shadow-2xl">
          <button class="self-center flex p-1 cursor-pointer bg-[#0d1829]">
            {" "}
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z"
                  stroke="#ff5c5c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z"
                  stroke="#ff5c5c"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z"
                  fill="#ff5c5c"
                />{" "}
              </g>
            </svg>
          </button>

          <input
            type="text"
            class="w-full bg-[#0d1829] flex bg- pl-2 text-[#cccccc] outline-0"
            placeholder="Rechercher un livre"
            value={searchTerm} // Associer la valeur du champ à l'état local
            // Gérer les modifications du champ de recherche
            onChange={handleSearchChange}
          />
          <button type="submit" class="relative p-2 bg-[#0d1829] rounded-full">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#2563eb"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
      <ButtonFavoris livres={originalLivres} setLivres={setLivres} />
      {trouver && (
        <div className="min-h-screen flex justify-center items-center text-gray-600">
          <img
            src="https://img.freepik.com/vecteurs-libre/detective-suivant-illustration-du-concept-empreintes_114360-21835.jpg?t=st=1713311123~exp=1713314723~hmac=1287566e1bd76bcfb520cbdbe6d810fac6a805a577917def4cedd1c5575b28a3&w=740"
            alt=""
          />
        </div>
      )}
      {loading ? (
        <Load />
      ) : (
        <div class="container mx-auto m bg-gradient-to-bl from-blue-50 to-violet-50">
          <div class="grid grid-cols-1 m sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {livres.map((livre) => (
              <div>
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
                    <p class="text-gray-700 font-medium mt-2">{livre.auteur}</p>
                  </div>
                  <div class="px-1 py-1 flex justify-between items-center">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleVoirPlus(livre)} // Call handleVoirPlus
                    >
                      Voir plus
                    </button>

                    {onligne && livre.editeur.id === auth.currentUser.uid && (
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
