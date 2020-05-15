const CUSTOMER_ROLES = {
  guest: 1,
  user: 2,
  admin: 4,
};

const ACCESS_LEVELS = {
  guest: CUSTOMER_ROLES.guest | CUSTOMER_ROLES.user,
  user: CUSTOMER_ROLES.user | CUSTOMER_ROLES.admin,
  admin: CUSTOMER_ROLES.admin,
};

module.exports.CUSTOMER_ROLES = CUSTOMER_ROLES;
module.exports.ACCESS_LEVELS = ACCESS_LEVELS;
