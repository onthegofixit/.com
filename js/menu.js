(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const navItems = document.getElementsByClassName("nav__items");
    const closeMenu = document.querySelector('.nav__close');
    

    const params = new URLSearchParams(window.location.search)

    if (params.has("computer_repair")) {
        showComputerRepairItems();
    }
    if (params.has("mobile-items")){
        showMobileItems()
    }
    if (params.has("diagnostic-items")){
        showDiagnosticItems()
    }

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
        
    });

    for (const item of navItems) {
        item.addEventListener("click", () => {
            menu.classList.remove("nav__link--show");
        });
    }

    

})();

function showComputerRepairItems() {
    const virusRemovalItems = document.getElementsByClassName("computer_repair_items")
    const serviceText = document.getElementById('service_text');

    serviceText.textContent = 'COMPUTER REPAIR';
    for (const item of virusRemovalItems) {
        item.style.display = "block"
    }
}

function showMobileItems(){
    const mobileItems = document.getElementsByClassName("mobile_items")
    const serviceText = document.getElementById('service_text');

    serviceText.textContent = 'MOBILE';
    for (const item of mobileItems) {
        item.style.display = "block"
    }
}

function showDiagnosticItems(){
    const diagnosticItems = document.getElementsByClassName("diagnostic_items")
    const serviceText = document.getElementById('service_text');

    serviceText.textContent = 'DIAGNOSTIC';
    for (const item of diagnosticItems) {
        item.style.display = "block"
    }
}
