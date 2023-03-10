(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-ppr-open]'),
    closeModalBtn: document.querySelector('[data-modal-ppr-close]'),
    modal: document.querySelector('[data-modal-ppr]'),
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = 'visible';
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (refs.modal.classList.contains('is-hidden')) {
      enableBodyScroll();
    } else {
      disableBodyScroll();
    }
  }
})();
