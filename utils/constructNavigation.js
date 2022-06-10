const fs = require("fs");

const recursiveReaddir = async (path) => {
  const fsPromises = fs.promises;
  const files = await fsPromises.readdir(path, { withFileTypes: true });
  return await Promise.all(
    files.map(async (file) => {
      if (file.isDirectory()) {
        return {
          name: file.name,
          contents: await recursiveReaddir(`${path}/${file.name}`),
        };
      } else {
        return {
          name: file.name,
          contents: [],
        };
      }
    })
  );
};

recursiveReaddir("../app/routes").then((data) => {
  fs.writeFileSync("../app/data.json", JSON.stringify(data, null, 2), "utf-8");
});
