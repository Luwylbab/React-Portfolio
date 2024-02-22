import { useState } from 'react';
import '../assets/index.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    name === 'name' ? setName(value) : null
    name === 'email' ? setEmail(value) : null
    name === 'comment' ? setComment(value) : null;
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${name}`);
    setName('');
  };

  return (
    <div className="container text-center">
      <h1>
        Hello {name}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="comment"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;