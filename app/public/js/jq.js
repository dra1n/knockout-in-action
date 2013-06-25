$(function() {
  var clearFormat = function(price) {
    return parseFloat(price.replace(/[^0-9-.]/g, ''));
  },

  formatMoney = function(price) {
    return '$' + price;
  },

  savePrices = function() {
    $('.price').each(function() {
      $(this).data('price', clearFormat($(this).text()));
    });
  };

  $('.product').on('change', 'input', function(e) {
    var product = e.originalEvent.currentTarget,
        price = $('.price', product),
        subtotal = formatMoney(price.data('price') * parseInt($(this).val()));

    price.html(subtotal);
  });

  savePrices();
})
