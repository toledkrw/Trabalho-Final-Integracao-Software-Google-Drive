import Drive from "./Google/Drive.js";
import FileDigester from "./FileDigester/FileDigester.js";

const filesToUpload = FileDigester.readDirectory("src/input");

// filesToUpload.forEach((file) => {
//     Drive.uploadFile(file);
// })

const folder = await Drive.createFolder("Trabalho de Integração de Software");

filesToUpload.forEach((file) => {
  Drive.uploadFileToFolder(file, folder);
});

// Drive.deleteFile("15j5IACiBwPNm0faW3cAj6G71NfNw5Bjf")
