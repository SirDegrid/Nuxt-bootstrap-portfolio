const router = require("express").Router({ mergeParams: true });
const validate = require("../middleware/validate");

const { ContactController } = require("../controllers/contact.controller");

router.post("/", validate, (req, res) => {
const controller = new ContactController(req, res);
controller.sendContactForm();
});

module.exports = router;