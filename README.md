This application is a simple timer app using WatchKit, but the logic is written in Javascript; Telerik's NativeScript platform compiles the JavaScript into 
Objective-C code. It was a little tricky to link the files together and overwrite the Objective-C protocols, but this app is proof that you can use 
NativeScript to write native iOS apps! The storyboard elements are connected as IBOutlets to the InterfaceController, but the actual logic is 
executed in the ```bootstrap.js``` file. Follow the tutorial [here.](https://github.com/NativeScript/sample-iOS-WatchKit)
