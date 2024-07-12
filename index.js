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

// app.get("/upload", (req, res) => {
//   return res.status(200).json({
//     meg:"upload",
//   });
// });


// ==================================================
// Json File Upload 2
// ==================================================
app.use(express.json());

// Function to fetch new data and append to db.json
async function fetchAndAppendData() {
  try {
    const objResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/obj.json');
    const objData = await objResponse.json();

    const hiResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
    const hiData = await hiResponse.json();
    const firstItem = hiData[0];

    // Check if the text contains "Created with\nTransloadit" and replace it with "~"
    let modifiedText = firstItem.text;
    const targetTexts = ["Created with\nTransloadit", "\nCreated with\nTransloadit", "Created with\nQO Transloadit", "Created with\nQTransloadit", "Created", "with", "Transloadit"];
    targetTexts.forEach(target => {
      if (modifiedText.includes(target)) {
        modifiedText = modifiedText.replace(target, "");
      }
    });

    firstItem.text = modifiedText.trim();



    // ==================================================
    // Json: objData > Detect Objects 
    // ==================================================
    // Function to check if objData contains specific keywords and create corresponding data
    function processData(objData, keywords, randomFunction, className) {
      const containsKeyword = objData.some(item => 
        keywords.some(keyword => item.name.includes(keyword))
      );
      
      return containsKeyword ? objData.filter(item => 
        keywords.some(keyword => item.name.includes(keyword))
      ).map(item => {
        const dataObject = {};
        dataObject[className] = randomFunction();
        return dataObject;
      }) : [];
    }

    const treeData = processData(objData, ["Tree"], randomTree, 'treeClass');
    const flowerData = processData(objData, ["Flower"], randomFlower, 'flowerClass');
    const lightData = processData(objData, ["Lamp Post"], randomLight, 'lightClass');
    const lightEtcData = processData(objData, ["Lamp"], randomLight, 'lightClass');




    // ==================================================
    // Json: objData > Detect Text > processedHiData
    // ==================================================
    const containsText = objData.some(item => 
      item.name.includes("Text") || 
      item.name.includes("Texting") || 
      item.name.includes("Sign")
    );

    // Process hiData and combine with objData only if objData contains "Text"
    let processedHiData = [];
    if (containsText) {
      processedHiData = hiData.slice(0, 1).map(item => {
        return {
          sizeClass: randomSize(),
          colorClass: randomColor(),
          roofClass: randomRoof(),
          text: firstItem.text,
          // text: item.text,
          textClass: randomText(),
          wallClass: randomWall()
          // gardenClass: randomGarden()
        };
      });
    }

    // const processedHiData = hiData.slice(1).map(item => {
    //   return {
    //     sizeClass: randomSize(),
    //     colorClass: randomColor(),
    //     roofClass: randomRoof(),
    //     // text: item.text,
    //     text: firstItem.text,
    //     textClass: randomText(),
    //     wallClass: randomWall()
    //     // gardenClass: randomGarden()
    //   };
    // });




    // ==================================================
    // Json: Combine all processed data
    // ==================================================

    // Read existing data from db.json
    const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));

    const combinedData = [
      ...existingData, 
      ...processedHiData, 
      ...treeData, 
      ...flowerData,
      ...lightData,
      ...lightEtcData
    ];


    // ==================================================
    // Json: Check if all keywords are absent in objData and show failAlert if true
    // ==================================================
    // if (!containsText && !treeData.length && !flowerData.length && !lightData.length && !lightEtcData.length) {
    //   // Display failAlert
    //   document.getElementById('failAlert').style.background = 'blue';
    // }

    // const shouldDisplayFailAlert = !containsText && !treeData.length && !flowerData.length && !lightData.length && !lightEtcData.length;

    // const shouldDisplayFailAlert = !treeData.length && !flowerData.length && !lightData.length && !lightEtcData.length;

    // if (shouldDisplayFailAlert) {
    //   document.getElementById('failAlert').style.background = 'blue';
    // }
        


    // ==================================================
    // Json: Write combined data back to db.json
    // ==================================================
    // Write combined data back to db.json only if it's not already written
  //   const currentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));
  //   if (JSON.stringify(currentData) !== JSON.stringify(combinedData)) {
  //     fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
  //     console.log('New data has been appended to db.json');
  //   } else {
  //     console.log('No new data appended to db.json as it is identical.');
  //   }
  // } catch (error) {
  //   console.error('Failed to fetch and append data:', error);
  // }

    fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
    console.log("processedHiData: " + processedHiData.length);
    console.log("treeData: " + treeData.length);
    console.log("flowerData: " + flowerData.length);
    console.log("lightData: " + lightData.length);
    console.log("lightEtcData: " + lightEtcData.length);
    console.log('New data has been appended to db.json');
  } catch (error) {
    console.error('Failed to fetch and append data:', error);
  }
}


// Endpoint to fetch new data and append to db.json
app.get("/fetch-and-append-data", async (req, res) => {
  await fetchAndAppendData();
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

