import fs from "fs";
import drive from "./DriveConfig.js";

export default class Drive {
  static uploadFile = async (file) => {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file.name,
          mimeType: file.type,
        },
        media: {
          mimeType: file.type,
          body: fs.createReadStream(file.path),
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static uploadFileToFolder = async (file, folder) => {
    try {
      const response = await drive.files.create({
        resource: {
          name: file.name,
          parents: [folder.id]
        },
        media: {
          mimeType: file.type,
          body: fs.createReadStream(file.path),
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  static createFolder = async (folderName) => {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: folderName,
          mimeType: "application/vnd.google-apps.folder",
        },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static deleteFile = async (fileId) => {
    try {
      const response = await drive.files.delete({
        fileId: fileId,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // static getFileId = async (fileName) => {
  //   try {
  //     const response = await drive.files.list({
  //       q: `name='${fileName}'`,
  //       fields: "files(id)",
  //     });

  //     return response.data.files[0].id;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
}