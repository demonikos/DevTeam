(()=>{const o={openModalBtns:document.querySelectorAll("[data-modal-br-open]"),closeModalBtn:document.querySelector("[data-modal-br-close]"),modal:document.querySelector("[data-modal-br]")},l=()=>{document.body.style.overflow="hidden"},d=()=>{document.body.style.overflow="visible"};o.openModalBtns.forEach(t=>{t.addEventListener("click",e)}),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden"),o.modal.classList.contains("is-hidden")?d():l()}})();