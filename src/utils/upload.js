const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const randomText = Date.now() + "-" + Math.round(Math.random() * 1e9);
    let fileNameExtn = file.originalname.split(".");
    let extention = fileNameExtn[fileNameExtn.length - 1];

    cb(null, file.fieldname + "-" + randomText + "." + extention);
  },
});

const upload = multer({ storage: storage });

module.exports = upload
