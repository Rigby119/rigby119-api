import { Router } from 'express';
import { getStatus, getServerInfo, getTime } from '../controllers/system.controller.js';

const router = Router();

router.get('/status', getStatus);
router.get('/server', getServerInfo);
router.get('/time', getTime);

export default router;