import express from "express";
import {sayWelcome} from "../controllers/WelcomeController";
import { getToDoCollection, getToDoDocument } from "../controllers/ToDoController";

const router = express.Router();

router.get("/", sayWelcome);

router.get("/to-do", getToDoCollection);
router.get("/to-do/:id", getToDoDocument);

export default {
    router
};