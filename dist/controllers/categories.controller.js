"use strict";
// import { prisma } from '../config/db';
// import {Request, Response} from 'express';
// import { Categorie } from '@prisma/client';
// // Read Categories
// export const getAllCategories = async(req:Request, res:Response) => {
//     try {
//         let categories = await prisma.categorie.findMany()
//         if(categories) {
//             return res.status(200).json(categories);
//         }
//         throw("يوجد خطأ ما ، حاول مرة أخرى!");
//     } catch(err) {
//         res.status(500).json({ error: err });
//     }
// }
// // CREATE
// export const createCategory = async(req:Request, res:Response) => {
//     try {
//         let c_category = req.body as Categorie
//         let category = await prisma.categorie.create({
//             data: {
//                 name: c_category.name
//             }
//         })
//         if(category) {
//             return res.status(200).json({ message: "تم أضافة التصنيف" });
//         }
//         throw("يوجد خطأ ما ، حاول مرة أخرى!");
//     } catch(err) {
//         res.status(500).json({ error: err });
//     }
// }
// // UPDATE
// export const updateCategory = async(req:Request, res:Response) => {
//     try {
//         let u_category = req.body as Categorie
//         let { id } = req.params
//         let category = await prisma.categorie.update({
//             where: {
//                 id: id,
//                 // userId: res.locals.user.id
//             },
//             data: {
//                 name: u_category.name
//             }
//         })
//         if(category) {
//             return res.status(200).json({ message: "تم تعديل التصنيف" });
//         }
//         throw("يوجد خطأ ما ، حاول مرة أخرى!");
//     } catch(err) {
//         res.status(500).json({ error: err });
//     }
// }
