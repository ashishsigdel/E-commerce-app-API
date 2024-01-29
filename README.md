    <h1 align="center">E-Commerce Backend API</h1>
    <h5 align="center">This repository contains the backend API for an e-commerce website built using Node.js, Express, and MongoDB. It provides various endpoints to manage products, users, and orders for the associated front-end application.</h5>
    <br />

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#configuration-and-setup">Configuration and Setup</a></li>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#technologies-used">Technologies used</a></li>
        <li><a href="#author">Author</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="configuration-and-setup">Configuration and Setup</h2>

    <p>In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.</p>
    <ul>
        <li>Open the project in your preferred code editor.</li>
        <li>Go to terminal -> New terminal (If you are using VS code)</li>
     </ul>

    <p>In the terminal</p>

    ```bash
    $ npm install # to install frontend-side dependencies
    $ npm run dev # to start the frontend

    ```

    <p>In the second terminal</p>


    ```
    # .env

    PORT = 5000
    MONGO_URL = "PASTE_HERE"
    JWT_SECRET = "PASTE_HERE"
    MAIL_ID = "YOUR_EMAIL"
    MP = "PASTE_HERE"

    CLOUD_NAME = "PASTE_HERE"
    API_KEY = "PASTE_HERE"
    API_SECRET = "PASTE_HERE"
    ```

    <h2 id="key-features">Key Features</h2>

    <ul>
        <li>Project Setup</li>
        <li>User Authentication and Authorization</li>
        <li>Product Management</li>
        <li>User Interaction and Rating</li>
        <li>Order and Payment Management</li>
        <li>CRUD operations (post create, read, update and delete)</li>
    </ul>

    <br />

    <h2 id="technologies-used">Technologies used</h2>
    <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a> - A runtime environment to help build fast server applications using JS</li>
    <li><a href="https://www.npmjs.com/package/express">Express.js</a> - The server for handling and routing HTTP requests</li>
    <li><a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a> - For data encryption</li>
    <li><a href="https://cloudinary.com/">Cloudinary</a> - For file upload and image storage</li>
    <li><a href="https://www.npmjs.com/package/cookie-parser">cookie-parser</a> - Middleware for handling cookies</li>
    <li><a href="https://www.npmjs.com/package/dotenv">dotenv</a> - Zero Dependency module that loads environment variables</li>
    <li><a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a> - For authentication</li>
    <li><a href="https://mongoosejs.com/">Mongoose</a> - For modeling and mapping MongoDB data to JavaScript</li>
    <li><a href="https://www.npmjs.com/package/morgan">morgan</a> - HTTP request logger middleware</li>
    <li><a href="https://www.npmjs.com/package/multer">multer</a> - Middleware for handling multipart/form-data (file uploads)</li>
    <li><a href="https://nodemailer.com/">Nodemailer</a> - Module for sending emails</li>
    <li><a href="https://www.npmjs.com/package/nodemon">nodemon</a> - Utility for monitoring changes in the development environment</li>
    <li><a href="https://sharp.pixelplumbing.com/">sharp</a> - High-performance image processing library</li>
    <li><a href="https://www.npmjs.com/package/slugify">slugify</a> - Library to convert a string into a slug</li>
    <li><a href="https://www.npmjs.com/package/uniqueid">uniqueid</a> - Library for generating unique IDs</li>
    </ul>


    <h3 id="database">Database</h3>
    <ul>
        <li><a href="https://www.mongodb.com/">MongoDB</a> - It provides a free cloud service to store MongoDB
            collections.</li>
    </ul>

    <h2 id="author">Author</h2>
    <ul>
        <li>Website: <a href="https://ashishsigdel.com.np/">Ashish Sigdel</a></li>
        <li>Github: <a href="https://github.com/ashishsigdel">ashishsigdel</a></li>
        <li>Linkedin: <a href="https://www.linkedin.com/in/ashish-sigdel-39106a268/">Ashish Sigdel</a></li>
        <li>Email: <a href="mailto:a.asis.sigdel01@gmail.com">a.asis.sigdel01@gmail.com</a></li>
    </ul>

    <h2 id="license">License</h2>
    <p>MIT License</p>
    <p>Copyright (c) 2024 - Ashish Sigdel</p>
