exports.allowOnly = function (accessLevel, callback) {
  function checkCustomerRole(req, res) {
    if (!(accessLevel & req.user.role)) {
      res.status(403).json({ message: "Access denied!" });
      return;
    }
    callback(req, res);
  }
  return checkCustomerRole;
};
