'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var TEXT_X = 60;
  var TEXT_Y = 40;
  var TEXT_GAP = 20;
  var BAR_GAP = 50;
  var BAR_GAP_Y = 30;
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;

  var cloudShadowX = CLOUD_X + GAP;
  var cloudShadowY = CLOUD_Y + GAP;
  var headerTextX = CLOUD_X + TEXT_X;
  var headerTextY = TEXT_Y + TEXT_GAP;
  var bottomTextY = CLOUD_Y + CLOUD_HEIGHT - GAP;
  var barY = CLOUD_Y + CLOUD_HEIGHT - BAR_GAP_Y;
  var timesTextY = CLOUD_Y + CLOUD_HEIGHT - GAP - BAR_GAP_Y;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, cloudShadowX, cloudShadowY, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px "PT Mono"';
    ctx.fillText('Ура вы победили!', headerTextX, TEXT_Y);
    ctx.fillText('Список результатов:', headerTextX, headerTextY);

    var maxTime = window.utils.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(players[i], (CLOUD_X + BAR_GAP * (1 + i) + BAR_WIDTH * i), bottomTextY);

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + window.utils.getRandomInt(0, 100) + '%, 30%)';
      }

      ctx.fillRect((CLOUD_X + BAR_GAP * (1 + i) + BAR_WIDTH * i), barY, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);

      ctx.fillStyle = '#000000';
      ctx.fillText(Math.round(times[i]), (CLOUD_X + BAR_GAP * (1 + i) + BAR_WIDTH * i), ((-BAR_HEIGHT * times[i]) / maxTime) + timesTextY);
    }
  };
})();
