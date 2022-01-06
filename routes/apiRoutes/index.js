const router = require('express').Router();
const animalRoutes= require('../apiRoutes/animalRoutes');
const zookeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeperRoutes);

module.exports = router;