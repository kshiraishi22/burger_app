module.exports = function(app) {

  app.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      let hdbr_obj = {
        burgers: data
      }
      console.log(hdbr_obj)
      res.render("index", hdbr_obj)
    });
  })
};