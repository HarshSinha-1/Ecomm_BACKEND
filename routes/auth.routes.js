/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * I need to intercept this
 */
const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")


module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",[authMW.verifySignUpBody], authController.signup)
    /**
     * route for 
     * POST localhost:8888/ecomm/api/v1/auth/signup
     */
    app.post("/ecomm/api/v1/auth/signIn",[authMW.verifySigInBody],authController.signIn)
}

 