const footerHTML = `
<footer class="bg-aquatic-blue text-white p-4">
  <div class="container mx-auto">
    <div class="text-center mb-4">
      <p>&copy; ${new Date().getFullYear()} Biz Grow Digital - Automations. All rights reserved.</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div class="text-center"><a href="./index.html" class="hover:text-sandy-yellow">Home</a></div>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});

