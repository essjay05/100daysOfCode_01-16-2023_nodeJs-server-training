exports.get404Route = (req, res, next) => {
  res.status(404).render('error/page-not-found', { pageTitle: '404 ERROR', path: null})
}