//
//  InterfaceController.m
//  TNSWatchKitApp WatchKit Extension
//
//  Created by Antony Bello on 7/15/15.
//  Copyright (c) 2015 Telerik. All rights reserved.
//

#import "InterfaceController.h"


@interface InterfaceController()
@property (weak, nonatomic) IBOutlet WKInterfaceLabel *timeLabel;
@end


@implementation InterfaceController

- (void)awakeWithContext:(id)context {
    [super awakeWithContext:context];

    // Configure interface objects here.
}

- (void)willActivate {
    // This method is called when watch view controller is about to be visible to user
    [super willActivate];
}

- (void)didDeactivate {
    // This method is called when watch view controller is no longer visible
    [super didDeactivate];
}

- (IBAction)tapIncrement {
}

- (IBAction)stopTap {
}

@end



