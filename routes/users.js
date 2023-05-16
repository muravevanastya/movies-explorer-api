const router = require('express').Router();
const { updateCurrentUserInfoValidation } = require('../middlewares/validation');
const { getCurrentUserInfo } = require('../contollers/users');
const { updateCurrentUserInfo } = require('../contollers/users');

router.get('/me', getCurrentUserInfo);
router.patch('/me', updateCurrentUserInfoValidation, updateCurrentUserInfo);

module.exports = router;
