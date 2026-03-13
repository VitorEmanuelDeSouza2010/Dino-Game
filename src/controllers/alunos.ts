import { Request, Response } from "express";

import {prisma} from "../../config/prisma";

export default {
    list: async (request: Request, response: Response) => {
        const users = await prisma.alunos.findMany();

        return response.status(200).json(users);
    },

    create: async (request: Request, response: Response) => {
        const { nome, idade, cpf, email } = request.body;
        const users = await prisma.alunos.create({
            data: {
                nome,
                idade,
                cpf,
                email,
            },
        });
        return response.status(201).json(users);
    },

    update: async (request: Request, response: Response) => {
        const { nome, idade, cpf, email, id } = request.body;
        const users = await prisma.alunos.update({
            where: { id  },
            data: {
                nome,
                idade,
                cpf,
                email,
            },
        });
        return response.status(200).json(users);
    }
};