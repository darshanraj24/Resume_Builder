import React, { useState } from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleSubmit = () => {
    console.log('Submitted data:');
    console.log('Personal Info:', personalInfo);
    console.log('Education:', education);
    console.log('Experience:', experience);
    console.log('Skills:', skills);
    alert('Added successfully')
  };

  const handlePersonalInfoChange = (data) => {
    setPersonalInfo(data);
  };

  const handleEducationChange = (data) => {
    setEducation(data);
  };

  const handleExperienceChange = (data) => {
    setExperience(data);
  };

  const handleSkillsChange = (data) => {
    setSkills(data);
  };
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidation = (isValid) => {
    setIsFormValid(isValid);
  };
  return (
    <div className="container">
      <Header />
      <main>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <PersonalInfo onChange={handlePersonalInfoChange} />
            <Education onChange={handleEducationChange} />
            <Experience onChange={handleExperienceChange} onFormValidation={handleFormValidation} />
            <Skills onChange={handleSkillsChange} /><hr />
            <button className="btn btn-primary btn-block" disabled={!isFormValid} onClick={handleSubmit}>
              Submit
            </button>
            <sub> (Experience fields required)</sub>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;

