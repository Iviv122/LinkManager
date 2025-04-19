import LinkDB from "../database/LinkManagerdb.js";
import { ObjectId } from "mongodb";

export async function listLinks(req, res) {
    try {
        const items = await LinkDB.collection("links").find({}).toArray();
        res.json(items);
    } catch (error) {
        console.error("Error fetching data - listLinks");
        console.log(error);
        res.status(500).json({ error: "Internal Server Errror" });
    }
}
export async function getLink(req, res) {
    try {
        const items = await LinkDB.collection("links").find({}).toArray();
        res.json(items);
    } catch (error) {
        console.error("Error fetching data - getLinks");
        res.status(500).json({ error: "Internal Server Errror" });
    }
}

export async function uploadLink(req, res) {
    try {
        const {name, url, tag } = req.body;

        if (!name || !url ) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const ntag  = (tag === null) ? "" : tag;
        const respond = await LinkDB.collection("links").insertOne(
            {name : name, url : url, tag : ntag}
        );

        res.send({
            message: "Successfully updated",
        });
    } catch (error) {
        console.error("Error updating link:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function removeLink(req, res) {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await LinkDB.collection("links").deleteOne({ _id: new ObjectId(_id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Link not found" });
        }

        res.send({ message: "Successfully deleted" });
    } catch (error) {
        console.error("Error deleting link:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export async function updateLink(req, res) {
    try {
        const { _id, name, url, tag } = req.body;

        if (!_id || !name || !url || !tag) {
            console.log("no match")
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await LinkDB.collection("links").updateOne(
            { _id: new ObjectId(_id) },
            { $set: { name, url, tag } }
        );

        if (result.matchedCount === 0) {
            console.log("no match")
            return res.status(404).json({ error: "Link not found" });
        }

        res.send({
            message: "Successfully updated",
        });
    } catch (error) {
        console.error("Error updating link:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
