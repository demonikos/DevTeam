(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-br-open]'),
    closeModalBtn: document.querySelector('[data-modal-br-close]'),
    modal: document.querySelector('[data-modal-br]'),
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
    refs.modal.classList.toggle('hidden');
    if (refs.modal.classList.contains('hidden')) {
      enableBodyScroll();
    } else {
      disableBodyScroll();
    }
  }
})();
