"use client";

import { useState } from 'react';

const Comparator = () => {
  const [question, setQuestion] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would typically fetch results from an API or some other data source
    // For demonstration purposes, we'll use static data
    const fetchedResults = [
      {
        candidate: 'Anura Kumara Dissanayake',
        policies: 'Policy A1, Policy A2',
        comparison: 'Better than Candidate B in Policy A1'
      },
      {
        candidate: 'Dilith Jayaweera',
        policies: 'Policy B1, Policy B2',
        comparison: 'Less effective in Policy B2 compared to Candidate A'
      },
    ];

    // Simulate an API call delay
    setTimeout(() => {
      setResults(fetchedResults);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Comparator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Enter your question"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-purple-500 text-white p-2 rounded mt-2">
          Compare
        </button>
      </form>
      {results.length > 0 && (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Candidate</th>
              <th className="py-2 px-4 border-b">Policies and Plans</th>
              <th className="py-2 px-4 border-b">Comparison with Other Candidates' Policies</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{result.candidate}</td>
                <td className="py-2 px-4 border-b">{result.policies}</td>
                <td className="py-2 px-4 border-b">{result.comparison}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Comparator;
