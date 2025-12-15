import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  SkipForward, 
  ArrowRight, 
  Lightbulb,
  Home,
  Flag
} from 'lucide-react';

const PracticeSet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState([]);
  const [score, setScore] = useState(0);

  // Mock questions - will be replaced with API
  const questions = [
    {
      id: 1,
      type: 'mcq',
      question: 'What is 15 + 27?',
      options: ['40', '42', '43', '45'],
      correctAnswer: '42',
      explanation: 'When we add 15 and 27: 15 + 27 = 42. You can also think of it as (10 + 20) + (5 + 7) = 30 + 12 = 42',
      hint: 'Try breaking the numbers into tens and ones: 15 = 10 + 5, and 27 = 20 + 7',
      difficulty: 'easy',
    },
    {
      id: 2,
      type: 'numeric',
      question: 'If a rectangle has a length of 8 cm and width of 5 cm, what is its area in square centimeters?',
      correctAnswer: '40',
      explanation: 'Area of rectangle = length × width = 8 × 5 = 40 square centimeters',
      hint: 'Remember: Area = length × width',
      difficulty: 'medium',
    },
    {
      id: 3,
      type: 'mcq',
      question: 'Which of the following is a prime number?',
      options: ['15', '17', '18', '21'],
      correctAnswer: '17',
      explanation: '17 is a prime number because it can only be divided by 1 and itself. The others can be divided by other numbers too.',
      hint: 'A prime number can only be divided by 1 and itself',
      difficulty: 'medium',
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleCheckAnswer = () => {
    const answer = currentQuestion.type === 'mcq' ? selectedOption : userAnswer.trim();
    const correct = answer === currentQuestion.correctAnswer;
    
    setIsCorrect(correct);
    setIsChecked(true);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setCompletedQuestions([...completedQuestions, {
      questionId: currentQuestion.id,
      correct,
      userAnswer: answer,
    }]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetQuestion();
    } else {
      // Show results
      navigate('/student/practice/results', {
        state: {
          score,
          total: totalQuestions,
          questions: completedQuestions,
        }
      });
    }
  };

  const handleSkip = () => {
    setCompletedQuestions([...completedQuestions, {
      questionId: currentQuestion.id,
      correct: false,
      userAnswer: null,
      skipped: true,
    }]);
    handleNext();
  };

  const resetQuestion = () => {
    setUserAnswer('');
    setSelectedOption(null);
    setIsChecked(false);
    setIsCorrect(null);
    setShowSolution(false);
    setShowHint(false);
  };

  const renderQuestionInput = () => {
    if (currentQuestion.type === 'mcq') {
      return (
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !isChecked && setSelectedOption(option)}
              disabled={isChecked}
              className={`w-full p-4 rounded-2xl border-2 text-left font-semibold transition-all ${
                isChecked
                  ? option === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : option === selectedOption
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                  : selectedOption === option
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {isChecked && option === currentQuestion.correctAnswer && (
                  <CheckCircle size={20} className="text-green-600" />
                )}
                {isChecked && option === selectedOption && option !== currentQuestion.correctAnswer && (
                  <XCircle size={20} className="text-red-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      );
    }

    if (currentQuestion.type === 'numeric') {
      return (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Answer:
          </label>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isChecked}
            className={`input-field text-2xl font-bold text-center ${
              isChecked
                ? isCorrect
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-500 bg-red-50'
                : ''
            }`}
            placeholder="Type your answer"
          />
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/student/practice')}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl font-semibold transition-all flex items-center"
          >
            <Home size={20} className="mr-2" />
            Exit
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
              Score: {score}/{totalQuestions}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar mb-6">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Main Question Card */}
        <div className="card mb-6 fade-in">
          {/* Difficulty Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`badge ${
              currentQuestion.difficulty === 'easy' ? 'badge-success' :
              currentQuestion.difficulty === 'medium' ? 'badge-warning' : 'badge-danger'
            }`}>
              {currentQuestion.difficulty}
            </span>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 px-4 py-2 text-primary-600 hover:bg-primary-50 rounded-xl font-semibold transition-all"
            >
              <Lightbulb size={20} />
              <span>{showHint ? 'Hide' : 'Show'} Hint</span>
            </button>
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {currentQuestion.question}
          </h2>

          {/* Hint */}
          {showHint && (
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 mb-6">
              <div className="flex items-start">
                <Lightbulb size={20} className="text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-yellow-800 font-semibold">{currentQuestion.hint}</p>
              </div>
            </div>
          )}

          {/* Answer Input */}
          {renderQuestionInput()}

          {/* Feedback */}
          {isChecked && (
            <div className={`mt-6 p-6 rounded-2xl border-2 ${
              isCorrect 
                ? 'bg-green-50 border-green-200 pulse-success' 
                : 'bg-red-50 border-red-200 shake'
            }`}>
              <div className="flex items-center mb-3">
                {isCorrect ? (
                  <>
                    <CheckCircle size={28} className="text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-green-800">Correct! Well done! 🎉</h3>
                  </>
                ) : (
                  <>
                    <XCircle size={28} className="text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-red-800">Not quite right. Keep trying!</h3>
                  </>
                )}
              </div>
              
              {!isCorrect && (
                <p className="text-gray-700 mb-3">
                  The correct answer is: <span className="font-bold text-green-700">{currentQuestion.correctAnswer}</span>
                </p>
              )}

              <button
                onClick={() => setShowSolution(!showSolution)}
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                {showSolution ? 'Hide' : 'Show'} Explanation
              </button>

              {showSolution && (
                <div className="mt-3 p-4 bg-white rounded-xl border border-gray-200">
                  <p className="text-gray-700">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          {!isChecked ? (
            <>
              <button
                onClick={handleSkip}
                className="btn-secondary flex items-center space-x-2"
              >
                <SkipForward size={20} />
                <span>Skip</span>
              </button>
              <button
                onClick={handleCheckAnswer}
                disabled={
                  currentQuestion.type === 'mcq' 
                    ? !selectedOption 
                    : !userAnswer.trim()
                }
                className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle size={20} />
                <span>Check Answer</span>
              </button>
            </>
          ) : (
            <button
              onClick={handleNext}
              className="btn-primary ml-auto flex items-center space-x-2"
            >
              <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish'}</span>
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeSet;
