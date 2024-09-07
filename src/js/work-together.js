import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// import openModal from '/js/modal-menu';

const form = document.querySelector('.work-together-form-js');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const { email, comment } = event.currentTarget.elements;

  try {
    const data = await sendRequest({
      email: email.value,
      comment: comment.value,
    });
    // openModal(data);
    form.reset();
  } catch (error) {
    iziToast.show({
      message: error.message,
      color: '#ED3B44',
      position: 'topCenter',
    });
  }
}

async function sendRequest(request) {
  axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
  const { data } = await axios.post('/requests', request);
  return data;
}
