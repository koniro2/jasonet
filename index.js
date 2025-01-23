const dashBtn = document.querySelector('.dashboard-button');
    const dash = document.querySelector('.dashboard');
    const close = document.querySelector('.close');
    const blury = document.querySelector('.blur');

    dashBtn.addEventListener('click', () => {
      dash.style.display = 'block';
    })

    close.addEventListener('click', () => {
      dash.style.display = 'none';
    })

    const availClose = document.querySelector('.avail-close');
    const availPage = document.querySelector('.avail-page');
    const body = document.querySelector('body');

    function avail() {
      availPage.style.display = 'block';
      blury.style.display = 'block';
      body.style.overflow = 'hidden';
    }

    availClose.addEventListener('click', () => {
      availPage.style.display = 'none';
      blury.style.display = 'none';
      body.style.overflow = 'visible';
    })