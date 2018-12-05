import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import FileList from "./Components/FileList";
import "./styles.css";

const testFiles = [
  {
    id: 1,
    name: "src",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 2,
    name: "tests",
    type: "folder",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Initial commit"
    }
  },
  {
    id: 3,
    name: "README.txt",
    type: "file",
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
      message: "Added a readme"
    }
  }
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.getElementById("root")
);
