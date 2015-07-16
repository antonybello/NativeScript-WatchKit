console.log("Hello World!");
var date;
var timeStarted;
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
  startTap: function() {
    if (!timeStarted) {
      timeStarted = true;
      date = NSDate.alloc().init();
      this._timeLabel.setText("Timer started!");
    } else {
                                                       this._timeLabel.adjustsFontSizeToFitWidth = true;
      this._timeLabel.setText("Timer is already running");
                                                       
    }
  },
  stopTap: function() {
    if (timeStarted) {
      var time = Math.round(Math.abs(date.timeIntervalSinceNow) * 100) / 100;
      this._timeLabel.setText("Time: " + time + " sec");
      timeStarted = false;
    } else {
      this._timeLabel.setText("Start time to begin.");
    }
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
    startTap: {
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
