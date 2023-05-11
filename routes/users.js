const router = require('express').Router();
const { getCurrentUserInfo } = require('../contollers/users');
const { updateCurrentUserInfo } = require('../contollers/users');

router.get('/me', getCurrentUserInfo);
router.patch('/me', updateCurrentUserInfo);

module.exports = router;
