const postModel = require("../models/post.model");
const imgaeKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources");



const imagekit = new imgaeKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer)),
    fileName: "image",
    Folders: "cohort-2.0",
  });

  res.send(file);

 
}

module.exports = { createPostController };
