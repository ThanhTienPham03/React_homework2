import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subjects: [],
    resume: null,
    url: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        subjects: checked
          ? [...prevData.subjects, value]
          : prevData.subjects.filter((subject) => subject !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="contact">Contact #</label>
      <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />

      <div className="form-group">
        <label>Gender</label><br />
        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
        <label htmlFor="female">Female</label>
        <input type="radio" id="other" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
        <label htmlFor="other">Other</label>
      </div>

      <label htmlFor="subject">Your best Subject</label>
      <div className="form-group">
        <input type="checkbox" id="Math" name="subject" value="Math" checked={formData.subjects.includes('Math')} onChange={handleChange} />
        <label htmlFor="Math">Math</label>
        <input type="checkbox" id="Physics" name="subject" value="Physics" checked={formData.subjects.includes('Physics')} onChange={handleChange} />
        <label htmlFor="Physics">Physic</label>
        <input type="checkbox" id="English" name="subject" value="English" checked={formData.subjects.includes('English')} onChange={handleChange} />
        <label htmlFor="English">English</label>
      </div>

      <label htmlFor="resume">Upload Resume</label>
      <input type="file" id="resume" name="resume" onChange={handleChange} />

      <label htmlFor="url">Enter URL</label>
      <input type="url" id="url" name="url" value={formData.url} onChange={handleChange} required />

      <label htmlFor="about">About</label>
      <textarea id="about" name="about" rows="4" value={formData.about} onChange={handleChange}></textarea>

      <button className='submit' type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default Form;