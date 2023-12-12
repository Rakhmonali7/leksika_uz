import React, { useEffect, useState } from "react";
import "../styles/InUse.css";
import "./style.css";
import QuizTest from "../Quiz.js";
import { findFile } from "../../../lib/fetchData";
import telegram from "../../../static/telegram.svg";
import insta from "../../../static/insta.svg";
import facebook from "../../../static/facebook.svg";
import twitter from "../../../static/twitter.svg";
import { BsBook } from "react-icons/bs";
import { TbCalendarEvent } from "react-icons/tb";
import AdsComponent from "../../../lib/AdSense";

const GrammarInUse = () => {
  // Get ID from URL
  var query = window.location.href;
  var parts = query.split("/");
  var id = parts[parts.length - 1];

  return (
    <div className="grammarItem">
      <div className="grammarContainer">
        <Unit id={id} />
        <div className="quiz">
          <QuizTest quizID={id} />
        </div>
      </div>
    </div>
  );
};

function Unit(props) {
  // const id = props.id
  var query = window.location.href;
  var parts = query.split("/");
  var id = parts[parts.length - 1];
  const [html, setHtml] = useState("");
  useEffect(() => {
    async function getfile() {
      const data = await findFile(id);
      setHtml(await data.body);
    }
    getfile();
  }, [id]);

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
export default GrammarInUse;
