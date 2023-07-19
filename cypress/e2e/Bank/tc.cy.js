import home from "../../support/Methods/home"
import m_register from "../../support/Methods/m_register"
import register from "../../support/pageObject/register"

const selectorRegister = new register()

describe ('suite de tcs Bank',()=>{

    home.visitHome()


    before(function(){

        cy.fixture('registerUser').then(function(datos){

            globalThis.datos = datos

        })

    })  

  

    it('Register User',()=>{

        m_register.clickRegister()

        cy.wait(2000)

        cy.register_User(datos.fName, datos.lName, datos.Address, datos.City, datos.State, datos.Zip, datos.Tlf, datos.Ssn, datos.User, datos.Pass, datos.confirmPAss)
       
        m_register.clickConfirm()

        m_register.RegisterOk(datos.loginOk)

    })


})