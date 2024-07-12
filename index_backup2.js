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

    // Check if the text contains "Created with\nTransloadit" and replace it with "Apple"
    // let modifiedText = firstItem.text;
    // const targetText = "with\nTransloadit";
    // if (modifiedText.includes(targetText)) {
    //   modifiedText = modifiedText.replace(targetText, "Apple");
    // }

    // // Remove specific words from the first item's "text" field
    // const wordsToRemove = ["Created with\nTransloadit"];

    // const wordsToRemove = ["Created with\nTransloadit", "Created", "Creat", "with", "Transloadit", "Transtuauit", "Transtult", "Transload", "Transinadit", "Transleadit", "Tranetoadit", "Trans", "Transloa", "QO"];
    let modifiedText = firstItem.text;
    wordsToRemove.forEach(word => {
      modifiedText = modifiedText.replace(new RegExp(word, 'gi'), '');
    });

    // Update the text of the first item
    firstItem.text = modifiedText.trim();

    // Fetch data from obj.json
    const objResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/obj.json');
    const objData = await objResponse.json();

    // ==================================================
    // Json: treeData (Process objData to add tree classes for items with "Tree" in the name)
    // ==================================================
    const treeData = objData
      .filter(item => item.name.includes("Tree"))
      .map(item => {
        return {
          treeClass: randomTree()
        };
      });

    const flowerData = objData
      .filter(item => item.name.includes("Flower"))
      .map(item => {
        return {
          flowerClass: randomFlower()
        };
      });

    const lightData = objData
      .filter(item => item.name.includes("Lamp Post"))
      .map(item => {
        return {
          lightClass: randomLight()
        };
      });

    const lightEtcData = objData
      .filter(item => item.name.includes("Lamp"))
      .map(item => {
        return {
          lightClass: randomLight()
        };
      });

    // Check if objData contains "Tree", "Flower", "Lamp Post", "Lamp", or "text"
    const containsSpecificWords = objData.some(item => 
      item.name.includes("Flower") 
      // item.name.includes("Tree") || 
      // item.name.includes("Flower") || 
      // item.name.includes("Lamp Post") || 
      // item.name.includes("Lamp")
    );

    const containsText = objData.some(item => item.name.includes("Text"));


    // ==================================================
    // Read existing data from db.json
    const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));

    // // Process hiData and combine with objData based on the conditions
    // let processedHiData = [];
    // if (containsSpecificWords) {
    //   // Do not execute processedHiData
    // } else if (containsText) {
    //   processedHiData = hiData.slice(1).filter(item => !isDerivedText(item.text)).map(item => {
    //     return {
    //       sizeClass: randomSize(),
    //       colorClass: randomColor(),
    //       roofClass: randomRoof(),
    //       text: firstItem.text,
    //       textClass: randomText(),
    //       wallClass: randomWall(),
    //     };
    //   });
    // } else {
    //   // Display the div with ID 'failAlert'
    //   document.getElementById('failAlert').style.display = 'block';
    // }
    
    // Process hiData and combine with objData
    const processedHiData = hiData.slice(1).filter(item => !isDerivedText(item.text)).map(item => {
      return {
        sizeClass: randomSize(),
        colorClass: randomColor(),
        roofClass: randomRoof(),
        // text: item.text,
        text: firstItem.text,
        textClass: randomText(),
        wallClass: randomWall(),
        // gardenClass: randomGarden()
      };
    });

    // Combine all processed data
    const combinedData = [...existingData, ...processedHiData, ...treeData, ...flowerData, ...lightData, ...lightEtcData];



    // Write combined data back to db.json
    fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
    console.log('New data has been appended to db.json');
  } catch (error) {
    console.error('Failed to fetch and append data:', error);
  }
}


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


// ==================================================
// Json: Random Class
// ==================================================
function getRandomElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

// ==================================================
// Json: Random Class > House
// ==================================================
function randomSize() {
  const classes = ['size1', 'size2', 'size3'];
  return getRandomElement(classes);
}

function randomColor() {
  const classes = ['color1', 'color2', 'color3'];
  return getRandomElement(classes);
}

function randomRoof() {
  const classes = ['roof1', 'roof2', 'roof3-R', 'roof3-G', 'roof3-B'];
  return getRandomElement(classes);
}

function randomText() {
  const classes = ['text1', 'text1', 'text1'];
  return getRandomElement(classes);
}

function randomWall() {
  const classes = ['wall1', 'wall2', 'wall3'];
  return getRandomElement(classes);
}

// function randomGarden() {
//   const classes = ['garden1', 'garden2', 'garden3'];
//   return getRandomElement(classes);
// }


// ==================================================
// Json: Random Class > Objects
// ==================================================
function randomTree() {
  const classes = ['tree1', 'tree1', 'tree1'];
  return getRandomElement(classes);
}

function randomFlower() {
  const classes = ['flower1', 'flower1', 'flower1'];
  return getRandomElement(classes);
}

function randomLight() {
  const classes = ['light1', 'light1', 'light1'];
  return getRandomElement(classes);
}


app.listen(PORT, () => {
  console.log(`Backend running on $(PORT)`);
});

