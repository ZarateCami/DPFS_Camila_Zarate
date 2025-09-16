const multer = require("multer");
const path = require("path");

const storageProd = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/image/products"));
  },
  filename: function (req, file, cb) {
    const fileName = "prod-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/image/users"));
  },
  filename: function (req, file, cb) {
    const fileName = "profile-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const uploadProd = multer({ storage: storageProd });
const uploadUser = multer({ storage: storageUser });

module.exports = {
  uploadProd,
  uploadUser,
};