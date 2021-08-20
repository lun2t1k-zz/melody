$(document).ready(function () {
  var currentFloor = 2;
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var floorPath = $('.home-image path');
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');
  var flatPath = $('.modal-image path');
  var flatLink = $('.flat-link');

  floorPath.on('mouseover', function () {
    currentFloor = $(this).attr('data-floor');
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
    $('.counter').text(usCurrentFloor);
    floorPath.removeClass('current-floor');
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    $('.counter').text(currentFloor);
  });

  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

  function toggleModal () {
    modal.toggleClass('is-open');
  };

  flatPath.on('mouseover', function () {
    currentFlat = $(this).attr('data-flat');
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat-link');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat-link');
  });

  flatLink.on('click', function () {
    currentFlat = $(this).attr('data-flat');
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat-link');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat-link');
  });

  flatLink.on('mouseover', function () {
    currentFlat = $(this).attr('data-flat');
    flatPath.removeClass('current-flat');
    flatLink.removeClass('current-flat-link');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat');
    $(`[data-flat=${currentFlat}]`).addClass('current-flat-link');
  });
});