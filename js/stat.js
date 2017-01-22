'use strict';

function isUser (name) {
  return name == 'Вы';
}

function randomBlue () {
  return Math.floor(50 + Math.random() * (255 + 1 - 50));
}

window.renderStatistics = function (ctx, names, times) {
  var widthCloud = 420;
  var heightCloud = 270;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, widthCloud, heightCloud);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.strokeRect(100, 10, widthCloud, heightCloud);
  ctx.fillRect(100, 10, widthCloud, heightCloud);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', 110, 30);
  ctx.fillText('Список результатов:', 110, 50);

  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    maxTime = (maxTime < times[i]) ? times[i] : maxTime;
  }

  var columnMaxHeight = 150;
  var columnWidth = 40;
  var columnHeight;
  var columnDistance = 50;
  var columnStartX = 130;
  var columnStartY = 250;

  for (i = 0; i < names.length; i++) {
    if (isUser(names[i])) {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'rgb(0,0,' + randomBlue() + ')';
    }
    columnHeight = -(columnMaxHeight / maxTime * times[i]);
    ctx.fillRect(columnStartX, columnStartY, columnWidth, columnHeight);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[i]), columnStartX, columnHeight + 240);
    ctx.fillText(names[i], columnStartX, columnStartY + 20);
    columnStartX += columnWidth + columnDistance;
  }

};

// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');
// var names = ['Борис', 'Вы', 'Карл', 'Кекс'];
// var times = [30.1, 55.99, 100, 26.63];
// window.renderStatistics(ctx, names, times);
