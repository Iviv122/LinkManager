import express from "express";
import { getLink, listLinks, removeLink, updateLink, uploadLink } from "../controllers/listController.js";

const router = express.Router()

router.get("/",listLinks);

router.post("/",uploadLink);

router.get("/:name",getLink);

router.post("/:id",updateLink);

router.delete("/:id",removeLink);

export default router;