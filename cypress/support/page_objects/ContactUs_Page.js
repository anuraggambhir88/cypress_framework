class ContactUs {
  elements = {
    first_name: () => cy.get("[name=first_name]"),
    last_name: () => cy.get("[name=last_name]"),
    email: () => cy.get("[name=email]"),
    comments: () => cy.get("[name=message]"),
    submit: () => cy.get("[type='submit']"),
    thankyou_text: () => cy.get("h1"),
    error_message :()=>cy.get("body")
  };

  enterFirstName(text) {
    this.elements.first_name().type(text);
  }

  enterLastName(text) {
    this.elements.last_name().type(text);
  }

  enterComments(text) {
    this.elements.comments().type(text);
  }

  enterEmail(text) {
    this.elements.email().type(text);
  }

  clickSubmit() {
    this.elements.submit().click();
  }

  verifyThankyouText(text) {
    this.elements.thankyou_text().should("have.text", text);
  }

  verifyErrorMessage(text){
    this.elements.error_message().contains(text)
  }
}

module.exports = new ContactUs();
