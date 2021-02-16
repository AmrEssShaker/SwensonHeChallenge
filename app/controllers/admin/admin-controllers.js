const { CoffeProductModel } = require("../../../models");
const { generalHalper } = require("../../helpers");

class AppControllers {
  async createCoffeProduct(req, res, next) {
    try {
      const { product_type, coffee_flavor, pack_size } = req.body;
      // Generate ske
      req.body.sku = await generalHalper.generateSKU(
        product_type,
        coffee_flavor,
        pack_size
      );

      // Store coffee produc in db
      const coffeProducts = await CoffeProductModel.createCoffeeProduct(
        req.body
      );

      return res.sendSuccess(coffeProducts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new AppControllers();
