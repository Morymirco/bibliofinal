import React, { useState } from "react";
import { Link } from "react-router-dom";

const Head2 = ({ connected, onligne, decon }) => {

  return (
    <div>
    
      <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  d2
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="./logot.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  <Link
                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                  {/* <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Tableau de bord</a> */}
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    to="/todo"
                  >
                    Livres
                  </Link>
                  {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Equipe</a> */}
                  {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projets</a> */}
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    to="/photo"
                    aria-current="page"
                  >
                    Mes Livres
                  </Link>
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            {!onligne && (
              <div class="flex gap-2 ">
                <a
                  href="https://threads.net/100daysofnextjs"
                  class="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1 "
                >
                  <span class="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                    <svg
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
                    </svg>
                    <span>
                      <Link to="/inscription">S'inscire</Link>
                    </span>
                  </span>
                </a>
                <a
                  href="https://threads.net/100daysofnextjs"
                  class="text-xs font-medium px-4 py-2.5 rounded-full hidden sm:flex hover:opacity-100 hover:shadow-sm border border-[#127CE5] text-[#127CE5] text-white flex gap-1"
                >
                  <span class="flex items-center space-x-2 rounded-md group hover:rounded-full  transition hover:text-[#127CE5]">
                    <svg
                      fill="#127CE5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
                    </svg>
                    <span className="text-blue-500 ">
                      {" "}
                      <Link to="/connexion">Se connecter</Link>
                    </span>
                  </span>
                </a>
              </div>
            )}
            {onligne && (
              <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 xs:hidden">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleMenu}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="./profil.png"
                        alt=""
                      />
                    </button>
                  </div>
                  {menuOpen && (
                    <div
                      className="absolute  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        {onligne.email.split("@")[0]}
                      </a>
                      <a
                        href="#"
                        classNameName="block px-10 text-sm text-gray-700 w-100"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Paramtres
                      </a>
                      <a
                        href="#"
                        classNameName="block text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        onClick={decon}
                      >
                        Déconnecter
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Head2;
