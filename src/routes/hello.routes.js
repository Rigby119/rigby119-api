import { Router } from 'express';
import { sayHello } from '../controllers/hello.controller.js';

const router = Router();

router.get('/:name', sayHello);

export default router;