class HomePage {
    get burgerMenuButton() {
        return cy.get('button[data-element-type="burger-menu"]');
    }

    get logOutButton() {
        return cy.get(':nth-child(8) > .next-bve2vl');
    }

    logout() {
        this.burgerMenuButton.click();
        this.logOutButton.click();
    }

}

export default HomePage