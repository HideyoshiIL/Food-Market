function modal() {

  const btnModal = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector(".modal");

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"
    clearInterval(modalTimerID);
  }


  btnModal.forEach((i) => {
    i.addEventListener("click", openModal)
  })

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }


  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.style.display == "block") {
        closeModal();
      }


    });
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll)
    }
  }

  const modalTimerID = setTimeout(openModal, 50000);

  window.addEventListener("scroll", showModalByScroll);

}

module.exports = modal;