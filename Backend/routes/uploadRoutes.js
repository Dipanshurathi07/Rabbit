const express = require("express");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({ message: "File not found" });
    }

    const uploadToCloudinary = (fileBuffer) => {
      return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        streamifier
          .createReadStream(fileBuffer)
          .pipe(stream);

      });
    };

    const result = await uploadToCloudinary(req.file.buffer);

    res.json({
      imageUrl: result.secure_url
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
