import React, { useState, useEffect } from 'react';

const Experience = ({ onFormValidation, onChange }) => {
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  // const [isValid, setIsValid] = useState(false);

  const handleAddField = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
    onChange(updatedExperience)
  };

  useEffect(() => {
    const hasValidInput = experience.every(
      (exp) =>
        exp.company.trim() !== '' && exp.year.trim() !== '' && exp.designation.trim() !== ''
    );
    // setIsValid(hasValidInput);
    onFormValidation(hasValidInput);
  }, [experience, onFormValidation]);


  return (
    <section>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <div className="form-group">
            <label htmlFor={`company-${index}`}>Company:</label>
            <input
              type="text"
              id={`company-${index}`}
              className="form-control"
              value={exp.company}
              onChange={(e) => handleInputChange(index, 'company', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`year-${index}`}>Year:</label>
            <input
              type="number"
              id={`year-${index}`}
              className="form-control"
              value={exp.year}
              onChange={(e) => handleInputChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`designation-${index}`}>Designation:</label>
            <input
              type="text"
              id={`designation-${index}`}
              className="form-control"
              value={exp.designation}
              onChange={(e) => handleInputChange(index, 'designation', e.target.value)}
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

export default Experience;
