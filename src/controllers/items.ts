import { Request,Response } from "express";
import { Carro } from "../interfaces/Carro";

const cars:Carro[]=[{
    id:1,
    modelo:2024,
    marca:"Fiat",
    precio:1000,
    color:"Azul"
},{
    id:2,
    modelo:2024,
    marca:"BMW",
    precio:2000,
    color:"Verde"
},{
    id:3,
    modelo:2023,
    marca:"Ford Raptor",
    precio:3000,
    color:"Rojo"
},{
    id:4,
    modelo:2023,
    marca:"Toyota TXL",
    precio:4000,
    color:"Gris"
}]

// devuelge todos
export const getItems = (re:Request,res:Response) => {
    res.send(cars)
    
}
// devuelve uno
export const getItem = (req:Request,res:Response) => {
    const id = +req.params.id
    const car=cars.find(car =>car.id == id)
    res.send(car)
}