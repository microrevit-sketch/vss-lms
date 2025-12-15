import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';

const AddQuestion = () => {
  const navigate = useNavigate();

  const [questionData, setQuestionData] = useState({
    type: 'mcq', // mcq or numeric
    question: '',
    options: ['', '', '', ''], // for MCQ type
    correctAnswer: '',
    explanation: '',
    hint: '',
    difficulty: 'easy', // easy, medium, hard
    subject: 'math', // math, cs, english
    grade: '5',
    topic: '',
    tags: [],
  });

  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (field, value) => {
    setQuestionData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...questionData.options];
    newOptions[index] = value;
    setQuestionData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addOption = () => {
    setQuestionData(prev => ({
      ...prev,
      options: [...prev.options, '']
    }));
  };

  const removeOption = (index) => {
    if (questionData.options.length > 2) {
      const newOptions = questionData.options.filter((_, i) => i !== index);
      setQuestionData(prev => ({
        ...prev,
        options: newOptions
      }));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !questionData.tags.includes(tagInput.trim())) {
      setQuestionData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setQuestionData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!questionData.question.trim()) {
      alert('Please enter a question');
      return;
    }

    if (questionData.type === 'mcq' && questionData.options.some(opt => !opt.trim())) {
      alert('Please fill in all options');
      return;
    }

    if (!questionData.correctAnswer.trim()) {
      alert('Please specify the correct answer');
      return;
    }

    // TODO: Save to backend/database
    console.log('Saving question:', questionData);

    // For now, save to localStorage as a mock database
    const existingQuestions = JSON.parse(localStorage.getItem('questions') || '[]');
    const newQuestion = {
      ...questionData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    existingQuestions.push(newQuestion);
    localStorage.setItem('questions', JSON.stringify(existingQuestions));

    alert('Question added successfully!');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Add New Question</h1>
          <p className="text-gray-600">Create a new practice question for students</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8">
          {/* Question Type */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Question Type
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="mcq"
                  checked={questionData.type === 'mcq'}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="mr-2"
                />
                <span>Multiple Choice (MCQ)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="numeric"
                  checked={questionData.type === 'numeric'}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="mr-2"
                />
                <span>Numeric Answer</span>
              </label>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Question *
            </label>
            <textarea
              value={questionData.question}
              onChange={(e) => handleInputChange('question', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              rows="4"
              placeholder="Enter the question text..."
              required
            />
          </div>

          {/* Options (for MCQ) */}
          {questionData.type === 'mcq' && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Options *
              </label>
              <div className="space-y-3">
                {questionData.options.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
                      placeholder={`Option ${index + 1}`}
                      required
                    />
                    {questionData.options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addOption}
                className="mt-3 flex items-center gap-2 px-4 py-2 bg-ilm-100 text-ilm-700 rounded-xl hover:bg-ilm-200 transition-colors"
              >
                <Plus size={20} />
                <span>Add Option</span>
              </button>
            </div>
          )}

          {/* Correct Answer */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Correct Answer *
            </label>
            {questionData.type === 'mcq' ? (
              <select
                value={questionData.correctAnswer}
                onChange={(e) => handleInputChange('correctAnswer', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
                required
              >
                <option value="">Select correct option</option>
                {questionData.options.map((option, index) => (
                  option.trim() && (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  )
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={questionData.correctAnswer}
                onChange={(e) => handleInputChange('correctAnswer', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
                placeholder="Enter the correct numeric answer"
                required
              />
            )}
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Explanation *
            </label>
            <textarea
              value={questionData.explanation}
              onChange={(e) => handleInputChange('explanation', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              rows="3"
              placeholder="Explain the solution..."
              required
            />
          </div>

          {/* Hint */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hint (Optional)
            </label>
            <textarea
              value={questionData.hint}
              onChange={(e) => handleInputChange('hint', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              rows="2"
              placeholder="Provide a helpful hint..."
            />
          </div>

          {/* Difficulty, Subject, Grade - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Difficulty
              </label>
              <select
                value={questionData.difficulty}
                onChange={(e) => handleInputChange('difficulty', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>
              <select
                value={questionData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              >
                <option value="math">Mathematics</option>
                <option value="cs">Computer Science</option>
                <option value="english">English</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Grade
              </label>
              <select
                value={questionData.grade}
                onChange={(e) => handleInputChange('grade', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              >
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
              </select>
            </div>
          </div>

          {/* Topic */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Topic
            </label>
            <input
              type="text"
              value={questionData.topic}
              onChange={(e) => handleInputChange('topic', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
              placeholder="e.g., Algebra, Geometry, Number Theory"
            />
          </div>

          {/* Tags */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ilm-500 focus:border-transparent"
                placeholder="Add tags (press Enter)"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-ilm-100 text-ilm-700 rounded-xl hover:bg-ilm-200 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
            {questionData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {questionData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-ilm-100 text-ilm-700 rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-ilm-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate('/admin/dashboard')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-ilm-500 text-white rounded-xl hover:bg-ilm-600 transition-colors font-semibold"
            >
              <Save size={20} />
              <span>Save Question</span>
            </button>
          </div>
        </form>

        {/* Question Preview */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
          <div className="space-y-4">
            <div>
              <span className="text-sm font-semibold text-gray-500">Question:</span>
              <p className="text-lg text-gray-900">{questionData.question || 'No question entered yet'}</p>
            </div>

            {questionData.type === 'mcq' && questionData.options.some(opt => opt.trim()) && (
              <div>
                <span className="text-sm font-semibold text-gray-500">Options:</span>
                <ul className="list-disc list-inside space-y-1">
                  {questionData.options.filter(opt => opt.trim()).map((option, index) => (
                    <li key={index} className={`text-gray-900 ${option === questionData.correctAnswer ? 'font-bold text-green-600' : ''}`}>
                      {option} {option === questionData.correctAnswer && '(Correct)'}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {questionData.type === 'numeric' && questionData.correctAnswer && (
              <div>
                <span className="text-sm font-semibold text-gray-500">Correct Answer:</span>
                <p className="text-lg font-bold text-green-600">{questionData.correctAnswer}</p>
              </div>
            )}

            {questionData.explanation && (
              <div>
                <span className="text-sm font-semibold text-gray-500">Explanation:</span>
                <p className="text-gray-700">{questionData.explanation}</p>
              </div>
            )}

            {questionData.hint && (
              <div>
                <span className="text-sm font-semibold text-gray-500">Hint:</span>
                <p className="text-gray-700">{questionData.hint}</p>
              </div>
            )}

            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                {questionData.difficulty}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                {questionData.subject}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                Grade {questionData.grade}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
