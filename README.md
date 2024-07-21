# img-to-mongodb

This repository demonstrates how to upload images using Node.js and save them to a MongoDB database. The project includes features such as image compression and lazy loading for efficient image handling and display.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)

## Installation

To get started, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/atharva-narkhede/img-to-mongodb.git
cd img-to-mongodb
npm install
```

Make sure you have MongoDB installed and running on your local machine. You can download MongoDB from [here](https://www.mongodb.com/try/download/community).

## Usage

1. **Start MongoDB**: Ensure MongoDB is running on your local machine. You can start MongoDB using the following command:

    ```bash
    mongod
    ```

2. **Run the server**: Start the Node.js server using:

    ```bash
    node server.js
    ```

3. **Access the application**: Open your browser and navigate to `http://localhost:3000` to access the image upload form.

## Features

### 1. Image Upload

Users can upload images through a simple HTML form. The uploaded images are processed and stored directly in MongoDB.

### 2. Image Compression

Uploaded images are compressed using the `sharp` library before being saved to MongoDB. This reduces the storage space required and improves load times.

### 3. Lazy Loading

Images are loaded lazily, meaning they are only fetched and displayed when they enter the viewport. This improves initial load times and provides a smoother user experience.

## Project Structure

```
img-to-mongodb/
├── node_modules/
├── public/
│   ├── styles/
│   │   └── style.css
│   ├── index.html
│   └── view-images.html
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

### server.js

The main server file handles image uploads, compression, and database storage.

### public/index.html

The HTML form for uploading images.

### public/view-images.html

The HTML page for viewing uploaded images.

### public/styles/style.css

The CSS file for styling the HTML pages.
