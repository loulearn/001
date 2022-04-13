class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        console.log("The icon was clicked")
    }
}

export default MobileMenu;