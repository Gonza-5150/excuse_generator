/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["El", "Un"];
  let subject = [
    "cerdo con rabia",
    "taxista ebrio",
    "gracioso",
    "pajaro furioso",
    "robot poseido"
  ];
  let action = ["tiro mi", "se comió mi", "escupió mi", "robó mi"];
  let posession = ["trabajo práctico", "dedo del pie", "auto", "zapato"];
  let where = ["en mi casa", "en la calle", "camino hacia acá"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posessionIndex = Math.floor(Math.random() * posession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    posession[posessionIndex] +
    " " +
    where[whereIndex]
  );
};
