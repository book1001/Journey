import { Uppy, Dashboard, Webcam, Transloadit } from "https://releases.transloadit.com/uppy/v3.25.2/uppy.min.mjs"
    
// const Uppy = require("@uppy/core");
// const XHRUpload = require("@uppy/xhr-upload");
// const Dashboard = require("@uppy/dashboard");
// const Webcam = require("@uppy/webcam");

const uppy = new Uppy()

  // uppy.addFile({
  //   name: 'my-file.jpg', // file name
  //   type: 'image/jpeg', // file type
  //   data: blob, // file blob
  // });

  uppy.use(Dashboard, { 
    inline: true, 
    target: '#uppy',
    // target: 'body' 
  });
  uppy.use(Webcam, { 
    target: Uppy.Dashboard, 
    modes: 'picture',
    mirror: false,
    mobileNativeCamera: true,
    videoConstraints: {
        facingMode: 'environment'
     }
  });
  // uppy.use(XHRUpload, { 
  //   // endpoint: 'https://journey-qxo4f.ondigitalocean.app/upload',
  //   endpoint: 'http://localhost:8000/image',
  //   fieldName: 'photo',
  //   formData: true
  // });

  uppy.use(Transloadit, {
		assemblyOptions: {
			params: {
				auth: { key: '2568b8e69bc679351eeb9ae93694482e' },
				template_id: 'cc8128449fb849729c3620ceefb5f3e8',
			},
		},
	});

  // Optionally listen to events
  uppy.on('transloadit:assembly-created', (assembly, fileIDs) => {});
  uppy.on('transloadit:upload', (file, assembly) => {});
  uppy.on('transloadit:assembly-executing', (assembly) => {});
  uppy.on('transloadit:result', (stepName, result, assembly) => {});
  uppy.on('transloadit:complete', (assembly) => {});

  // uppy.use(AwsS3, {
	// 	shouldUseMultipart: (file) => file.size > 100 * 2 ** 20,
	// 	companionUrl: 'https://companion.uppy.io',
  //   limit: 1
	// });

  let lastFileID = null;

  // 파일이 추가될 때 중복 추가 방지
  uppy.on('file-added', (file) => {
    if (lastFileID && file.id === lastFileID) {
      uppy.removeFile(file.id);
      console.log('중복된 파일 제거:', file);
    } else {
      lastFileID = file.id;
      console.log('새로운 파일 추가:', file);
    }
  });
  
  uppy.on('complete', async (result) => {
    const successfulUploads = result.successful;
    if (successfulUploads.length > 0) {
      setTimeout(async () => {
        try {
          const response = await fetch('/fetch-and-append-data');
          const message = await response.text();
          console.log(message);
          document.getElementById('failAlert').style.background = 'blue';
          // window.location.reload();
        } catch (error) {
          console.error('Failed to fetch and append data:', error);
          // Handle error scenario
        }
      }, 1000); // 0.5초를 밀리초 단위로 지정
    }
  });

  // uppy.on('complete', async (result) => {
  //   const successfulUploads = result.successful;
  //   if (successfulUploads.length > 0) {
  //     try {
  //       const response = await fetch('/fetch-and-append-data');
  //       const message = await response.text();
  //       console.log(message);
  //     } catch (error) {
  //       console.error('Failed to fetch and append data:', error);
  //       // Handle error scenario
  //     }
  //   }
  // });
  
  

  // uppy.on('complete', (res) => {
  //   console.log(res.successful);
  // });

  

