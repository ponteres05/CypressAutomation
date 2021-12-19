/// <reference types="cypress" />

describe("Add Book to the Database", () => {
    var result;
    it("Validate that correct message is received and Status is 200", () => {
        cy.request ({
            method: "POST",
            url: "https://rahulshettyacademy.com/Library/Addbook.php",
            body: {
                name: "CypressAPITest",
                isbn: "1000013",
                aisle: "1000013",
                author: "isaacstephen"
            }
        }).then(response => {
            expect(response.body).has.property("Msg", "successfully added")
            expect(response.status).to.eql(200)
        })  
    })
})

describe("Get Book Details from the Database", () => {
    var result;
    it("Validate that body contains the correct keys and values", () => {
        cy.request ({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?ID=10000131000013",
        }).then(response => {
            expect(response.body[0]).has.property("book_name", "CypressAPITest")
            expect(response.body[0]).has.property("isbn", "1000013")
            expect(response.body[0]).has.property("aisle", "1000013")
            expect(response.body[0]).has.property("author", "isaacstephen")
            expect(response.status).to.eql(200)
        })
    })
})

describe("Delete Book from the database", () => {
    var result;
    it("Validate that correct message is received", () => {
        cy.request ({
            method: "POST",
            url: "https://rahulshettyacademy.com/Library/DeleteBook.php",
            body: {
                ID: "10000131000013",
            }
        }).then(response => {
            expect(response.body).has.property("msg", "book is successfully deleted")
            expect(response.status).to.eql(200)
        })  
    })
})