# Implementation 1
## 1. Introduction
Gaming Workout Hub is an exercise website that allows gamers to exercise while gaming, prioritizing customizability and tracking features based on the user. This website will make exercising at home fun and easy by letting gamers play games and get alarms of when to exercise and or check off a list of exercises they can customize. The gamer will be able to customize exactly what they want for their workout, allowing for a flexible schedule that caters to the gamers needs and wants. https://github.com/amb2893/CS386Project


## 2. Implemented Requirements
#### Requirement
> Requirement: "As a gamer, I want to be able to take a test about my information so that I can achieve my goal faster."
- Issue: https://github.com/amb2893/CS386Project/issues/66
- Pull request: https://github.com/amb2893/CS386Project/pull/65
    - Implemented by: Luke Shahan / Preston Smith
    - Approved by: Preston Smith

Print screen: 
![Model](D-4_Pictures/InformationTestPic.png)

#### Requirement
> Requirement: "As a gamer who plays many types of games, I want the ability to customize and scale the tasks I do and how long I do them for depending on what game I am playing."
- Issue: https://github.com/amb2893/CS386Project/issues/38 
- Pull request: https://github.com/amb2893/CS386Project/pull/63 
    - Implemented by: Anthony Birk 
    - Approved by: Preston Smith
  
Print Screen:
![Model](D-4_Pictures/CustomAlarmTodoPage.png)

#### Requirement
> Requirement: "As a gamer, I want to be able to look at a aesthetic website so that it is easy to nagigate and understand what is what."
- Issue: https://github.com/amb2893/CS386Project/issues/20
- Pull request: https://github.com/amb2893/CS386Project/pull/75
    - Implemented by: Franz Mischke
    - Approved by: Anthony Birk

Print screen: 
![Model](D-4_Pictures/issue_fix_20.png)
  
#### Requirement
> Requirement: "As a gamer, I want to be able to hear an audio cue so that I know when to stop working out to get back to playing games."
- Issue: [https://github.com/amb2893/CS386Project/issues/68](https://github.com/amb2893/CS386Project/issues/68)
- Pull request: [https://github.com/amb2893/CS386Project/pull/76](https://github.com/amb2893/CS386Project/pull/76)
    - Implemented by: Jalen Jensen
    - Approved by: Anthony Birk
  
Print Screen:  
![Model](D-4_Pictures/soundCueRequirement.png)  

#### Requirement
> Requirement: "As a gamer, I want to be able to contact through the website so that I can get my problems resolved."
- Issue: [https://github.com/amb2893/CS386Project/issues/69](https://github.com/amb2893/CS386Project/issues/69)
- Pull request: [https://github.com/amb2893/CS386Project/pull/77](https://github.com/amb2893/CS386Project/pull/77)
    - Implemented by: Mayanna John
    - Approved by: Anthony Birk   
  
Print Screen:  
![Model](D-4_Pictures/contact_text_page.png)  

## Tests
**Test Framework:** pytest - checks through HTML file to check everything is created  
  
**Example test case:** The following is an automated test that parses through an HTML file, looks for associated class variables, and makes sure that all classes are available and exist. If everything exists and is within the HTML file, it will return a success.  
  
**GitHub Automated Test File:** [GitHub](https://github.com/amb2893/CS386Project/blob/testHTML/PyTests/test_html.py)  

The test should run as follows:  
1. Loads HTML content from file (also checks to see if file exists)
2. Tests if the title is correct
3. Tests if the header exists
4. Tests if questions exists
5. Tests if all button classes exist
6. Test if you can submit
7. Sees if stylesheet is implemented correctly
8. Checks if there is a script file
9. Exits  
  
### Tests 1 & 2:  
![TestPics](D-4_Pictures/testingpic2.png)  
  
### Tests 3 & 4:  
![TestPics](D-4_Pictures/testingpic4.png)
  
### Tests 5:  
![TestPics](D-4_Pictures/testingpic3.png)  
  
### Tests 6-9:  
![TestPics](D-4_Pictures/testingpic5.png)  
  
### Results:  
![TestPics](D-4_Pictures/testingpic1.png)  


You should implement automated tests that aim to verify the correct behavior of your code. Provide the following information:
Test framework you used to develop your tests (e.g., JUnit, unittest, pytest, etc.)
Link to your GitHub folder where your automated unit tests are located.
An example of a test case. Include in your answer a GitHub link to the class being tested and to the test.
A print screen showing the result of the execution of the automated tests. 
Grading criteria (3 points): You should have an adequate number of automated tests. They should be well-written to exercise the main components of your system, covering the relevant inputs.

## Technology  
* HTML/CSS – Building & styling  
* JavaScript – Functionality  
* Discord – Communication  
* GitHub – Tracking & managing  
* Neocities – Web hosting  

## Deployment
Provide a link for the system in production and describe how you are deploying your system. 

Some alternatives for deploying your system in the cloud:

AWS. AWS Educate offers free credits for students. See the tutorial at https://docker-curriculum.com/ on how to create a container and deploy it on AWS. ]
Digital Ocean or Azzure. As part of the GitHub Education benefits, as a student, you can get $100 at Digital Ocean and $100 at Microsoft Azzure cloud computing platforms (see more details at https://education.github.com/students)Links to an external site..
Oracle Cloud. Oracle offers a free tier in its cloud environment that should be more than enough for your needs.
Firebase. Firebase can be a good choice if you are building a mobile phone app.
Grading criteria (3 points): This section will be graded based on the adequate use of the technology and its adequate description.

## Licensing
We have selected to use the MIT License for our source code because it allow contributors or users to use and or modify our source code. That is if and only if they include the original copyright notice.

## Readme File

Link to Readme File: https://github.com/amb2893/CS386Project/blob/main/README.md


## UX Design
Describe the approach you adopted to design your user interface. Include some screenshots.

Grading criteria (3 points): This section will be graded based on the appearance (aesthetics) and usability (ease of use) of the system.

## Lessons Learned
For our team's first release, we learned that we need to communicate better with everyone in the group. Most of our conversations are usually just two people talking with one another, but we need to make it about everyone. These incidents made us not understand some pieces of code and made it longer for the issues to be resolved. As of now the problems have now been fixed and communication has improved.

## Demo
Include a link to a video showing the system working.

Grading criteria (5 points): This section will be graded based on the quality of the video and on the evidence that the features are running as expected. Additional criteria are the relevance of the demonstrated functionalities, the correctness of the functionalities, and the quality of the developed system from the external point of view (user interface).

## Teamwork
