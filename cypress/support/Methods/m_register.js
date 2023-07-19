import register from "../pageObject/register";

const user1 = new register()

class m_register {


    clickRegister(){

        cy.get(user1.register).should('be.visible').click({force:true})

    }

    clickConfirm(){

        cy.get(user1.bconfirm).should('be.visible').click({force:true})

    }

    RegisterOk(msj){

        cy.get(user1.loginOk).should('be.visible').contains(msj)

    }

}

export default new m_register;