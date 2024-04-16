import React from "react";
import { Link } from "react-router-dom";
function Head(props) {
  return (
    <div>
      <div class="flex w-[100%] justify-content-between backdrop-blur-3xl bg-white/30 sm:px-60 px-5 border-b sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
        <div class="flex-1">
          <img
            class="sm:translate-x-6 rounded-lg"
            alt="Logo"
            width="40"
            height="50"
            src="logot.png"
          />
        </div>
        <div>
          <nav>
            <ul className="flex me-[12rem] gap-3 text-center ">
              <li>Acceuil</li>
              <li>Livres</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>

        <div class="flex gap-2">
          <a
            href="https://threads.net/100daysofnextjs"
            class="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
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
            class="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm border border-[#127CE5] text-[#127CE5] text-white flex gap-1"
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
              <span className="text-blue-500">
                {" "}
                <Link to="/connexion">Se connecter</Link>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
