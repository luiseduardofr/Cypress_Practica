class register {

constructor(){

    this.register = "#loginPanel > :nth-child(3) > a"

    this.fname = '[name="customer.firstName"]'
    this.lname = '[name="customer.lastName"]'
    this.address = '[name="customer.address.street"]'
    this.city = '[name="customer.address.city"]'
    this.state = '[name="customer.address.state"]'
    this.zip = '[name="customer.address.zipCode"]'
    this.tlf = '[name="customer.phoneNumber"]'
    this.ssn = '[name="customer.ssn"]'
    this.user = '[name="customer.username"]'
    this.pass = '[name="customer.password"]'
    this.confirmPass = '[name="repeatedPassword"]'

    this.bconfirm = "[colspan='2'] > .button"
    this.loginOk = "p"

}



} // end class

export default register;

export const firstNameInput = '[name="customer.firstName"]';
export const lastNameInput = '[name="customer.lastName"]';
export const addressInput = '[name="customer.address.street"]';
export const cityInput  = '[name="customer.address.city"]'
export const stateInput  = '[name="customer.address.state"]'
export const zipInput = '[name="customer.address.zipCode"]'
export const tlfInput = '[name="customer.phoneNumber"]'
export const ssnInput = '[name="customer.ssn"]'
export const userInput = '[name="customer.username"]'
export const passInput = '[name="customer.password"]'
export const pass2Input = '[name="repeatedPassword"]'