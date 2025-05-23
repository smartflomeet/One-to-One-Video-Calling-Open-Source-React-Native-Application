# Create a Seamless 1-to-1Video Calling App with Open Source React Native: Step-by-Step Guide
The sample react-native App demonstrates the use of SmartFloMeet platform Server APIs and react-native Toolkit to build 1-to-1 RTC (Real-Time Communication) Application. It allows developers to ramp up on app development by hosting on their own devices.

This App creates a virtual Room on the fly hosted on the SmartFloMeet platform using REST calls and uses the Room credentials (i.e. Room Id) to connect to the virtual Room as a Moderator or Participant using a mobile client. The same Room credentials can be shared with others to join the same virtual Room to carry out an RTC (Real-Time Communication) session.

SmartFloMeet Developer Center: [https://portal.smartflomeet.ttns.in/]

## 1. How to get started

### 1.1 Prerequisites




#### 1.1.2 Sample React-Native Client

* [Clone or download this Repository](https://github.com/smartflomeet/One-to-One-Video-Calling-Open-Source-React-Native-Application.git)

#### 1.1.3 Test Application Server

You need to setup an Application Server to provision Web Service API for your react-native Application to enable Video Sessions.

To help you try our react-native Application quickly, without having to set up an Application Server, this Application is shipped pre-configured to work in a "try" mode with SmartFloMeet hosted Application Server i.e. https://demo.enablex.io.

Our Application Server restricts a single Session Duration to 10 minutes and allows 1 moderator and not more than 1 participant in a Session.

Once you tried SmartFloMeet react-native Sample Application, you may need to set up your own  Application Server and verify your Application to work with your Application Server.  Refer to point 2 for more details on this.

#### 1.1.4 Configure react-native Client


* Open the App
* Go to EnxJoinScreen.tsx and change the following:
``` 
 /* To try the app with SmartFloMeet hosted service you need to set the kTry = true 
  When you setup your own Application Service, set kTry = false */*/
 /*Your webservice host URL, Keet the defined host when kTry = true */
  **const kBaseURL = "https://demo.smartflomeet.ttns.in/";**
  /* To try the app with SmartFloMeet hosted service you need to set the kTry = true */
  **const kTry = true;**
  /*Use smartflomeet portal to create your app and get these following credentials*/

  **const  kAppId = "App-id";**
  **const  kAppkey = "App-key";**
 ```
Note: The distributable comes with a demo username and password for the Service. 

### 1.2 Test

#### 1.2.1 Open the App

* Open the App on your Device. You get a form to enter Credentials i.e. Name & Room Id.
* You need to create a Room by clicking the "Create Room" button.
* Once the Room ID is created, you can use it and share it with others to connect to the Virtual Room to carry out an RTC Session either as a Moderator or a Participant (Choose applicable Role in the Form).

Note: Only one user with a Moderator Role is allowed to connect to a Virtual Room while trying with SmartFloMeet Hosted Service. Your Own Application Server can allow up to 5 Moderators.

Note:- In the case of an emulator/simulator your local stream will not be created. It will be created only on a real device.

## 2. Set up Your Own Application Server

You may need to set up your own Application Server after you try the Sample Application with SmartFloMeet hosted Server. We have different variants of the Application Server Sample Code. Pick the one in your preferred language and follow the instructions given in the respective README.md file.

* NodeJS: [https://github.com/smartflomeet/Video-Conferencing-Open-Source-Web-Application-Sample.git]
* PHP: [https://github.com/smartflomeet/Group-Video-Call-Conferencing-Sample-Application-in-PHP]

Note the following:

* You need to use App ID and App Key to run this Service.
* Your React-native Client EndPoint needs to connect to this Service to create a Virtual Room and Create a Token to join the session.
* Application Server is created using SmartFloMeet Server API while Rest API Service helps in provisioning, session access, and post-session reporting.


