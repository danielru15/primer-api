import { Router } from "express"
import { getItems, getItem } from "../controllers/items"

const router = Router()
router.get('/items',getItems)
router.get('/items/:id',getItem)

export {router}