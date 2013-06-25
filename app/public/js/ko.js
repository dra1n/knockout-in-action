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

  var formatPrice = function(value) {
    return '$' + value;
  }

  function CheckoutViewModel(data) {
    var mapping = {
      products: {
        create: function(options) { return new ProductViewModel(options.data); }
      }
    }

    ko.mapping.fromJS({ products: data }, mapping, this);

    this.total = ko.computed(function() {
      var total = 0;

      ko.utils.arrayForEach(this.products(), function(product) {
        total += product.price;
      });

      return formatPrice(total);
    }, this);
  }


  function ProductViewModel(data) {
    var mapping = {
      observe: ['quantity']
    }

    ko.mapping.fromJS(data, mapping, this);

    this.subtotal = ko.computed(function() {
      return formatPrice(this.price * this.quantity());
    }, this);
  }

  $(function() {
    ko.applyBindings(new CheckoutViewModel(data));
  });
})();
