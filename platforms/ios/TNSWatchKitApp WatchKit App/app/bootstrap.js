console.log("Hello World!");
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
    console.log("Time started");
  },
  stopTap: function() {
                                                       var time= Math.round(Math.abs(date.timeIntervalSinceNow)*100)/100;
    console.log(time);
                                                       this._timeLabel.setText("Time: " + time + " sec");
  },
  timeLabel: function() {
    return this._timeLabel;
  },
  "setTimeLabel:": function(value) {
    this._timeLabel = value;
    console.log("Set time: " + value);
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
    timeLabel: {
      returns: interop.types.id,
      params: []
    },
    "setTimeLabel:": {
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
