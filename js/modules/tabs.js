function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsPerent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    })
  }

  function showTadContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTadContent()

  tabsPerent.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {

      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTadContent(i);

        }
      });

    }
  });
}

export default tabs;