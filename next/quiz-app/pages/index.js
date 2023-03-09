import styles from "../styles/Home.module.css";
export default function Home({ questions }) {
  console.log(questions.results[0].correct_answer);
  console.log(questions.results);
  return (
    <div className={styles.container}>
      <ul>
        {questions.results.map((result, index) => (
          <li key={index}>
            <p>{result.question.replace(/\xCC/g, "")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  );
  const questions = await response.json();

  return {
    props: {
      questions,
    },
  };
}
