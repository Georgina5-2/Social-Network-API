const router=require('express').Router();
const friendsRoutes=require('./friendsRoutes');
const thoughtsRoutes=require('./thoughtsRoutes');
const usersRoutes=require('./usersRoutes');
router.use('/friendsRoutes,',friendsRoutes);
router.use('/thoughtsRoutes',thoughtsRoutes);
router.use('/usersRoutes',usersRoutes);
module.export=router;