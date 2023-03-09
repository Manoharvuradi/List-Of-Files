import React from "react";

function about() {
  const getDataFromSource = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let shuffle = [];
  while (shuffle.length < 4) {
    let random = getDataFromSource(0, 3);
    if (shuffle.indexOf(random) === -1) {
      shuffle.push(random);
    }
  }
  let selectedOption = "vampire";
  let correct = "damon";
  let str = ["salvatore", "vampire", "stefan"];
  str.push(correct);

  let result = [];

  for (let i = 0; i < shuffle.length; i++) {
    result[i] = str[shuffle[i]];
  }

  if (correct === selectedOption) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  console.log(result);
  return <div>about</div>;
}

export default about;
