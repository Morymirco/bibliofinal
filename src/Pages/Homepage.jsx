import React from "react";
import Footer from "../Components/Footer/footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { db } from "../firebaseconfig";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { useNavigate } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function Homepage() {
  const [books, setBooks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksCollection = collection(db, "Livres");
        const booksQuery = query(booksCollection, limit(6));
        const booksSnapshot = await getDocs(booksQuery);

        const fetchedBooks = booksSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error  ", error);
      }
    };

    fetchBooks();
  }, []);

  const handleVoirPlus = (livre) => {
    console.log(livre.auteur);
    navigate(`/Livres/${livre.id}`, { state: livre }); // Pass livre data as state
  };
  return (
    <div>
      <section class="bg-[#0369a1]  py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
              <h1 class="text-white font-bold text-5xl leading-tight mb-6 w-65">
                Un monde de livres à portée de clic
              </h1>
              <p class="text-white text-xl mb-8">
                Un accès illimité à des millions de livres à portée de main
              </p>
              <Link
                to="/Livres"
                class="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 hover:text-white hover:border  transition duration-200"
              >
                Découvir maintenant
              </Link>
            </div>
            <div class="md:w-1/2">
              <img
                src="https://img.freepik.com/photos-gratuite/vue-cote-etudiant-adolescent-portant-sac-son-epaule-appuye-contre-mur-lisant-livre_23-2148093536.jpg?t=st=1713305720~exp=1713309320~hmac=7bb4676d8723cf33bf0460b95eaa2602fd6c431fec3f0f3a247d3e147cc8d68f&w=740"
                alt="Coffee beans"
                class="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Livres populaires
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={book.downloadURL}
                  alt="Coffee"
                  class="w-full h-64 object-cover"
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    {book.titre}
                  </h3>
                  <p
                    class="text-gray-700 text-base overflow-hidden"
                    style={{ maxHeight: "3.6em", lineHeight: "1.8em" }}
                  >
                    {book.description}
                  </p>
                  <div class="mt-4 flex items-center justify-between">
                    <span class="text-gray-700 font-medium">{book.auteur}</span>
                    <button
                      onClick={() => handleVoirPlus(book)}
                      class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200"
                    >
                      voir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class=" p-4 sm:p-8 md:p-16 mt-2">
        <div class="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Catégories de livres
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/Livres"
              class="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Romans et Littérature
              </span>
              <span class="text-sm leading-normal text-gray-400 sm:block">
                Cette catégorie comprend des œuvres de fiction, y compris des
                romans contemporains, classiques, historiques, de
                science-fiction, de fantasy, de romance, de suspense, etc. Les
                lecteurs peuvent explorer différents genres et styles
                d'écriture.
              </span>
            </Link>
            <Link
              to="/livres"
              class="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Développement personnel
              </span>
              <span class="text-sm leading-normal text-gray-400 sm:block">
                Cette catégorie propose des livres sur le bien-être, la
                croissance personnelle, la psychologie positive, la gestion du
                temps, le leadership, la motivation, la santé mentale, la
                spiritualité, etc. Les lecteurs peuvent trouver des conseils et
                des outils pour améliorer leur vie.
              </span>
            </Link>
            <Link
              to="/livres"
              class="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Histoire et Culture
              </span>
              <span class="text-sm leading-normal text-gray-400 sm:block">
                Cette catégorie regroupe les livres sur l'histoire mondiale, les
                civilisations anciennes, les événements historiques, les
                biographies historiques, les cultures, les traditions, les
                religions, les coutumes, etc. Les lecteurs peuvent enrichir leur
                compréhension du passé et des diverses cultures.
              </span>
            </Link>
            <Link
              to="/livres"
              class="relative flex h-full flex-col rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5"
            >
              <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                Jeunesse et Enfants :
              </span>
              <span class="text-sm leading-normal text-gray-400 sm:block">
                Cette catégorie est dédiée aux livres pour enfants et
                adolescents, y compris les livres illustrés, les contes, les
                romans jeunesse, les albums, les livres éducatifs, les livres
                audio, etc. Elle vise à stimuler l'imagination et
                l'apprentissage chez les jeunes lecteurs.
              </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between h-full w-full absolute z-0 mt-10">
            <div className="w-1/3 bg-white h-[50vh] sm:h-20" />
            <div className="w-4/6 ml-16 bg-gray-100 " />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40 border mt-2">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={2}
            >
              <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                Ce que disent nos
                <br />
                lecteurs
              </h1>
              <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
                Ce que disent nos lecteurs
              </h1>
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div className="flex">
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        <img
                          src="./te.jpg"
                          alt="image of profile"
                          className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                        />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                            alt="commas"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between bg-white p-2 rounded-lg shadows-lg">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            Certains des meilleurs travaux qui ont été
                            réalisés !
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Cette bibliothèque en ligne est tout simplement
                            incroyable ! Elle offre un accès facile à une vaste
                            gamme de livres dans différents genres et sujets.
                            Que vous soyez passionné de littérature classique,
                            de science-fiction, d'histoire ou de développement
                            personnel, vous trouverez sûrement quelque chose qui
                            vous intéresse.
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800 mt-2">
                            Hassantou Diallo
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Developpeur web
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div
                    className="flex relative"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="mt-14 md:flex">
                      <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                        {/* <img src="./te.jpg" alt="" /> */}
                        <img
                          src="https://img.freepik.com/photos-gratuite/portrait-homme-afro-americain-heureux-souriant-satisfait-dites-oui-montrant-pouce-vers-haut-signe-approbation-encouragez-vous-faire-du-bon-travail-louez-bon-choix-fond-blanc_176420-46877.jpg?t=st=1713486784~exp=1713490384~hmac=c6e933ccf3abd10658d9ad7bffcb1cc3e312950c13799476c089cd95991741bd&w=740"
                          alt="image of profile"
                          className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                        />
                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                            alt="commas"
                          />
                        </div>
                      </div>
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between bg-white p-2 rounded-lg shadows-lg">
                        <div>
                          <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                            Certains des meilleurs travaux qui ont été
                            réalisés !!
                          </h1>
                          <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                            Je suis un fervent lecteur et cette bibliothèque en
                            ligne a vraiment révolutionné ma manière de lire.
                            Avec sa vaste collection de livres numériques, je
                            peux emporter ma bibliothèque partout avec moi, que
                            ce soit sur mon téléphone, ma tablette ou mon
                            ordinateur. J'apprécie particulièrement la
                            fonctionnalité de personnalisation qui me permet de
                            mettre en favori mes livres préférés et de suivre
                            mes progrès de lecture.
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800  mt-2">
                            Amadou coulibaly
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Designer UX/UI
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex items-center mt-8">
                <ButtonBack
                  className="cursor-pointer "
                  role="button"
                  aria-label="previous slide"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                    alt="previous"
                  />
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="cursor-pointer ml-2"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                    alt="next"
                  />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>

        {/* EQUIPE */}

        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div class="text-center pb-12">
            <h2 class="text-base font-bold text-indigo-600">
              Nous avons le meilleur équipement
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
              Découvrez les formidables membres de notre équipe
            </h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="portrait_mirco.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">
                  Mory Koulibaly
                </p>
                <p class="text-base text-gray-400 font-normal">
                  Ingenieur Logiciel
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">
                  Ramata Diallo
                </p>
                <p class="text-base text-gray-400 font-normal">
                  Designer Graphique
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="alpha.jpg"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">
                  Alpha Oumar Sow
                </p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="./Thierno_Oumar_Sylla_Bah_PHOTO.png"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">
                  Thierno oumar sylla Bah
                </p>
                <p class="text-base text-gray-400 font-normal">
                  Ingenieur Réseau
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Inconnu</p>
                <p class="text-base text-gray-400 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
              <div class="mb-8">
                <img
                  class="object-center object-cover rounded-full h-36 w-36"
                  src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
                  alt="photo"
                />
              </div>
              <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">inconnu</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
