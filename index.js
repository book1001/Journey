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

const k = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqJgZdSguyhgur\nPW7znLuG9kH/PbkHjiHRD2/AVZMInM6KrRBuyEiUtRcLrcrOmxMLYtKwfkLPTQuW\nOABId3gTVG1dG8WEbhRLUFLTYwzMSVDkcUmzbz88srLZDE0o8FLzcPNr/BsIFCRA\ni25NqntGR5URbsjNxDWUacdE6HQg8m7ZmA8JP7LNKh8IKmXwCYHDo0ywaKA/7FX2\n7bdyk9RlgowGY16a+0q5bit4mdbyxmu4ORzDvCSmepNrYlXVwZ8hw1nbXyWgwHcu\nLuZbeugFq07mj94BDJdL1KH7xyXhqf3Tnw8MzDl0ClLa1xVfxtPA1tHop0CzCeQP\nRtAouKqnAgMBAAECggEABIR17swke1zrumQrKfSjVfX70pcE7pprc22Bfg3HlZb0\nNOJbaVWP98LHFdxLYijj3I2HIoB3raFSCW77MvFZEspPDQXLvLRffZBoYoxirpnT\nt/z6A/WULDxiWzjkY43d5fC9xcQvw4slW0FYcF9yXm9QGeJjGnN3KLWWQNIbIzTB\ncLcccYSRXAuWiF9QVMAjhYfN+g6zzyLhzkfZQ9NBiu4CHxASZIG7pVjoerYhUDDX\nRmPMwkRS0OkKK8GsN8S+p0EXZgca6JHrvQU3ukMnGkI2STmQDkxCn/eFFDMdube0\njGTl1I6HEg4+18jZzLMTiAwi1+8f//+HFJNr+ExQ4QKBgQDnMkOkx/TiKNGAadBd\nTtLb56OFSESirBCWpp+IBiaRdaFGcBITt8BBp5F+zsRciDIk95GkTDDwtV7bJv4w\nRAfB4Ih90q/XWac2uLO1yWLXNmRUwIeg2iOAlCLkxAHlnmSkunbZzvIyECPEArVp\nEic4dgzDsaeoC4TfE4nk+4pwBQKBgQC8Zxn7hf+mxJMXRKCNCLiq6QufHUzpTEDU\n6tbJEk8L4mkP4CWHayguR+xLna4Lb48O9SrVJZUMVJZDoDiZ4Z8Gc0pb3ohTn0Ci\n5SgZsgm9n2o1FPzebE7DtG+sMUSsbNgkHj2nyUZeZzzvpidTNfRRRPQAqzuiMxCh\ngrnlVSgruwKBgEXu/mcp1PlUP4sIdu7CmSXLu7rlUV2jjqEDZd5PffsiCda0r8Mn\nIhC6D1i8UslqqUBlYrjAE028jyTbdqhC69XJhYAJ6wbJJ7t1w2aJtExFN7QrSNtv\nIK4UITnx0GEUuHzbqnfYEYrzNt5js1xFEXgSvWm0o3JBib+wuVV6gTXBAoGAXEMp\nSDGA1sxhM/3ZmfdxZ9EkbdFNftpmzV4LvQAIUcuYo7ui5UQmszNplkYrm1IQfsS1\nKxhye01ZINjvnvwMgn4nJgI+RKUyZBNQpfS4LHJK8p/KjaoAkHpmTa768G2FE3rz\nup0opsZr4vg9PdSoRrw7ubAhTfcv58g6/QHM4E0CgYEA5c2p5A6IR8KZer/lL9aU\n9DJfqBtwM0lkTLCAhPFu2ZgN9BwAODVQBstdVnR0jvarMEU2ZDxY+wTN5hCburIJ\nVrdZqf2RNHcIx687I2PL9Pf/Yj8AzeLqFnA47D3q8XOGQgSQ8fLaY8Z9LayTs2TW\ngSb8kiD0bPmbRjwlfUFMAGM=\n-----END PRIVATE KEY-----\n";

const CREDENTIALS = JSON.parse(JSON.stringify({
  "type": "service_account",
  "project_id": "journey-423508",
  "private_key_id": "c38811e250782dc45c40fcb9b24cd74e4e6ebd64",
  "private_key": k,
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