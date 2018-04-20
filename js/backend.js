'use strict';

(function () {
  window.backend = function (url, onLoad, onError, method, data) {
    var xhr = new XMLHttpRequest();

    var xhrLoadHandler = function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    };

    var xhrErrorHandler = function () {
      onError('Произошла ошибка соединения');
    };

    var xhrTimeoutHandler = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    xhr.responseType = 'json';

    xhr.addEventListener('load', xhrLoadHandler);
    xhr.addEventListener('error', xhrErrorHandler);
    xhr.addEventListener('timeout', xhrTimeoutHandler);

    xhr.timeout = 10000;

    xhr.open(method, url);
    xhr.send(data);
  };
})();
