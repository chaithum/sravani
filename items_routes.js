
const express = require('express')

const { getAllfoods, addItem, updateItem, deleteItem, updateAllItems } = require('../controller/items-controller')
const itemRouter = express.Router()

itemRouter.get("/", getAllfoods)
itemRouter.post("/addItem",addItem)
itemRouter.put("/updateItem/:id",updateItem)
itemRouter.delete("/deleteItem/:id",deleteItem)


module.exports = itemRouter