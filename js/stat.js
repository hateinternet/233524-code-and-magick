'use strict';

(function () {
  // Отрисовать поле гистограммы (с возможным смещением offset)

  var drawCloud = function (ctx, color, offset) {
    var cloudX = 100;
    var cloudY = 10;
    var widthCloud = 420;
    var heightCloud = 270;
    offset = offset ? offset : 0;
    var tmpOffsetY = cloudY + offset;
    var tmpOffsetX = cloudX + offset;
    var tmpOffsetHeightY = tmpOffsetY + heightCloud;
    var tmpOffsetWidthX = tmpOffsetX + widthCloud;

    ctx.beginPath();
    ctx.moveTo(tmpOffsetX, tmpOffsetY);
    ctx.lineTo(tmpOffsetWidthX, tmpOffsetY);
    ctx.lineTo(tmpOffsetWidthX - 40, tmpOffsetHeightY);
    ctx.lineTo(tmpOffsetX - 40, tmpOffsetHeightY);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
  };

  // Добавить на поле гистограммы поздравительный текст

  var addText = function (ctx) {
    var cloudX = 100;
    var cloudY = 10;

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText('Ура вы победили!', cloudX + 50, cloudY + 20);
    ctx.fillText('Список результатов:', cloudX + 50, cloudY + 40);
  };

  var isUser = function (name) {
    return name === 'Вы';
  };

  // Вывести детали статистики: имя игрока и время прохождения

  var showDetail = function (ctx, name, time, columnStartX, columnStartY, columnHeight) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(time), columnStartX, columnHeight + 240);
    ctx.fillText(name, columnStartX, columnStartY + 20);
  };

  var compareTime = function (infoFirst, infoSecond) {
    return infoFirst.time - infoSecond.time;
  };

  // Создать массив объектов из массивов names и times, и отсортировать его по возрастанию времени

  var sortArrays = function (names, times) {
    var info = [];
    for (var i = 0; i < names.length; i++) {
      info[i] = {
        time: times[i],
        name: names[i]
      };
    }
    return info.sort(compareTime);
  };

  // Отрисовать столбцы гистограммы

  var drawColumns = function (ctx, info) {
    var columnStartX = 130;
    var columnStartY = 250;
    var columnWidth = 40;
    var columnMaxHeight = 150;
    var columnDistance = 50;
    var columnHeight;
    var maxTime = (info[info.length - 1].time);

    for (var i = 0; i < info.length; i++) {
      ctx.fillStyle = (isUser(info[i].name)) ? 'rgb(255, 0, 0)' : 'rgb(0, 0, ' + Math.round(255 / maxTime * info[i].time) + ')';
      columnHeight = -(columnMaxHeight / maxTime * info[i].time);
      ctx.fillRect(columnStartX, columnStartY, columnWidth, columnHeight);
      showDetail(ctx, info[i].name, info[i].time, columnStartX, columnStartY, columnHeight, columnDistance);
      columnStartX += columnWidth + columnDistance;
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    drawCloud(ctx, 'rgba(0, 0, 0, 0.7)', 10);
    drawCloud(ctx, 'rgba(255, 255, 255, 1)');
    addText(ctx);
    drawColumns(ctx, sortArrays(names, times));
  };
})();
