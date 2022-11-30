import fs from "fs";
import mime from "mime-types";

export default class FileDigester {
  static readDirectory = (dir) => {
    let files = [];
    fs.readdirSync(dir).forEach((file) => {
      const fileObj = {
        name: file,
        type: mime.lookup(file),
        path: dir+"/"+file,
      };

      files = [...files, fileObj];
    });
    return files;
  };
}
