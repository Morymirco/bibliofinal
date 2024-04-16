import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth, storage } from "./../../firebaseconfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function New({ connected }) {
  const [titre, setTitre] = useState("");
  const [auteur, setauteur] = useState("");
  const [description, setdescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [numberOfPages, setNumberOfPages] = useState("");

  //creation de la reference de la base de données
  const dbref = collection(db, "Livres");
  //ajout de la donnée
  let navigate = useNavigate();
  const add = async (e) => {
    e.preventDefault();

    try {
      // Vérifiez si une image de couverture a été sélectionnée
      if (coverImage) {
        // Créez une référence de stockage pour l'image de couverture
        const storageRef = ref(storage, `images/${coverImage.name}`);
        // const coverImageRef = storageRef.child(coverImage.name);

        await uploadBytesResumable(storageRef, coverImage); // Utiliser coverImage ici
        const downloadURL = await getDownloadURL(storageRef);
        // Ajoutez les données du livre dans Firestore avec l'URL de l'image de couverture
        await addDoc(dbref, {
          titre,
          auteur,
          selectedCategory,
          selectedLanguage,
          selectedYear,
          numberOfPages,
          description,
          downloadURL, // Stockez l'URL de l'image de couverture dans la collection Firestore
          auteur: { name: auth.currentUser.email, id: auth.currentUser.uid },
        });

        // Affichez un message de succès
        toast.success("Livre ajouté avec succès !");
        alert("bon");
        // Rechargez la page pour rafraîchir les données
        window.location.reload();
        // Redirigez l'utilisateur vers la page d'accueil
        navigate("/");
      } else {
        // Si aucune image de couverture n'a été sélectionnée, affichez une erreur
        toast.error("Veuillez sélectionner une image de couverture !");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre :", error);
      // Affichez une alerte en cas d'erreur
      alert("Erreur lors de l'ajout du livre !");
    }
  };
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value); // Met à jour l'état avec la valeur sélectionnée du select
  };

  const handleNumberOfPagesChange = (event) => {
    setNumberOfPages(event.target.value); // Met à jour l'état avec la valeur saisie pour le nombre de pages
  };
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Met à jour l'état avec la valeur sélectionnée du select
  };
  const handleImageChange = (event) => {
    // Mettez à jour l'état de l'image de couverture lorsqu'une image est sélectionnée
    const file = event.target.files[0];

    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result); // Stocke l'image téléchargée dans l'état local
      };

      reader.readAsDataURL(file);
    }
  };
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value); // Met à jour l'état avec la valeur sélectionnée du select
  };
  const handlechange = (e) => {
    setTitre(e.target.value);
  };
  const handlechangeA = (e) => {
    setauteur(e.target.value);
  };
  const handlechangeD = (e) => {
    setdescription(e.target.value);
  };
  //   useEffect(() => {
  //     if (!connected) {
  //       navigate("/connexion");
  //     }
  //   }, []);
  return (
    <div>
      <body className="bg-gradient-to-bl from-blue-50 to-violet-50">
        <div class="max-w-3xl mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container mt-10">
          <h2 class="text-2xl font-semibold text-white mb-6">
            Ajouter un livre !
          </h2>
          <form onSubmit={add} method="POST">
            <div className="flex justify-between">
              <div class="mb-4 w-4/3">
                <label
                  for="name"
                  class="block text-gray-300 text-sm font-bold mb-2"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="enfant noir"
                  onChange={handlechange}
                  required
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
              <div class="mb-4 w-1/2">
                <label
                  for="text"
                  class="block text-gray-300 text-sm font-bold mb-2"
                >
                  Auteur
                </label>
                <input
                  type="text"
                  id="text"
                  name="titre"
                  placeholder="camara laye"
                  onChange={handlechangeA}
                  required
                  class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div class="mb-4 w-1/2">
                <label
                  for="default"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Catégorie/Genre
                </label>
                <select
                  onChange={handleCategoryChange}
                  id="default"
                  class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choisir un genre </option>
                  <option value="Romance">Romance</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Thriller">thriller </option>
                  <option value="Science-fiction">Science-fiction</option>
                </select>
              </div>
              <div class="mb-4 w-1/2">
                <label
                  for="default"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Langue
                </label>
                <select
                  onChange={handleLanguageChange}
                  id="default"
                  class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choisir une langue</option>
                  <option value="Francçais">Francçais</option>
                  <option value="Anglais">Anglais</option>
                  <option value="Portugais">Portugais</option>
                  <option value="chinios">Chinios</option>
                </select>
              </div>
            </div>
            {/* FIN */}
            <div className="flex justify-between gap-4">
              <div className="mb-4 w-1/2 ">
                <label
                  for="default"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Année de publication
                </label>
                <select
                  onChange={handleYearChange}
                  id="default"
                  class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Année de publication</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              <div className="mb-4 w-1/2">
                <label
                  for="default"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre de Pages
                </label>

                <div class="relative flex items-center">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    onChange={handleNumberOfPagesChange}
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            (
            <div class="mb-6">
              <label
                for="message"
                class="block text-gray-300 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="ce livre est roman ..."
                required
                onChange={handlechangeD}
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
              ></textarea>
            </div>
            {/* NOUVEAU FILE */}
            {uploadedImage ? ( // Affiche l'image téléchargée si elle est disponible
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full h-100 object-cover rounded-lg mb-3"
              />
            ) : (
              <div class="flex items-center justify-center w-full mb-3">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    name="coverImage"
                    onChange={handleImageChange}
                    accept="image/*" // Accepte uniquement les fichiers image
                    required
                  />
                </label>
              </div>
            )}
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Ajouter
            </button>
            <p class="mt-5 text-gray-300">
              If you are not a fan of forms you can email us instead{" "}
            </p>
          </form>
        </div>
      </body>
    </div>
  );
}

export default New;
