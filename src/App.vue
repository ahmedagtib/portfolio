<template>
    <div :class="[dark ? 'dark' : '']" class="">
      <div class="bg-gray-100 dark:bg-black">
           <nav class="md:container md:mx-auto md:flex md:items-center md:justify-between">
               <div  class="px-4 py-5 pb-0 flex items-center justify-between">
                    <div @click="open = !open" class="cursor-pointer md:hidden">
                         <svg xmlns="http://www.w3.org/2000/svg" class="dark:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                         </svg>
                    </div>
                   <div>
                     <span class="inline-blok font-latino  italic text-primary text-3xl dark:text-white">AHME<strong class="text-gold">DO</strong></span>
                    </div>
                    <button @click="dark = !dark" class="cursor-pointer md:ml-4">
                        <svg v-if="dark" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                         <svg v-else xmlns="http://www.w3.org/2000/svg" class="text-yellow-400 h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                        </svg>
                    </button>
               </div>
                <ul  :class="[open ? '' : 'hidden']" class="px-4 py-5 border-t text-primary border-gold dark:text-white md:block md:border-0 md:flex md:items-center md:justify-between">
                        <li class="md:px-4 font-latino md:italic hover:text-gold transiation duration-500 uppercase"><router-link to="/">portfolio</router-link></li>
                        <li class="md:px-4 font-latino md:italic hover:text-gold transiation duration-500 uppercase"><a href="#about">inspir</a></li>
                        <li class="md:px-4 font-latino md:italic hover:text-gold transiation duration-500 uppercase"><a href="#stack">Stack</a></li>
                        <li class="md:px-4 font-latino md:italic hover:text-gold transiation duration-500 uppercase"><a href="https://www.linkedin.com/in/ahmed-gtaib-7bb184141/">Contact Me</a></li>
                 </ul>
           </nav>
           <div class="flex flex-col sm:flex-row sm:container sm:mx-auto  sm:items-center sm:justify-around px-6 pb-0 py-4">
                <div class="text-center sm:text-left px-4 py-3 order-2 sm:order-1 text-primary dark:text-white">
                   <h6 class="text-xl opacity-40">Hi There !</h6>
                   <h3 class="mt-4 text-2xl md:text-4xl font-bold">I ` M  AHMED GTAIB</h3>
                   <p class="mt-4 text-2xl opacity-70 md:text-2xl">
                       A developer  based in Safi & , Oulad Teima MOROCCO.
                   </p>
                   <div class="mt-4 flex items-center justify-center md:justify-start md:mt-6">
                        <a href="https://www.linkedin.com/in/ahmed-gtaib-7bb184141/" class="inline-block px-4 py-2 bg-primary text-white rounded-md shadow-lg dark:bg-gold">
                            Download CV
                        </a>
                            <a href="https://www.linkedin.com/in/ahmed-gtaib-7bb184141/" class="inline-block ml-2 px-4 py-2 bg-gray-300 text-primary rounded-md shadow-lg">
                            Hire Me
                        </a>
                    </div>
               </div>
               <div class="relative order-1 sm:order-2">
                   <div class="hidden w-96 sm:block bg-cover bg-center   rotateme">
                        <img class="" src="./assets/challange/shape.png" alt="Ahmed gtaib"  /> 
                   </div>
                   <img class="relative h-96  sm:h-full  sm:absolute  top-0 inset-x-8" src="./assets/A.png" alt="Ahmed gtaib"  /> 
               </div>

           </div>
            <div class="bg-gray-200 dark:bg-black">
             <div>
                 <div class="px-4 py-8 flex flex-col text-center md:flex md:container md:mx-auto md:flex-row md:items-center md:justify-around">
                     <div class="md:w-1/2 md:flex md:justify-center">
                         <img class="md:h-64   md:p-2  md:border md:border-3 md:rounded-full md:border-white md:dark:border-gold md:shadow" src="./assets/avatr.png" alt="Ahmed gtaib"/>
                     </div>
                     <div class="md:w-1/2 md:text-left" id="about"> 
                        <h2 class="mt-2 inline-block  text-primary  text-2xl font-latino uppercase    dark:text-gold">About Me</h2>
                        <p class="mt-4 text-md font-semibold text-primary opacity-70 dark:text-white">
                            I enjoy Contribute to software development in the web world, whether that be websites, applications, or anything in between.
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                            I use Techs like Laravel, VueJS alongside with other technologies 
                        </p>
                     </div>
                 </div>
             </div>
        </div>
        <div class="mt-4 px-8">
            <h3 class="text-center w-full  mt-2 inline-block  text-primary  text-2xl font-latino uppercase    dark:text-gold">work together</h3> 
             <p class="mt-4 text-center text-md font-semibold text-primary opacity-70 dark:text-white">
                 We work together by three Step
             </p>
            <div class="mt-4  flex flex-col items-center md:container md:mx-auto md:flex-row  md:justify-around">
                <div class="px-8 py-8 text-center">
                    <div class="px-4 py-4 bg-white rounded-full shadow text-primary dark:text-gold">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <h4 class="mt-2 text-2xl text-primary font-bold dark:text-gold">Thinking</h4>
                </div>
                <div class="px-8 py-8 text-center ">
                    <div class="px-4 py-4 bg-white rounded-full shadow text-primary dark:text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    </div>
                    <h4 class="mt-2 text-2xl text-primary font-bold dark:text-gold">Planning</h4>
                </div>
                 <div class="px-8 py-8 text-center ">
                   <div class="px-4 py-4 bg-white rounded-full shadow text-primary dark:text-gold">  
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-44 w-44" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                   </div>
                     <h4 class="mt-2 text-2xl text-primary font-bold dark:text-gold">Coding</h4>
                </div>
            </div>
        </div>
        <div class="bg-gray-200  mt-4 px-8 ms:conatiner mx-auto dark:bg-black" id="stack">
             <h3 class="text-center w-full  mt-4 inline-block  text-primary  text-2xl font-latino uppercase    dark:text-gold">My Stack</h3> 
             <div class="p-8 flex flex-wrap items-center justify-around">
                      <div class="px-3 py-2 m-2 w-fit h-12 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           LARAVEL PHP
                      </div>
                      <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           Livewire
                      </div>
                      <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          vue js
                      </div>
                      <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           vue router 
                      </div>
                        <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           vuex 
                      </div>
                        <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           Tailwind Css 
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           bootstrap Css 
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           ajax/axios 
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          ESCRIPT
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          HTML 5
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          Git
                      </div>
                       <div class="px-3 py-2 w-fit  h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          github
                      </div>
                       <div class="px-3 py-2 w-fit h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                          npm 
                      </div>
                        <div class="px-3 py-2 w-fit h-12  m-2 text-2xl font-latino bg-gray-400 rounded text-primary shadow-md  dark:text-white dark:bg-gold dark:bg-opacity-20">
                           trello
                      </div>
             </div>
        </div>
                 <div class="mt-4 px-8 ms:conatiner mx-auto dark:bg-black">
             <h3 class="text-center w-full  mt-4 inline-block  text-primary  text-2xl font-latino uppercase    dark:text-gold">My Experience</h3> 
             <div class="mt-4 md:flex md:items-center md:justify-between">
                    <div class="py-2  rounded-lg  shadow-2xl dark:bg-gold dark:bg-opacity-10 md:mr-4 md:w-1/2">
                         <a href="https://webexperts.ma/">
                            <div class="flex items-center">
                                 <img  class="w-1/3" src="./assets/challange/sst.png"  alt="sst" />
                                <div class="px-4 flex-1 dark:text-white">
                                    <div class="text-sm  flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span class="inline-block mx-1">:</span>
                                        <div class="text-sm text-italic">
                                            2 years web developer
                                        </div>
                                    </div>
                                    <h3 class="mt-2 text-xl font-semibold italic">SMART SERVICES & TOOLS</h3>
                                    <p class="text-sm font-semibold md:py-4">
                                        development of web applications.
                                    </p>
                                </div>
                            </div>
                         </a>
                    </div>
                     <div class="py-2 mt-4 md:mt-0  rounded-lg  shadow-2xl dark:bg-gold dark:bg-opacity-10 md:w-1/2">
                         <a href="http://www.smartove.com/">
                            <div class="flex items-center">
                                 <img  class="w-1/3" src="./assets/challange/sv.png"  alt="sst" />
                                <div class="px-4 flex-1 dark:text-white">
                                    <div class="text-sm  flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span class="inline-block mx-1">:</span>
                                        <div class="text-sm text-italic">
                                            6 months  (intership)
                                        </div>
                                    </div>
                                    <h3 class="mt-2 text-xl font-semibold italic">SMARTOVE</h3>
                                    <p class="text-sm font-semibold md:py-4">
                                       Expert in the design and development of web applications, mobile applications, software and data
                                    </p>
                                </div>
                            </div>
                         </a>
                    </div>
             </div>
          </div>
           <div class="py-4  bg-gray-200  mt-4 px-8 ms:conatiner mx-auto dark:bg-black dark:text-white dark:border-t dark:border-gold">
                 <div class="flex items-center justify-center">
                       <a href="https://github.com/ahmedagtib">
                          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                       </a>
                        <a href="https://www.linkedin.com/in/ahmed-gtaib-7bb184141/">
                         <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/></svg>
                       </a>
                 </div>
                 <h6 class="text-center font-semibold text-italic"> portfolio Created By Ahmed Gtaib &copy; 2022</h6>
          </div>



      </div>
     </div>
</template>
<script>

import { ref } from 'vue'
export default {
  
    setup() {
        const dark = ref(true)
        const open = ref(false)
        ///My experience

        return {
            dark,
            open
        }
    },
}
</script>
<style scoped>
.bgi{
    background-image: url('./assets/challange/shape.png');

}

.rotateme {
  -webkit-animation-name: rotateme;
  animation-name: rotateme;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}
@keyframes rotateme {
	from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@-webkit-keyframes rotateme {
	from {
		-webkit-transform: rotate(0deg);
	}

	to {
		-webkit-transform: rotate(360deg);
	}
}
</style>