import React from 'react';

const Form = class extends React.Component {
  render() {
    const { firstName, lastName, age, freeText, submitForm, handleChange } =
      this.props;
    return (
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
      >
        <label>
          First Name:
          <input
            type='text'
            value={firstName}
            name='firstName'
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type='text'
            value={lastName}
            name='lastName'
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <label>
          Age:
          <select
            name='age'
            id='age'
            value={age}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value='child'>1-12</option>
            <option value='teen'>13-17</option>
            <option value='aduld'>18-100</option>
          </select>
        </label>
        <br />
        <label>
          Free Text:
          <input
            type='textarea'
            name='freeText'
            value={freeText}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
        <br />
        <input type='submit' value='Continue' />
      </form>
    );
  }
};

const Review = class extends React.Component {
  render() {
    const { firstName, lastName, age, freeText, submitReview, backIt } =
      this.props;
    return (
      <form
        onSubmit={(e) => {
          submitReview(e);
        }}
      >
        <h1>First Name: {firstName}</h1>
        <h1>First Name: {lastName}</h1>
        <h1>Age: {age}</h1>
        <h1>
          Free Text:
          {freeText}
        </h1>
        <input
          type='submit'
          value='back'
          onClick={() => {
            backIt(true);
          }}
        />
        <input
          type='submit'
          value='Send Survey'
          onClick={() => {
            backIt(false);
          }}
        />
      </form>
    );
  }
};

const FormApp = class extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    age: 0,
    freeText: '',
    form: true,
    back: false,
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ form: false });
  };

  submitReview = (e) => {
    e.preventDefault();

    if (this.state.back) {
      this.setState({
        ...this.state,
        form: true,
      });
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        age: '',
        freeText: '',
        form: true,
      });
    }
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  backIt = (back) => {
    back ? this.setState({ back: true }) : this.setState({ back: false });
  };
  render() {
    return (
      <div>
        {this.state.form && (
          <Form
            {...this.state}
            submitForm={this.submitForm}
            handleChange={this.handleChange}
          />
        )}
        {!this.state.form && (
          <Review
            {...this.state}
            submitReview={this.submitReview}
            backIt={this.backIt}
          />
        )}
      </div>
    );
  }
};

export default FormApp;
