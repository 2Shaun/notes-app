import { Link } from "@remix-run/react";
import { Accordion } from "./Accordian";

export const RecursiveAccordian = ({ files, currentDirectory = "" }) => {
  return files.map((file, i) => {
    if (file.contents.length) {
      return (
        <Accordion key={i} buttonText={file.name}>
          <RecursiveAccordian
            files={file.contents}
            currentDirectory={`${currentDirectory}/${file.name}`}
          />
        </Accordion>
      );
    } else {
      const [fileName, extension] = file.name.split(".");
      return (
        <div>
          <Link to={`${currentDirectory}/${fileName}`}>{fileName}</Link>
        </div>
      );
    }
  });
};
