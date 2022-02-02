function albom (tabsItems, tabContentItems, tabsParentItems){

    const tabs = document.querySelectorAll(tabsItems),
          tabsContent = document.querySelectorAll(tabContentItems),
          span = document.querySelectorAll('.tabs-active'),
          tabsParent = document.querySelector(tabsParentItems);

    function hideTabsContent (){
        tabsContent.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('active');
        });
        span.forEach(item => {
            item.classList.add('hidden');
            item.classList.remove('show');
        });
    };

    function showTabContent (i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hidden');

        tabs[i].classList.add('active');
        span[i].classList.remove('hidden');
        span[i].classList.add('show');
    };

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const targ = e.target;

        if(targ && targ.classList.contains('tabheader-item')){
            tabs.forEach((item, i) => {
                if (targ == item){
                    hideTabsContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default albom;