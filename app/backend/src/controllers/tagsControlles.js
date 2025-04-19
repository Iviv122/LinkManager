export async function listTags(req,res) {
    try {
        const items = await db.collection("tags").find({}).toArray();
        res.json(items);
    } catch (error) {
        console.error("Error fetching data");
        res.status(500).json({ error: "Internal Server Errror" });
    }
}