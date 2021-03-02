//This file is not necessary because I uploaded the API onto Pinata using their browser.
//This code in other cases could be used to upload image onto Pinata
//Hash on spcMetadata.JSON is the pinata hash

//const pinataApiKey = "c31c07df81707dd04801";
//const pinataSecretApiKey = "ffd8044697a93ff191bcba251244b7dcd89ec2903a6504e5af3e99ca61e2bd44";
//const axios = require("axios");
//const fs = require("fs");
//const FormData = require("form-data");

//const pinFileToIPFS = async () => {

  //const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;//= 
  
  //let data = new FormData();

 // data.append("file", fs.createReadStream("./pathtoyourfile.png"));

  //const res = await axios.post(url, data, {
  //  maxContentLength: "Infinity", 
   // headers: {
    //  "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
   //   pinata_api_key: pinataApiKey, 
  //    pinata_secret_api_key: pinataSecretApiKey,
 //   },
//  });
//  console.log(res.data);
//};
//pinFileToIPFS();