exports.getErrorRoute = (req, res, next) => {
  res.status(404).render('page-not-found', { pageTitle: '404 ERROR', path: null})
}