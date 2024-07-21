const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const sharp = require('sharp');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageUpload', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema for storing images
const imageSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String }
});

// Create a model for the image schema
const Image = mongoose.model('Image', imageSchema);

// Set up multer for file storage in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static('public'));

// Endpoint to handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const buffer = await sharp(req.file.buffer)
            .resize({ width: 800 }) // Resize image to a width of 800px
            .jpeg({ quality: 80 })  // Compress image to 80% quality
            .toBuffer();

        const newImage = new Image();
        newImage.img.data = buffer;
        newImage.img.contentType = req.file.mimetype;
        await newImage.save();
        res.send('Image uploaded and saved successfully!');
    } catch (err) {
        res.status(500).send('Error uploading image.');
    }
});

// Endpoint to fetch all images
app.get('/images', async (req, res) => {
    try {
        const images = await Image.find({});
        res.json(images);
    } catch (err) {
        res.status(500).send('Error fetching images.');
    }
});

// Start the server
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
