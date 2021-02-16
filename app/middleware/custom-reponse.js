const SUCCESS_STATUS = "SUCCESS";

module.exports = (req, res, next) => {
  /**
   * Send success reponse
   */
  res.sendSuccess = (data = null, message) => {
    return res.json({
      status: SUCCESS_STATUS,
      message,
      data,
    });
  };

  next();
};
