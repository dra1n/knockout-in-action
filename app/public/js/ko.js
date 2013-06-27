(function () {
  var data = [
    {
      title: 'Xbox One',
      description: 'Be first to experience Xbox One. The Day One Edition features a commemorative controller and an exclusive achievement.',
      price: 499,
      quantity: 1,
      img: '/images/consoles/xbox.png'
    },
    {
      title: 'PlayStation®4',
      description: 'The PlayStation®4 system redefines rich and immersive gameplay with powerful graphics and speed.',
      price: 399,
      quantity: 1,
      img: '/images/consoles/ps.png'
    },
    {
      title: 'Wii U',
      description: "It's the console that will singlehandedly change the way people play games for years to come.",
      price: 300,
      quantity: 1,
      img: '/images/consoles/wii.png'
    }
  ]


  ko.extenders.formatMoney = function(target) {
    target.formatMoney = ko.computed(function() {
      return '$' + ko.utils.unwrapObservable(this).toFixed(2);
    }, target);

    return target;
  };

  ko.extenders.promo = function(target, promoCode) {
    var result = ko.computed(function() {
      var value = target();

      return promoCode.isValid() ? value - value * promoCode.discount : value;
    });

    result.promoDiscount = ko.computed(function() {
      return target() * promoCode.discount;
    }).extend({ formatMoney: true });

    return result;
  };

  function PromoCodeViewModel(secret, discount) {
    var self = this;

    self.discount = discount;
    self.isEnabled = ko.observable(false);
    self.value = ko.observable();
    self.isValid = ko.computed(function() {
      return self.value() === secret;
    });
  }


  function CheckoutViewModel(data) {
    var self = this,

    mapping = {
      products: {
        create: function(options) {
          return new ProductViewModel(options.data);
        }
      },
    };

    ko.mapping.fromJS({ products: data }, mapping, self);

    self.promoCode = new PromoCodeViewModel('anadea', 0.1);

    self.total = ko.computed(function() {
      var total = 0;

      ko.utils.arrayForEach(self.products(), function(product) {
        total += product.subtotal();
      });

      return total;
    }).extend({ promo: self.promoCode }).extend({ formatMoney: true });

    self.delete = function(product) {
      self.products.remove(product);
    }

    self.checkout = function() {
      var mapping = { ignore: ['description', 'img', 'price'] };

      $.ajax({
        dataType: 'json',
        data: ko.mapping.toJSON(self, mapping),
        type: 'post'
      })
      .success(function() {
        alert('Thank you for your order');
      });
    }
  }


  function ProductViewModel(data) {
    var self = this,

    mapping = { observe: ['quantity'] };

    ko.mapping.fromJS(data, mapping, self);

    self.subtotal = ko.computed(function() {
      return self.price * self.quantity();
    }).extend({ formatMoney: true });
  }


  $(function() {
    ko.applyBindings(new CheckoutViewModel(data));
  });

})();
