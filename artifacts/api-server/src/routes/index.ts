import { Router, type IRouter } from "express";
import healthRouter from "./health";
import appointmentsRouter from "./appointments";
import petTaxiRouter from "./pet-taxi";
import contactRouter from "./contact";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/appointments", appointmentsRouter);
router.use("/pet-taxi", petTaxiRouter);
router.use("/contact", contactRouter);
router.use("/admin", adminRouter);

export default router;
