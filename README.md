
# snowplow assignment
The purpose of this application is to track user choice. Currently, online age veriﬁcation generally consists of either identiﬁcation, intruding a user’s privacy, or self-declaration, which is generally ineﬀective as children often lie about their age. This project presents a mechanism that utilises the drawbacks of graphical authentication methods and adapts them to create an age gate which avoids an unwarranted privacy invasion. This proposed mechanism uses Passfaces and PassPoints together to examine whether or not a participants age aﬀected their response for either of these techniques. Passfaces require a number of faces to make up a “Passfaces code” (passcode) much like how passwords require a number of alphanumeric characters to make up a word. Essentially, Passfaces works by replacing
each individual character of a password with a human face. PassPoints is another authentication technique in which the user chooses several points on this image in a deﬁned order; to authenticate, the user must click these chosen points (within an adjustable distance), typically within 0.25cm from the actual click point.
This application is created with Django as the server side using JavaScript - no other external libraries such as JQuery or Angular. Furthermore, I did not use a database as this application is static it was not neccesary to add complexity to the solution. Therefore, the images in this application are hardcoded. In order to make this application more user friendly and interactive, I used AJAX calls to retrieve the new images and render them in HTML; the AJAX call renders an auxaliary Django view. As requested in the task, I locally run the snowplow micro as a receiver.

  

For the tracking part of the application, I focused mainly on tracking custom events. The first tracker tracks users choice and is fired when users selects one of the images in the grid. The tracker then sends information to the custom structured event with following fields:

- category: Faces
- action: Selection
- Label: image name
- property: index of an image in the grid
- value: relative position of a cursor in the image.

For this event the index of an image is sent as every set of images is shuffled before passing them to the View. 

The other event in this application tracks a users behaviour just before they select a picture. It tracks how long the user has been on the image, i.e. how long the cursor was hovered over the image in number of seconds. To accomplish this event, there is a function timerIncrement, which increments a local variable currentTime, and is called every second.  The time tracking begins when a user hovers over an image by setting currentTime to 0. Once the user leaves the area of the image the event is fired. The information sent is:
- category: Faces
- action: Hover
- Label: image name
- property: index of an image in the grid 
- value: number of seconds that the image was hovered

In the process of selecting an image both trackers are fired. After receiving a new set of images via AJAX, the call trackers are registered again on the new set.

I used PyCharm IDE to run the application and the environmental variables used there are: PYTHONUNBUFFERED=1;DJANGO_SETTINGS_MODULE=mypage.settings