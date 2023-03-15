<template>
      <div id="centerCalltoAction">
            <div class="mt-72 px-4 md:w-3/4 lg:w-2/3 mx-auto border text-center">
                  <h1 class="text-4xl sm:text-5xl leading-tight text-center text-green-500 mb-3">
                        <b>Wizztunes</b>
                  </h1>
                  <p class="pt-2 text-xl text-center text-gray-300">Login or register now and Find, Save & Share music with the world.</p>
            </div>
            <div class="mt-6">

            </div>
            <div class="flex justify-center text-center">
                  <router-link class=" mr-1 py-2 px-4 bg-green-600 text-white font-semibold text-xl rounded-lg shadow-bg
                  hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 cursor-pointer"
                  to="login">
                        Login
                  </router-link>
                  <router-link class=" mr-1 py-2 px-4 bg-blue-600 text-white font-semibold text-xl rounded-lg shadow-bg
                  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
                  to="register">
                        Register
                  </router-link>
            </div>
      </div>
</template>

<script setup></script>

<style lang="scss">
      #centerCallToAction {
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background-color: red;
      }

</style>