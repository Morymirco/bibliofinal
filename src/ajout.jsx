import React from 'react'

export default function ajout() {
  return (
    <div>
        <div class="my-6 mx-auto max-w-xl bg-white font-[sans-serif]">
            <h1 class="text-3xl text-[#333] font-extrabold text-center">Contact</h1>
            <form class="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
                <input type='text' placeholder='Subject'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"></textarea>
                    <div class="mb-3">
  <label
    for="formFileDisabled"
    class="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
    >Disabled file input example</label>
  <input
    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-secondary-500 bg-neutral-200 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface/50 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface/50 focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:bg-neutral-600  dark:text-white/50 file:dark:text-white/50"
    type="file"
    id="formFileDisabled"
    disabled />
</div>

<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />

<div class="max-w-2xl mx-auto">

	<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

	<p class="mt-5">This file input component is part of a larger, open-source library of Tailwind CSS components. Learn
		more
		by going to the official <a class="text-blue-600 hover:underline"
			href="#" target="_blank">Flowbite Documentation</a>.
	</p>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>
<div class="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
    <input type="file" class="absolute inset-0 w-full h-full opacity-0 z-50" />
    <div class="text-center">
        <img class="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>

        <h3 class="mt-2 text-sm font-medium text-gray-900">
            <label for="file-upload" class="relative cursor-pointer">
                <span>Drag and drop</span>
                <span class="text-indigo-600"> or browse</span>
                <span>to upload</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
            </label>
        </h3>
        <p class="mt-1 text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
        </p>
    </div>

    <img src="" class="mt-4 mx-auto max-h-40 hidden" id="preview"/>
</div>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>
    </div>
  )
}
