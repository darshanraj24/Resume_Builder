import React, { useRef } from 'react';

const PersonalInfo = ({ onChange }) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const addressRef = useRef('');
  const phoneRef = useRef('');

  const handleInputChange = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;

    onChange({ name, email, address, phone });
  };

  return (
    <section>
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          ref={nameRef}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          ref={emailRef}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          className="form-control"
          ref={addressRef}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          maxLength="10"
          id="phone"
          className="form-control"
          ref={phoneRef}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default PersonalInfo;
