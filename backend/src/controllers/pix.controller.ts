import { Request, Response } from "express";
import { PixService } from "../services/pix.service";

export class PixController {

  async request(request: Request, response: Response) {
    const pixService = new PixService();
    const { value } = request.body;
    const user = request.user;

    const requestKey = await pixService.request(value, user);

    return response.status(200).json({ copyPasteKey: requestKey })
  }

  async pay(request: Request, response: Response) {
    const pixService = new PixService();

    const { key } = request.params;
    const user = request.user;

    const payment = await pixService.pay(key, user);

    return response.status(201).json({ payment })

  }

  async transactions(request: Request, response: Response) {
    const pixService = new PixService();

    const transactions = await pixService.transactions(request.user);

    return response.status(201).json({ transactions })
  }

}