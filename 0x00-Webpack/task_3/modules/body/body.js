import $ from 'jquery';
import _ from 'lodash';
import './body.css';

function updateCounter() {
  let count = 0;
  $('#count').html(`${count} clicks on the button`);
  $('#button').on('click', _.debounce(() => {
    count++;
    $('#count').html(`${count} clicks on the button`);
  }, 500));
}

$('body').append('<button id="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');

updateCounter();

