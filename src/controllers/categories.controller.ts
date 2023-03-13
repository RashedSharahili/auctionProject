import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { Categories } from '@prisma/client';

// Read Categories
export const getAllCategories = async(req:Request, res:Response) => {

    try {
        

        let categories = await prisma.categories.findMany()

        if(categories) {

            return res.status(200).json(categories);
        }
    
        throw("there was an error, try again!");

    } catch(err) {

        res.status(500).json({ error: err });
    }
}

// CREATE
export const createCategory = async(req:Request, res:Response) => {

    try {

        let c_category = req.body as Categories

        let category = await prisma.categories.create({
            data: {
                name: c_category.name
            }
        })

        if(category) {

            return res.status(200).json({ message: "category created successfully!" });
        }
    
        throw("there was an error, try again!");

    } catch(err) {

        res.status(500).json({ error: err });
    }
}

// UPDATE
export const updateCategory = async(req:Request, res:Response) => {

    try {

        let u_category = req.body as Categories

        let { id } = req.params

        let category = await prisma.categories.update({
            where: {
                id: id,
                // userId: res.locals.user.id
            },
            data: {
                name: u_category.name
            }
        })

        if(category) {

            return res.status(200).json({ message: "category created successfully!" });
        }

        throw("there was an error, try again!");
        
    } catch(err) {

        res.status(500).json({ error: err });
    }

}