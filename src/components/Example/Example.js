import React, { useState } from "react";
import axios from "axios";
import cutter from "./fetchWiki.js";

function Example(props) {
  console.log(props.word);
  const [data, setData] = useState([]);
  React.useEffect(() => {
    function getExamples(word) {
      axios
        .get(`https://api.leksika.uz/words/en-uz/example?s=${word}`)
        .then(function (response) {
          console.log(cutter(response.data));
          setData(cutter(response.data));
          // return response.data
        })
        .catch(function (error) {
          setData([]);
        });
    }
    getExamples(props.word !== "undefined" ? props.word : "");
  }, [props.word]);
  return data[0] ? (
    <div>
      <b style={{ color: "green" }}>Examples: </b>
      <ul style={{ padding: "10px" }}>
        {data?.map((item, key) => (
          <li key={key} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );
}

export default Example;
