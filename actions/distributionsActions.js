import fetch from 'isomorphic-fetch';
import { API_HOST } from '../actions';

const url = '/api/distributions';

const REQUEST = 'yasp/distributions/REQUEST';
const OK = 'yasp/distributions/OK';
const ERROR = 'yasp/distributions/ERROR';

export const distributionsActions = {
  REQUEST,
  OK,
  ERROR,
};

const getDistributionsRequest = () => ({
  type: REQUEST,
});

const getDistributionsOk = (payload) => ({
  type: OK,
  payload,
});

const getDistributionsError = (payload) => ({
  type: ERROR,
  payload,
});

const getDistributions = () => (dispatch) => {
  dispatch(getDistributionsRequest());
  return fetch(`${API_HOST}${url}`)
    .then(res => res.json())
    .then(json => dispatch(getDistributionsOk(json)))
    .catch(err => dispatch(getDistributionsError(err)));
};

export {
  getDistributions,
};
