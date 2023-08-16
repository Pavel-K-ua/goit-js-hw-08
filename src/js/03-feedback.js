import helper from './helper.js';
import _ from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let obj = {};

refs.form.addEventListener('input', _.throttle(onFormInput, 500));

function onFormInput(event) {
  const value = event.target.value;
  const key = event.target.name;
  obj[key] = value;
  helper.save('feedback-form-state', obj);
};

function onPageLoad() {
  const loadData = helper.load('feedback-form-state') || {};
  obj = loadData;
  refs.form.elements.email.value = loadData?.email || '';
  refs.form.elements.message.value = loadData?.message || '';
};
onPageLoad();

refs.form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  if(!refs.form.elements.email.value  || !refs.form.elements.message.value ) return
  console.log(obj);
  obj = {};
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
};

