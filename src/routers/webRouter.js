const express = require ('express');
const webController = require ('../controllers/webController');
const router = express.Router();
//const authMiddleware = require ('../middlewares/authMiddleware');

router.get ('/', webController.index);
router.get ('/menu', webController.menu);

module.exports = router;