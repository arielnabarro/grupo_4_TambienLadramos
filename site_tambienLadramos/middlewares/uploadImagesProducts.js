const multer = require('multer');
const path = require('path');

/* MULTER */
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/alimento-balanceado')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage
});

module.exports = upload;

