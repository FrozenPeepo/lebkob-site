function createScrollEffect() {
  const header = document.querySelector('.header');
  const trademark = document.querySelector('.header-lebkob-trademark');
  const headerRight = document.querySelector('.header-right');
  const teamButton = document.querySelector('.team-button');
  const headerNav = document.querySelectorAll('.header-right a');
  const mainSection = document.querySelector('.sections');

  function handleScroll() {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition <= 40){
        header.style.height = '130px';
        trademark.style.height = '70px';
        headerRight.style.width = '500px';
        teamButton.style.fontSize = '30px';
        headerNav.forEach((nav) => {
          nav.style.fontSize = '25px';
        });
        mainSection.style.marginTop = '130px';
      }else{
        header.style.height = '100px';
        trademark.style.height = '40px';
        headerRight.style.width = '320px';
        teamButton.style.fontSize = '15px';
        headerNav.forEach((nav) => {
          nav.style.fontSize = '14px';
        });
        mainSection.style.marginTop = '100px';
      }
  }

  window.addEventListener('scroll', handleScroll);
}

/*createScrollEffect();*/