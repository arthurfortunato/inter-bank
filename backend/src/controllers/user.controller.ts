import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {

    async signin(request: Request, response: Response) {
        const { email, password } = request.body;
        const userService = new UserService();

        const users = await userService.signin({ email, password });

        return response.status(200).json(users);
    }

    async signup(request: Request, response: Response) {
        const user = request.body;
        const userService = new UserService();

        const users = await userService.signup(user);

        return response.status(200).json(users);
    }

    async getUser(request: Request, response: Response) {
        const user = request.user;
        const userService = new UserService();

        const getUser = await userService.getUser(user)

        return response.status(200).json(getUser);
    }

}
