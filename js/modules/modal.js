function openModal(modalSelector,modalTimerID) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = "block";
  document.body.style.overflow = "hidden"

  console.log(modalTimerID);
  if(modalTimerID) {
  clearInterval(modalTimerID);
  }
}

function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.style.display = "none";
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerID) {

  const btnModal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);


  btnModal.forEach((i) => {
    i.addEventListener("click", () => openModal(modalSelector, modalTimerID));
  })


  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal(modalSelector);
    }

    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.style.display == "block") {
        closeModal(modalSelector);
      }
    });
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector,modalTimerID);
      window.removeEventListener("scroll", showModalByScroll)
    }
  }

  window.addEventListener("scroll", showModalByScroll);

}

export default modal;
export {closeModal};
export {openModal};