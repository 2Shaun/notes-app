import { Link } from "@remix-run/react";
import { Accordion } from "./Accordian";

export const RecursiveAccordian = ({
  files,
  currentDirectory = "",
  currentMargin = 0,
}) => {
  const style = {
    marginLeft: `${currentMargin}px`,
  };
  return files.map((file, i) => {
    if (file.contents.length) {
      return (
        <Accordion key={i} buttonText={file.name} style={style}>
          <RecursiveAccordian
            files={file.contents}
            currentDirectory={`${currentDirectory}/${file.name}`}
            currentMargin={currentMargin + 5}
          />
        </Accordion>
      );
    } else {
      const [fileName, extension] = file.name.split(".");
      return (
        <div style={style}>
          <Link to={`${currentDirectory}/${fileName}`}>{fileName}</Link>
        </div>
      );
    }
  });
};
