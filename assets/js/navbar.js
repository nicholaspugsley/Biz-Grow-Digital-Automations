const navbarHTML = `
<nav class="bg-aquatic-blue text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="./index.html" class="text-lg font-semibold">Biz Grow Digital - Automations</a>
    <button id="navbarToggle" class="text-white md:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      
    </button>
    <div class="hidden w-full md:flex md:items-center md:w-auto" id="navbarLinks">
      <div class="text-sm md:flex-grow">
      <a href="./index.html" class="block mt-4 md:inline-block md:mt-0 hover:text-sandy-yellow mr-4 p-2 rounded">Home</a>
      <a href="./action-passed.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">1</a>
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">2</a>
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">3</a>
      </div>
    </div>
  </div>
  <div class="hidden" id="mobileMenu">
    <div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded-lg shadow-md">
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">Home</a>
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">1</a>
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">2</a>
      <a href="./index.html" class="hover:bg-light-blue text-aquatic-blue p-2 rounded">3</a>
    </div>
  </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  const navbarToggle = document.getElementById('navbarToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  navbarToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});


