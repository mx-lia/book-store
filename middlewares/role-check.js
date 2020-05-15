exports.allowOnly = function (accessLevel, callback) {
  function checkCustomerRole(req, res) {
    if (!(accessLevel & req.user.role)) {
      res.sendStatus(403);
      return;
    }

    callback(req, res);
  }

  return checkCustomerRole;
};
