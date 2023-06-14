import React, { useState} from 'react';

const Education = ({ onChange }) => {
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);

  const handleAddField = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
    onChange(updatedEducation)
  };

  return (
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <div className="form-group">
            <label htmlFor={`institute-${index}`}>Institute:</label>
            <input
              type="text"
              id={`institute-${index}`}
              className="form-control"
              value={edu.institute}
              onChange={(e) => handleInputChange(index, 'institute', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`year-${index}`}>Year:</label>
            <input
              type="number"
              id={`year-${index}`}
              className="form-control"
              value={edu.year}
              onChange={(e) => handleInputChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              className="form-control"
              value={edu.degree}
              onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleAddField}>
        Add More
      </button>
    </section>
  );
};

export default Education;
