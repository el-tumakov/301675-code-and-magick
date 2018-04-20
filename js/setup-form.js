'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  var setup = document.querySelector('.setup');
  var form = document.querySelector('.setup-wizard-form');

  var successUpload = function () {
    setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend(URL, successUpload, window.utils.errorLoad, 'POST', new FormData(form));

    evt.preventDefault();
  });
})();
