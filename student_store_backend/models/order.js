const db = require("../db")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class Order {
    static async listOrdersForUser(){
        //will return all orders that the authenticated user has created. 
        //Leave it empty for now except for some comments explaining what will be done.
    }
    static async createOrder(order){
        //method will take a user's order and store it in the database.
        //Leave it empty for now except for some comments explaining what will be done.
    }
}

module.exports = Order