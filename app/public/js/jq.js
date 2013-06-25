$(function() {
  var clearFormat = function(price) {
    return parseFloat(price.replace(/[^0-9-.]/g, ''));
  },

  formatMoney = function(price) {
    return '$' + price;
  },

  calculateTotal = function() {
    var total = 0;

    $('input').each(function() {
      var $this = $(this);

      total += $this.data('price') * parseInt($this.val());
    });

    $('.total-amount').text(formatMoney(total));
  },

  calculateSubtotal = function(e) {
    var product = e.originalEvent.currentTarget,
        price = $('.price', product),
        subtotal = formatMoney($(this).data('price') * parseInt($(this).val()));

    price.html(subtotal);
  },

  savePrices = function() {
    $('.price').each(function() {
      $(this).next('input').data('price', clearFormat($(this).text()));
    });
  };

  $('.product').on('change', 'input', function(e) {
    calculateSubtotal.call(this, e);
    calculateTotal.call(this, e);
  });

  $('.product').on('click', '.delete', function(e) {
    e.preventDefault();
    $(e.originalEvent.currentTarget).remove();
    calculateTotal.call(this, e);
  });

  savePrices();
})
