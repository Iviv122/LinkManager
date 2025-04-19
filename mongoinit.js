db = db.getSiblingDB("LinkManager");

db.createCollection("links");

db.links.insertOne({name: "Testlink",url: "DummyUrl"})