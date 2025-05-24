import e from "express";
import getconnection  from "../config/database";
import { prisma } from "config/client";
import internal from "stream";
const handleCreateUser = async (
    email :string,
    description :string,
    address :string) => {
    await prisma.user.create({
        data: {
            name : description,
            email: email,
            addresses: address
        }
    })};

const handleGetUser =async () => {
    const user = await prisma.user.findMany();
    return user;
}
const handleGetUserbyid =async ( id:string ) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        }
    });
    return user;
}
const handledeleteuser = async (
    id: string) => {
    await prisma.user.delete({
        where: {
            id: +id
        }})
    }

const handleupdateUser = async (
    id: string,
    name:string,
    email: string,
    address: string,
    ) => {
    await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name: name,
            email: email,
            addresses: address
        }})
    }
export {handleCreateUser, handleGetUser,handledeleteuser,handleGetUserbyid,handleupdateUser};
