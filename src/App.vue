<template>
  <router-view />
</template>

<style>
*{
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  
}
::-webkit-scrollbar {
  width: 0.7rem;
 }
 
::-webkit-scrollbar-track {
  background-color: white;
  }
 
::-webkit-scrollbar-thumb {
background-color: #0988be;
}
::-webkit-scrollbar-thumb:hover {
background-color: #14b0f4;
}

 
/* for Firefox */
html {
  scrollbar-color: #0988be #fff
} 

</style>
