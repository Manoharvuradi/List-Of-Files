import React, { useEffect } from "react";
import styles from "../../styles/quiz.module.css";
import { useState } from "react";
export default function Quiz({ questions }) {
  const [startIndex, setStartIndex] = useState(0);
  // const [result, setResult] = useState();
  const [choose, setChoose] = useState();
  const [selectedOption, setSelectedOption] = useState();
  // console.log(questions.results);
  const shuffle = [];
  const result = [];
  const jumble = () => {
    const getDataFromSource = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    while (shuffle.length < 4) {
      let random = getDataFromSource(0, 3);
      if (shuffle.indexOf(random) === -1) {
        shuffle.push(random);
      }
    }
    const options = questions.results[startIndex].incorrect_answers;
    options.push(questions.results[startIndex].correct_answer);
    console.log(questions.results[startIndex].correct_answer);
    // console.log(options);

    for (let i = 0; i < shuffle.length; i++) {
      result[i] = options[shuffle[i]];
    }
    // console.log(result);
    setChoose(result);
  };
  useEffect(() => {
    jumble();
  }, []);
  console.log(choose);

  const handleNext = () => {
    setStartIndex(startIndex + 1);
    jumble();
  };
  const handlePrev = () => {
    setStartIndex(startIndex - 1);
    jumble();
  };
  const onOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div>
        <p>{questions.results[startIndex].question}</p>
        <input
          type="radio"
          name="quiz"
          id={choose[0]}
          value={choose[0]}
          onChange={onOptionChange}
        />
        <label htmlFor="option_1">{choose[0]}</label>
        <input
          type="radio"
          name="quiz"
          id={choose[1]}
          value={choose[1]}
          onChange={onOptionChange}
        />
        <label htmlFor="option_2">{choose[1]}</label>
        <input
          type="radio"
          name="quiz"
          id={choose[2]}
          value={choose[2]}
          onChange={onOptionChange}
        />
        <label htmlFor="option_3">{choose[2]}</label>
        <input
          type="radio"
          name="quiz"
          id={choose[3]}
          value={choose[3]}
          onChange={onOptionChange}
        />
        <label htmlFor="option_4">{choose[3]}</label>
        <br />
        <button onClick={handlePrev} disabled={startIndex < 1}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex > questions.results.length - 2}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
  );
  const questions = await res.json();
  return {
    props: { questions }, // will be passed to the page component as props
  };
}
