import React from "react";
import PropTypes from "prop-types";

import FileIcon from "./FileIcon";

function FileName({ file }) {
  return (
    <React.Fragment>
      <FileIcon file={file} />
      <td className="file-name"> {file.name} </td>
    </React.Fragment>
  );
}
FileName.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileName;
