// ==================================================
// Json File Upload
// ==================================================
const fs = require('fs');



// ==================================================
// express + Uppy
// ==================================================
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: `${__dirname}/uploads/`,
  filename: (req, file, cb) => {
    // const fileName = `${Date.now()}${path.extname(file.originalname)}`;
    const fileName = `hi${path.extname(file.originalname)}`;
    cb(null, fileName);
  }
});

const uploadImage = multer({storage}).single("photo");

app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "public/index.html"));
});

app.post("/image", uploadImage, (req, res) => {
  console.log(req.file);
  if(req.file) return res.json({mes: "good job uploading that image"});

  res.send("Image upload failed");
});


require("dotenv").config();

const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   return res.status(200).json({
//     meg:"working",
//   });
// });

// app.get("/login", (req, res) => {
//   return res.status(200).json({
//     meg:"You are on login route",
//   });
// });

// app.get("/register", (req, res) => {
//   return res.status(200).json({
//     meg:"You are on register route",
//   });
// });

app.get("/upload", (req, res) => {
  return res.status(200).json({
    meg:"upload",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on $(PORT)`);
});




// ==================================================
// Google Vison
// ==================================================
const vision = require('@google-cloud/vision');

const CREDENTIALS = JSON.parse(JSON.stringify({
  "type": "service_account",
  "project_id": "journey-423508",
  "private_key_id": "c38811e250782dc45c40fcb9b24cd74e4e6ebd64",
  "private_key": haha,
  "client_email": "journey@journey-423508.iam.gserviceaccount.com",
  "client_id": "109059036522989406950",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/journey%40journey-423508.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}));

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

// const detectText = async (file_path) => {
//   let [result] = await client.textDetection(file_path);
  
//   // Check if any text was detected
//   if (result.fullTextAnnotation && result.fullTextAnnotation.text) {
//       const newText = '●' + result.fullTextAnnotation.text;

//       // Read the existing text from the JSON file
//       let existingText = '';
//       try {
//           existingText = fs.readFileSync("./public/db.json", "utf-8");
//           existingText = JSON.parse(existingText);
//       } catch (error) {
//           if (error.code === 'ENOENT') {
//               // If the file doesn't exist, start with an empty string
//               existingText = '';
//           } else {
//               throw error;
//           }
//       }

//       // Append the new text to the existing text
//       const updatedText = existingText + newText;

//       // Write the updated text back to the JSON file
//       fs.writeFileSync("./public/db.json", JSON.stringify(updatedText), "utf-8");
//   } else {
//       console.log("No text detected in the image.");
//   }
// };

// const detectText = async (file_path) => {
//     let [result] = await client.textDetection(file_path);
//     const newText = '●' + result.fullTextAnnotation.text;
    
//     // Read the existing text from the JSON file
//     let existingText = '';
//     try {
//         existingText = fs.readFileSync("./public/db.json", "utf-8");
//         existingText = JSON.parse(existingText);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             // If the file doesn't exist, start with an empty string
//             existingText = '';
//         } else {
//             throw error;
//         }
//     }
    
//     // Append the new text to the existing text
//     const updatedText = existingText + newText;
    
//     // Write the updated text back to the JSON file
//     fs.writeFileSync("./public/db.json", JSON.stringify(updatedText), "utf-8");
// };

const detectText = async (file_path) => {
  let [result] = await client.textDetection(file_path);
  
  if (result.fullTextAnnotation && result.fullTextAnnotation.text) {
      console.log(result.fullTextAnnotation.text);
      const text = result.fullTextAnnotation.text;
      fs.writeFileSync("./public/db.json", JSON.stringify(text), "utf-8");
  } else {
      console.log("No text detected in the image.");
  }
};

// const detectText = async (file_path) => {
  
//     let [result] = await client.textDetection(file_path);
//     console.log(result.fullTextAnnotation.text);
//     const text = result.fullTextAnnotation.text;
//     fs.writeFileSync("./public/db.json", JSON.stringify(text), "utf-8");
// };

// detectText('https://www.todayifoundout.com/wp-content/uploads/2014/10/McDonalds.jpg');
detectText('./uploads/hi.jpg');