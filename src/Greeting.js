import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

export const getGreetingsSuccess = (json) => ({
  type: GET_GREETING_SUCCESS,
  json,
});

const getGreeting = () => (dispatch) => {
  dispatch({ type: GET_GREETING_REQUEST });
  return axios
    .get('http://localhost:3000/api/v1/greetings')
    .then((response) => dispatch(getGreetingsSuccess(response.data)))
    .catch((error) => console.log(error));
};

const Greeting = ({ greetings, getGreeting }) => {
  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div>
      <h1 style={{ margin: 'auto', width: '80%', textAlign: 'center' }}>
        {greetings.greeting}
      </h1>
    </div>
  );
};

const structuredSelector = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getGreeting };

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
