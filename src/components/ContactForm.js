import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'contacts'), formData);
      console.log('Document written with ID: ', docRef.id);
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const data = querySnapshot.docs.map(doc => doc.data());
      setSubmittedData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="contact-form-container">
        <h3>Contact Form</h3>       
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* <div className="submitted-data">
        <h2>Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index} className="submitted-data-item">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Message:</strong> {data.message}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ContactForm;
