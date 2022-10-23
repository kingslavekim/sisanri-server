import { Router } from 'express';
import irController from '@controllers/ir.controller';
import { Routes } from '@interfaces/routes.interface';

class IrRoute implements Routes {
  public path = '/';
  public router = Router();
  public irController = new irController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}getIrCount`, this.irController.getIrCount);
    this.router.get(`${this.path}getIrList`, this.irController.getIrList);
    this.router.get(`${this.path}getIrObject`, this.irController.getIrObject);
  }
}

export default IrRoute;
