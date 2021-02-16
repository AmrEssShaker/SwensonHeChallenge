const router = require("express").Router();
const bodyParser = require("body-parser");
const appControllers = require("../app/controllers/app/app-controllers");
const adminControllers = require("../app/controllers/admin/admin-controllers");
const customResponse = require("../app/middleware/custom-reponse");

// Enable custom responses
router.use(customResponse);

// Enable body parsing
router.use(bodyParser.json());

/** Admin routes */
// Create a new coffee product
router.post("/admin-api/coffee-products", adminControllers.createCoffeProduct);

/** App routes */
// Query coffee prodcuts
router.get("/app-api/coffee-products", appControllers.listCoffeProducts);

module.exports = router;
