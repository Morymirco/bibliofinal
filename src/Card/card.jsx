import React from 'react';

const Card = () => {
    return (
        <div>
          <nav id="header" class="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-24">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input class="hidden" type="checkbox" id="menu-toggle"/>
         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                  <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
               </ul>
            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
               <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div>
      </div>
   </nav>
            

            {/* LES GRIDS */}
        
<div class="p-24 flex flex-wrap items-center justify-center">
    
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg w-[450px]">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"  style={{transform:"scale(1.5)",opacity:"0.1"}}> 
        <rect x="159.52" y="175" width="400" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="400" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        <img class="relative w-40" src="img2.jpeg" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Indoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Peace Lily</span>
          <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg w-[450px]">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <img class="relative w-40" src="img.jpeg" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Monstera</span>
          <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg w-[450px]">
      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
      </svg>
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" ></div>
        <img class="relative w-40" src="img.jpeg" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Oak Tree</span>
          <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
          
        </div>
      </div>
    </div>
    
  </div>



<div class='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div class='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-md mx-auto'>
          <div class='h-[236px]' style={{backgroundImage:"url(img.jpeg)",backgroundSize:"cover",backgroundPosition:"center"}}>
            
           </div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>Spagetti with shrimp sauce</p>
            <div class='flex flex-row'>
              <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
              <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
            </div>
            <p class='text-[#7C7C80] font-[15px] mt-6'>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.</p>


              <a target='_blank' href='foodiesapp://food/1001' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  View on foodies
              </a>
            <a target='_blank' href="https://apps.apple.com/us/app/id1493631471" class='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  Download app
              </a>
          </div>
        </div>
    </div>
</div>





        </div>
    );
}

export default Card;
