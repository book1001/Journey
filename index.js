// ==================================================
// Json File Upload
// ==================================================
const fs = require('fs');
// const fetch = require('node-fetch');


// ==================================================
// socket.io
// ==================================================



// ==================================================
// express + Uppy
// ==================================================
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const multer = require("multer");

// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');
// const server = createServer(app);
// // const io = new Server(server);

// const io = new Server({ /* options */ });


// const { createServer } = require("http");
// const { Server } = require("socket.io");
// const httpServer = createServer();
// const io = new Server(httpServer, { /* options */ });


// var http = require("http").createServer(app);
// var io = require("socket.io")(http);

// const server = createServer(app);
// const io = new Server(server);


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

// app.get("/rooms/:filename", (req, res) => {
//   const filePath = path.join(__dirname, `/public/rooms/${req.params.filename}.html`);
//   res.sendFile(filePath);
// });

// app.get("/color2_roof3-B_wall2_size2", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/house/color2_roof3-B_wall2_size2.html"));
// });


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
// Socket
// ==================================================


// // 가능한 조합들 생성
// const colors = ["color1", "color2", "color3"];
// const roofs = ["roof1", "roof2", "roof3-R", "roof3-G", "roof3-B"];
// const walls = ["wall1", "wall2", "wall3"];
// const sizes = ["size1", "size2", "size3"];
// let fileNames = [];

// // 파일 이름 조합 생성
// colors.forEach(color => {
//   roofs.forEach(roof => {
//     walls.forEach(wall => {
//       sizes.forEach(size => {
//         fileNames.push(`${color}_${roof}_${wall}_${size}`);
//       });
//     });
//   });
// });

// // 각 조합에 대한 초기 데이터 설정 및 파일 로드
// let textDataMap = {};
// fileNames.forEach(fileName => {
//   const dataFilePath = path.join(__dirname, "data", `${fileName}.json`);
  
//   if (fs.existsSync(dataFilePath)) {
//     textDataMap[fileName] = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
//   } else {
//     console.log(dataFilePath + " is not exist");
//     textDataMap[fileName] = {};
//     for (let i = 1; i <= 4200; i++) {
//       textDataMap[fileName][`input${i}`] = "";
//     }
//     fs.writeFileSync(dataFilePath, JSON.stringify(textDataMap[fileName], null, 2), "utf8");
//   }
// });

// // get Rooms
// app.get("/rooms/:filename", (req, res) => {
//   const filePath = path.join(__dirname, `/public/rooms/${req.params.filename}.html`);
//   res.sendFile(filePath);
// });

// // get Json
// app.get("/data/:filename", (req, res) => {
//   const filePath = path.join(__dirname, `/data/${req.params.filename}.json`);
//   res.sendFile(filePath);
// });


// // 클라이언트 접속 처리
// io.on("connection", (socket) => {
//   // 모든 파일의 데이터를 클라이언트로 전송
//   fileNames.forEach(fileName => {
//     socket.emit(`update_data_${fileName}`, textDataMap[fileName]);
//   });

//   // 데이터 업데이트 및 전송 처리
//   fileNames.forEach(fileName => {
//     const handleDataUpdates = (dataType) => {
//       socket.on(`new_data_${fileName}`, (data) => {
//         textDataMap[fileName][data.id] = data.value;
//         io.emit(`update_data_${fileName}`, textDataMap[fileName]);

//         const dataFilePath = path.join(__dirname, "data", `${fileName}.json`);
//         fs.writeFile(dataFilePath, JSON.stringify(textDataMap[fileName], null, 2), (err) => {
//           if (err) {
//             console.error(`Error writing file ${dataFilePath}:`, err);
//           }
//         });
//       });

//       socket.on(`delete_data_${fileName}`, (data) => {
//         textDataMap[fileName][data.id] = ''; // 텍스트 삭제
//         io.emit(`update_data_${fileName}`, textDataMap[fileName]);

//         const dataFilePath = path.join(__dirname, "data", `${fileName}.json`);
//         fs.writeFile(dataFilePath, JSON.stringify(textDataMap[fileName], null, 2), (err) => {
//           if (err) {
//             console.error(`Error writing file ${dataFilePath}:`, err);
//           }
//         });
//       });

//       socket.on(`focus_change_${fileName}`, (data) => {
//         io.emit(`focus_change_${fileName}`, data);
//       });
//     };

//     handleDataUpdates(fileName);
//   });
// });


// ==================================================
// Json File Upload 2
// ==================================================
app.use(express.json());

var existingSize = 0;

// Function to fetch new data and append to db.json
async function fetchAndAppendData() {
  try {
    const objResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/obj.json');
    const objData = await objResponse.json();

    const hiResponse = await fetch('https://journey-spaces.nyc3.digitaloceanspaces.com/hi.json');
    const hiData = await hiResponse.json();
    const firstItem = hiData[0];

    // Check if the text contains "Created with\nTransloadit" and replace it with "~"
    let modifiedText = firstItem.text.replace("\s", " ");
    
    const targetTexts = ["Created", "with", "ste", "QO", "00", "Q Transloadit", "0 Transloadit", "Q Tran loadit", "0 Tran loadit", "QTransloadit", "0Transloadit", "Transloadit", "Transload", "Tran loadit", "Tran load"];
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
    // const lightEtcData = processData(objData, ["Lamp"], randomLight, 'lightClass');
    // const theaterTvData = processData(objData, ["TV"], randomTheater, 'theaterClass');
    // const theaterScreenData = processData(objData, ["Screen"], randomTheater, 'theaterClass');




    // ==================================================
    // Json: objData > Detect Text > processedHiData
    // ==================================================
    const containsObj = objData.some(item => 
      item.name.includes("Tree") || 
      item.name.includes("Flower") || 
      item.name.includes("Lamp Post") || 
      item.name.includes("Lamp") || 
      item.name.includes("TV") || 
      item.name.includes("Screen")
    );

    // Process hiData and combine with objData only if objData contains "Text"
    let processedHiData = [];
    if (!containsObj) {
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


    // ==================================================
    // Json: Combine all processed data
    // ==================================================

    // Read existing data from db.json
    const existingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));
    existingSize = existingData.length;

    const combinedData = [
      ...existingData, 
      ...processedHiData, 
      ...treeData, 
      ...flowerData,
      ...lightData,
      ...lightEtcData,
      // ...theaterTvData,
      // ...theaterScreenData
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

    const newData = [      
      ...processedHiData, 
      ...treeData, 
      ...flowerData,
      ...lightData,
      ...lightEtcData,
      // ...theaterTvData,
      // ...theaterScreenData
    ];
    console.log("New data:");
    console.log(newData);
    fs.writeFileSync(path.join(__dirname, 'public', 'db.json'), JSON.stringify(combinedData, null, 2), 'utf-8');
    console.log('New data has been appended to db.json');
  } catch (error) {
    console.error('Failed to fetch and append data:', error);
  }
}


// Endpoint to fetch new data and append to db.json
app.get("/fetch-and-append-data", async (req, res) => {
  await fetchAndAppendData();
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'db.json')));

  let array = [];
  const size = data.length - existingSize
  for(let i=0; i<size; i++) {
    const newData = data[data.length - 1 - i];
    array.push(newData);
  }

  res.send(array);
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

function randomTheater() {
  const classes = ['theater1', 'theater1', 'theater1'];
  return getRandomElement(classes);
}

app.listen(PORT, () => {
  console.log(`Backend running on $(PORT)`);
});

