import { Router } from "express";
import { userAuthenticated } from "../middlewares/userAuthenticated";
import { PixController } from "../controllers/pix.controller";

const pixRoutes = Router();
pixRoutes.use(userAuthenticated);
const pixController = new PixController();

pixRoutes.post("/request", pixController.request)
pixRoutes.post("/pay/:key", pixController.pay)
pixRoutes.get("/transactions", pixController.transactions)

export { pixRoutes }