import mongoose from "mongoose"

export const test = (req, res) => {
    res.json({
        message: "Hello world"
    })
}