// Generated by CoffeeScript 1.10.0
(function() {
  var Base, CustomerGroup,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Base = require('./base');

  CustomerGroup = (function(superClass) {
    extend(CustomerGroup, superClass);

    CustomerGroup.prototype.slug = "customer_group";

    CustomerGroup.prototype.prefix = "/customer_groups";

    function CustomerGroup(site) {
      CustomerGroup.__super__.constructor.call(this, site);
    }

    CustomerGroup.prototype.customers = function(id, callback) {
      var url;
      url = this.resource.queryString(this.prefix + "/" + id + "/customers");
      return this.resource.post(url, "customers", callback);
    };

    return CustomerGroup;

  })(Base);

  module.exports = CustomerGroup;

}).call(this);
