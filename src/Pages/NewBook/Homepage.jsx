import React from "react";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function Homepage() {
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
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img2.jpeg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  L'enfant noir
                </h3>
                <p class="text-gray-700 text-base">
                  "L'Enfant noir" est un récit autobiographique qui raconte
                  l'enfance de l'auteur en Guinée
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">Camara Laye</span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    voir plus
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img3.jpeg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Dramouss</h3>
                <p class="text-gray-700 text-base">
                  Dramouss" est un roman qui raconte l'histoire d'un jeune homme
                  qui quitte son village pour poursuivre ses étude
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">Camara Laye</span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    voir plus
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img4.webp"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">L'Étranger</h3>
                <p class="text-gray-700 text-base">
                  L'histoire de Meursault, un homme indifférent aux normes
                  sociales, dont la vie bascule après un acte
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">
                    Albert Camus
                  </span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    voir plus
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img6.jpeg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Batouala</h3>
                <p class="text-gray-700 text-base">
                  "Batouala" est un roman qui décrit la vie dans la colonie
                  française d'Afrique équatoriale. Il raconte l'histoire d'un
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">50.000 G</span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    Rene Marran
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img8.jpg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Dark Roast Blend
                </h3>
                <p class="text-gray-700 text-base">
                  A bold and flavorful blend of beans from Brazil, Colombia, and
                  Indonesia. Notes of caramel, nuts, and tobacco.
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">Molière</span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    voir plus
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="./img7.jpg"
                alt="Coffee"
                class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  Dark Roast Blend
                </h3>
                <p class="text-gray-700 text-base">
                  A bold and flavorful blend of beans from Brazil, Colombia, and
                  Indonesia. Notes of caramel, nuts, and tobacco.
                </p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-gray-700 font-medium">victor Hugo</span>
                  <button class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                    voir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class=" p-4 sm:p-8 md:p-16 mt-2">
        <div class="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Catégories de livres
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/frontend-performance"
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
            </a>
            <a
              href="/api-security"
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
            </a>
            <a
              href="/code-review"
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
            </a>
            <a
              href="/aws"
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
            </a>
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
                            vous intéresse. De plus, la plateforme est
                            conviviale et bien organisée, ce qui rend la
                            recherche et la navigation simples et efficaces. Je
                            suis reconnaissant d'avoir une telle source
                            inestimable de connaissances à portée de clic
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Anna Smith
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Senior Web Designer
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
                        <img src="./te.jpg" alt="" />
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
                      <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
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
                            mes progrès de lecture. De plus, la possibilité de
                            télécharger les livres pour une lecture hors ligne
                            est un énorme avantage. En somme, c'est une
                            expérience de lecture immersive que je recommande à
                            tous les amateurs de livres us.
                          </p>
                        </div>
                        <div className="md:mt-0 mt-8">
                          <p className="text-base font-medium leading-4 text-gray-800">
                            Anna Smith
                          </p>
                          <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                            Senior Web Designer
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

        <div class="flex flex-wrap -mx-3 mb-5 ">
          <div class="w-full max-w-full px-3 mb-6  mx-auto container">
            <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] border border-dashed border-stone-200 bg-white m-5">
              <div class="flex-auto block py-8 px-9">
                <div>
                  <div class="mb-9">
                    <h1 class="mb-2 text-[1.75rem] font-semibold text-dark">
                      Notre équipe de développement{" "}
                    </h1>
                    <span class="text-[1.15rem] font-medium text-muted">
                      {" "}
                      Rencontrez notre équipe talentueuse, un groupe dynamique
                      d’experts animés par la passion et l’innovation.
                    </span>
                  </div>
                  <div class="flex flex-wrap w-full">
                    <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://dev-geniusclass2.pantheonsite.io/wp-content/uploads/2024/04/IMG_1472-scaled.jpeg"
                          alt="avarat image"
                        />
                      </div>
                      <div class="text-center">
                        <a
                          href="javascript:void(0)"
                          class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Mory koulibaly
                        </a>
                        <span class="block font-medium text-muted">Devops</span>
                      </div>
                    </div>
                    <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://dev-geniusclass2.pantheonsite.io/wp-content/uploads/2024/04/IMG_1472-scaled.jpeg"
                          alt="avarat image"
                        />
                      </div>
                      <div class="text-center">
                        <a
                          href="javascript:void(0)"
                          class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Benjamin Martinez
                        </a>
                        <span class="block font-medium text-muted">
                          Sales Executive
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://dev-geniusclass2.pantheonsite.io/wp-content/uploads/2024/04/IMG_1472-scaled.jpeg"
                          alt="avarat image"
                        />
                      </div>
                      <div class="text-center">
                        <a
                          href="javascript:void(0)"
                          class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Emily Turner
                        </a>
                        <span class="block font-medium text-muted">
                          Customer Support
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://dev-geniusclass2.pantheonsite.io/wp-content/uploads/2024/04/IMG_1472-scaled.jpeg"
                          alt="avarat image"
                        />
                      </div>
                      <div class="text-center">
                        <a
                          href="javascript:void(0)"
                          class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Jason Anderson
                        </a>
                        <span class="block font-medium text-muted">
                          Development Engineer
                        </span>
                      </div>
                    </div>
                    <div class="flex flex-col mr-5 text-center mb-11 lg:mr-16">
                      <div class="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                        <img
                          class="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                          src="https://dev-geniusclass2.pantheonsite.io/wp-content/uploads/2024/04/IMG_1472-scaled.jpeg"
                          alt="avarat image"
                        />
                      </div>
                      <div class="text-center">
                        <a
                          href="javascript:void(0)"
                          class="text-dark font-semibold hover:text-primary text-[1.25rem] transition-colors duration-200 ease-in-out"
                        >
                          Olivia Carter
                        </a>
                        <span class="block font-medium text-muted">
                          Creative Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
