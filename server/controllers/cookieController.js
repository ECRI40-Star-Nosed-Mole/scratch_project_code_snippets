const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('----- INSIDE cookieController.setSSIDCookie -----');
  
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  console.log(expirationDate)
  res.cookie('ssid', res.locals.user, {
    httpOnly: true,
    expires: expirationDate,
  });
  
  return next;
};

module.exports = cookieController;