const router = require("express").Router({ mergeParams: true });
const contactRoutes = require("./contact.routes");

router.use("/contact", contactRoutes);
console.log(router.stack);

module.exports = router;