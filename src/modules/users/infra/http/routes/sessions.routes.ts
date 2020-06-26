import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sesseionsRouter = Router();
const sessionsController = new SessionsController();

sesseionsRouter.post('/', sessionsController.create);

export default sesseionsRouter;
