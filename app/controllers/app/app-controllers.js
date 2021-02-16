const { CoffeProductModel, CoffePodModel } = require("../../../models");
const coffeProductModel = require("../../../models/coffe-product-model");

class AppControllers {
  async listCoffeProducts(req, res, next) {
    try {
      const srchObj = { ...req.query };
      const coffeProducts = await coffeProductModel.all(srchObj);

      return res.sendSuccess(coffeProducts);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new AppControllers();
