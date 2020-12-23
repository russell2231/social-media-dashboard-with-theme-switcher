const toggleSwitch = document.querySelector('#fs');

toggleSwitch.addEventListener('change', () => {
  const header = document.querySelector('.main-header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if(this.checked) {
    header.classList.add('dark');
    main.classList.add('dark');
    footer.classList.add('dark');
  }
  header.classList.toggle('dark');
  main.classList.toggle('dark');
  footer.classList.toggle('dark');
})