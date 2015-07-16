console.log("Hello World!");
var taps = 0;
var date;
var InterfaceController = WKInterfaceController.extend({
  awakeWithContext: function(context) {
    this.super.awakeWithContext(context);
    console.log("InterfaceController: awakeWithContext");
  },
  willActivate: function() {
    this.super.willActivate();
    console.log("InterfaceController: willActivate");
  },
  didDeactivate: function() {
    this.super.didDeactivate();
    console.log("InterfaceController: didDeactivate");
  },
  tapIncrement: function() {
    date = NSDate.alloc().init();
    console.log(taps);
    taps++;
    this._tapsLabel.setText("Taps: " + taps);
  },
  stopTap: function() {
    console.log(date.timeIntervalSinceNow);
  },
  tapsLabel: function() {
    return this._tapsLabel;
  },
  "setTapsLabel:": function(value) {
    this._tapsLabel = value;
    console.log("Set label: " + value);
  }
}, {
  name: "InterfaceController",
  exposedMethods: {
    tapIncrement: {
      returns: interop.types.void,
      params: []
    },
    stopTap: {
      returns: interop.types.void,
      params: []
    },
    tapsLabel: {
      returns: interop.types.id,
      params: []
    },
    "setTapsLabel:": {
      returns: interop.types.void,
      params: [interop.types.id]
    }
  }
});

var NotificationController = WKUserNotificationInterfaceController.extend({
  willActivate: function() {
    this.super.willActivate();
    console.log("NotificationController: willActivate");
  },
  didDeactivate: function() {
    this.super.didDeactivate();
    console.log("NotificationController: didDeactivate");
  }
}, {
  name: "NotificationController"
});

var GlanceController = WKInterfaceController.extend({
  awakeWithContext: function(context) {
    this.super.awakeWithContext(context);
    console.log("GlanceController: awakeWithContext");
  },
  willActivate: function() {
    this.super.willActivate();
    console.log("GlanceController: willActivate");
  },
  didDeactivate: function() {
    this.super.didDeactivate();
    console.log("GlanceController: didDeactivate");
  }
}, {
  name: "GlanceController"
});

console.log("declared controllers");
