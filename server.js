const helmet = require('helmet');
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const upload = multer();
const app = express();

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-eval'"],
  },
}));

app.use((req, res, next) => {
    console.log('CSP:', res.get('Content-Security-Policy'));
    next();
  });

app.use(cors());
app.use(upload.none());

app.use("/api", routes);

app.listen(config.PORT, () => {
console.log(`Server is running on port ${config.PORT}.`);
});