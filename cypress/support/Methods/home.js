class home {


    visitHome(){

        beforeEach(function(){

            cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        })

    }

}

export default new home;