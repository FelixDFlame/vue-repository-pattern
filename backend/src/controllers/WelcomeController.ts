import express from "express";

export const sayWelcome = (_: express.Request, res: express.Response) => {
    res.send("Welcome to Felix To Do Apps")
}
