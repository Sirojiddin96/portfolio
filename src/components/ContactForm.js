import React from 'react';
import styled from 'styled-components';

const ContactForm = (props) => {
  console.log('Props', props);
  return (
    <Wrapper>
      <Header>
        <header>{props.header}</header>
      </Header>
      <Main ref={props.form} onSubmit={props.onSubmit}>
        <div className="input-card">
          <Label>Name:</Label>
          <input type="text" placeholder="Please enter your name" name="name" />
        </div>
        <div className="input-card">
          <Label>Email:</Label>
          <input
            type="email"
            placeholder="Please enter your email"
            name="email"
          />
        </div>
        <div className="input-card">
          <Label>Phone:</Label>
          <input
            type="number"
            placeholder="Please enter your number"
            name="number"
          />
        </div>
        <div className="textarea-card">
          <Label>Message:</Label>
          <textarea
            type="text"
            name="message"
            placeholder="Please enter your message"
          ></textarea>
        </div>
        <ButtonCard>
          <Button onClick={props.cancel}>Cancel</Button>
          <Button onClick={props.onSubmit}>Send</Button>
        </ButtonCard>
      </Main>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  background-color: white;
  padding: 10px 15px;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const Header = styled.div`
  header {
    font-size: 20px;
    font-weight: 600;
    color: #003566;
    font-family: serif;
  }
`;

const Main = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .input-card {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 10px;
    input {
      width: 75%;
      height: 40px;
      flex-direction: row;
      box-sizing: border-box;
      outline: none;
      font-size: 16px;
      font-family: sans-serif;
      padding-left: 5px;
      ::placeholder {
        color: #778da9;
        font-size: 14px;
      }
    }
  }
  .textarea-card {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    textarea {
      width: 75%;
      height: 100px;
      flex-direction: row;
      box-sizing: border-box;
      outline: none;
      font-size: 16px;
      font-family: sans-serif;
      padding: 10px 5px;
      ::placeholder {
        color: #778da9;
        font-size: 14px;
      }
    }
  }
`;

const Label = styled.label`
  width: 20%;
  font-size: 15px;
  font-weight: 600;
  font-family: sans-serif;
  color: #003566;
`;

const ButtonCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 45%;
  height: 35px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: none;
  background: #003566;
  color: white;
  cursor: pointer;
`;
