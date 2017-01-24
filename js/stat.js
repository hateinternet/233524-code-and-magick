'use strict';

// Отрисовать поле-облачко и текст поздравления

var drawCloud = function (ctx, cloudX, cloudY, widthCloud, heightCloud) {
  ctx.beginPath();
  ctx.moveTo(cloudX + 10, cloudY + 10);
  ctx.lineTo(cloudX + widthCloud + 10, cloudY + 10);
  ctx.lineTo(cloudX + widthCloud - 40 + 10, cloudY + heightCloud + 10);
  ctx.lineTo(cloudX - 40 + 10, cloudY + heightCloud + 10);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(cloudX, cloudY);
  ctx.lineTo(cloudX + widthCloud, cloudY);
  ctx.lineTo(cloudX + widthCloud - 40, cloudY + heightCloud);
  ctx.lineTo(cloudX - 40, cloudY + heightCloud);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.stroke();
  ctx.fill();

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', cloudX + 50, cloudY + 20);
  ctx.fillText('Список результатов:', cloudX + 50, cloudY + 40);
};

/* Сортировать массив времени по возрастанию, а также менять местами элементы
массива имен, для сохранения связи между парами "время - имя игрока" */

var sortArrays = function (times, names) {
  var cache;
  for (var i = 0; i < times.length - 1; i++) {
    for (var j = 0; j < times.length - 1 - i; j++) {
      if (times[j + 1] < times[j]) {
        cache = times[j + 1];
        times[j + 1] = times[j];
        times[j] = cache;

        cache = names[j + 1];
        names[j + 1] = names[j];
        names[j] = cache;
      }
    }
  }
};

var isUser = function (name) {
  return name === 'Вы';
};

// Вывести детали статистики: имя игрока + время прохождения

var showDetail = function (ctx, name, time, columnStartX, columnStartY, columnWidth, columnHeight) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(Math.round(time), columnStartX, columnHeight + 240);
  ctx.fillText(name, columnStartX, columnStartY + 20);
};

// Покрасить колонки в синий цвет в зависимости от значения времени
var paintBlue = function (time, maxTime) {
  return 'rgb(0, 0, ' + Math.round(255 / maxTime * time) + ')';
};

// Отрисовать столбцы гистограммы
var drawColumns = function (ctx, names, times, columnStartX, columnStartY, columnWidth, columnMaxHeight, columnDistance) {
  var maxTime = times[times.length - 1];
  var columnHeight;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = (isUser(names[i])) ? 'rgb(255, 0, 0)' : paintBlue(times[i], maxTime);
    columnHeight = -(columnMaxHeight / maxTime * times[i]);
    ctx.fillRect(columnStartX, columnStartY, columnWidth, columnHeight);
    showDetail(ctx, names[i], times[i], columnStartX, columnStartY, columnWidth, columnHeight, columnDistance);
    columnStartX += columnWidth + columnDistance;
  }
};

window.renderStatistics = function (ctx, names, times) {
  var cloudStartX = 100;
  var cloudStartY = 10;
  var widthCloud = 420;
  var heightCloud = 270;

  drawCloud(ctx, cloudStartX, cloudStartY, widthCloud, heightCloud);
  sortArrays(times, names);

  var columnStartX = 130;
  var columnStartY = 250;
  var columnWidth = 40;
  var columnMaxHeight = 150;
  var columnDistance = 50;

  drawColumns(ctx, names, times, columnStartX, columnStartY, columnWidth, columnMaxHeight, columnDistance);
};
