import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter(answer => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswers - correctAnswersShare;

  return <div id="summary">
    <img src={quizCompleteImg} alt="Trophy icon" />
    <h2>Quiz Completed!</h2>

    <div id="summary-stats">
      <p>
        <span class="number">{skippedAnswersShare}%</span>
        <span class="text">skipped</span>
      </p>

      <p>
        <span class="number">{correctAnswersShare}%</span>
        <span class="text">answered correctly</span>
      </p>

      <p>
        <span class="number">{wrongAnswersShare}%</span>
        <span class="text">answer incorrectly</span>
      </p>
    </div>
    <ol>
      {userAnswers.map((answer, index) => {
        let cssClass = 'user-answer';

        if(answer === null) {
          cssClass += ' skipped';
        } else if (answer === QUESTIONS[index].answers[0]) {
          cssClass += ' correct';
        } else {
          cssClass += ' wrong';
        }

        return (
          <li key={index}>
            <h3>{index + 1}</h3>
            <p className="question">{QUESTIONS[index].text}</p>
            <p className={cssClass}>{answer ?? 'Skipped'}</p>
          </li>
        );
      })}
      
    </ol>
  </div>
}