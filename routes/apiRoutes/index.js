const router = require('express').Router();
const noteTakerRoutes = require('../apiRoutes/noteTakerRoutes');

router.use(noteTakerRoutes);

module.exports = router;