const radios = document.querySelectorAll('input[name="page"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    const page = radio.value;
    // Ganti 'halaman' dengan nama file HTML halaman yang sesuai
    window.location.href = `index${page}.html`;
  });
});