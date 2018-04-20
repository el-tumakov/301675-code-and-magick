'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');
  var submitButton = document.querySelector('.setup-submit');

  var successUpload = function (response) {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend(URL, successUpload, window.utils.errorLoad, 'POST', new FormData(form));

    evt.preventDefault();
  });
})();
