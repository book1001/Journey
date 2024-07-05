// ==================================================
// Json File Upload
// ==================================================
const fs = require('fs');
// const fetch = require('node-fetch');


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


// ==================================================
// Json File Upload 2
// ==================================================
app.use(express.json());

// Function to fetch new data and append to db.json
async function fetchAndAppendData() {
  try {
    const hiResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
    const hiData = await hiResponse.json();

    // Extract only the first item
    const firstItem = hiData[0];

    // Remove specific words from the first item's "text" field
    const wordsToRemove = ["Created", "with", "Transloadit", "Transtuauit", "Transtult", "Transload", "Transinadit"];
    let modifiedText = firstItem.text;
    wordsToRemove.forEach(word => {
      modifiedText = modifiedText.replace(new RegExp(word, 'gi'), '');
    });

    // Update the text of the first item
    firstItem.text = modifiedText.trim();

    // Fetch data from obj.json
    const objResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/obj.json');
    const objData = await objResponse.json();

    // Process objData to add tree classes for items with "Tree" in the name
    const processedTreeData = objData
      .filter(item => item.name.includes("Tree"))
      .map(item => {
        return {
          treeClass: randomTree()
        };
      });

    // Read existing data from db.json
    const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));

    // Process hiData and combine with processedTreeData
    const processedHiData = hiData.slice(1).filter(item => !isDerivedText(item.text)).map(item => {
      return {
        sizeClass: randomSize(),
        colorClass: randomColor(),
        roofClass: randomRoof(),
        // text: item.text,
        text: firstItem.text,
        textClass: randomText(),
        wallClass: randomWall(),
        gardenRClass: randomGardenR()
      };
    });

    // Combine all processed data
    const combinedData = [...existingData, ...processedHiData, ...processedTreeData];



    // Write combined data back to db.json
    fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
    console.log('New data has been appended to db.json');
  } catch (error) {
    console.error('Failed to fetch and append data:', error);
  }
}

// Function to fetch and process tree data from obj.json
// async function fetchAndProcessTreeData() {
//   try {
//     const response = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/obj.json');
//     const treeData = await response.json();

//     // Process tree data to add tree classes
//     const processedTreeData = treeData
//       .filter(item => item.name.includes("Tree"))
//       .map(item => {
//         return {
//           treeClass: randomTree()
//         };
//       });

//     // Read existing data from db.json
//     const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));

//     // Append tree data to existing data
//     const combinedData = [...existingData, ...processedTreeData];

//     // Write combined data back to db.json
//     fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
//     console.log('Tree data has been processed and appended to db.json');
//   } catch (error) {
//     console.error('Failed to fetch and process tree data:', error);
//   }
// }

// Endpoint to fetch new data and append to db.json
app.get("/fetch-and-append-data", async (req, res) => {
  await fetchAndAppendData();
  // await fetchAndProcessTreeData(); 
  res.send('New data has been fetched and appended to db.json');
});

// Endpoint to get JSON data (optional, for testing)
app.get("/data", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));
    res.json(data);
  } catch (error) {
    console.error('Failed to read data:', error);
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// Helper function to check if text contains derived words
function isDerivedText(text) {
  const derivedTexts = ["Created", "with", "Transloadit", "Transtuauit"];
  return derivedTexts.some(word => text.includes(word));
}

// Helper functions to generate random classes
function getRandomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

function randomSize() {
  const classes = ['size1', 'size2', 'size3'];
  return getRandomElement(classes);
}

function randomColor() {
  const classes = ['color1', 'color2', 'color3'];
  return getRandomElement(classes);
}

function randomRoof() {
  const classes = ['roof1', 'roof2', 'roof3'];
  return getRandomElement(classes);
}

function randomText() {
  const classes = ['text1', 'text2', 'text3'];
  return getRandomElement(classes);
}

function randomWall() {
  const classes = ['wall1', 'wall2', 'wall3'];
  return getRandomElement(classes);
}

function randomGardenR() {
  const classes = ['gardenR1', 'gardenR2', 'gardenR3'];
  return getRandomElement(classes);
}

function randomTree() {
  const classes = ['tree1', 'tree2', 'tree3'];
  return getRandomElement(classes);
}


// // Endpoint to get JSON data
// app.get("/data", async (req, res) => {
//   try {
//     const response = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// // app.get("/data", (req, res) => {
// //   fs.readFile(path.join(__dirname, 'public', 'db_test.json'), 'utf8', (err, data) => {
// //     if (err) {
// //       console.error(err);
// //       return res.status(500).json({ error: "Failed to read data" });
// //     }
// //     res.json(JSON.parse(data));
// //   });
// // });

// // Endpoint to process data and save to db.json
// app.get("/process-data", async (req, res) => {
//   try {
//     const response = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
//     const data = await response.json();

//     const processedData = data.slice(1).filter(item => {
//       return !isDerivedText(item.text);
//     }).map(item => {
//       return {
//         roofClass: randomRoof(),
//         text: item.text,
//         textClass: randomText(),
//         wallClass: randomWall()
//       };
//     });

//     fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(processedData, null, 2), 'utf-8');
//     console.log('Data has been saved to db.json');
//     res.send('Data has been processed and saved to db.json');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to process and save data');
//   }
// });

// function isDerivedText(text) {
//   const derivedTexts = ["Created", "with", "Transloadit"];
//   return derivedTexts.some(word => text.includes(word));
// }

// function getRandomElement(elements) {
//   return elements[Math.floor(Math.random() * elements.length)];
// }

// function randomRoof() {
//   const classes = ['roof1', 'roof2', 'roof3'];
//   return getRandomElement(classes);
// }

// function randomText() {
//   const classes = ['text1', 'text2', 'text3'];
//   return getRandomElement(classes);
// }

// function randomWall() {
//   const classes = ['wall1', 'wall2', 'wall3'];
//   return getRandomElement(classes);
// }

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

// const detectText = async (file_path) => {
//   let [result] = await client.textDetection(file_path);
  
//   if (result.fullTextAnnotation && result.fullTextAnnotation.text) {
//       console.log(result.fullTextAnnotation.text);
//       const text = result.fullTextAnnotation.text;
//       fs.writeFileSync("./public/db.json", JSON.stringify(text), "utf-8");
//   } else {
//       console.log("No text detected in the image.");
//   }
// };

// const detectText = async (file_path) => {
  
//     let [result] = await client.textDetection(file_path);
//     console.log(result.fullTextAnnotation.text);
//     const text = result.fullTextAnnotation.text;
//     fs.writeFileSync("./public/db.json", JSON.stringify(text), "utf-8");
// };

// detectText('https://www.todayifoundout.com/wp-content/uploads/2014/10/McDonalds.jpg');
// detectText('./uploads/hi.jpg');
// detectText('https://journey-spaces.nyc3.digitaloceanspaces.com/hello.png');

