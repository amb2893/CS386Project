# Description

# Architecture

![Architecture](D-5-Pictures/architecture.png)

Most of our applications are contained within the Gaming Workout Hub folder. Within this folder, we have a back-end folder, front end folder, and a media folder. Within the media folder, we contain any sounds that are used in the website. Within the front-end folder, we have a JavaScript folder and an HTML/CSS folder to build the website. Within the back-end folder, we just have a node folder for now, to launch the server and connect with the database, and store user data. All of these work together to build our web application but leaves plenty of opportunity to 

# Class Diagrams
![classDiagram](D-5-Pictures/class_diagram.png)
## Class Diagram Summary – Gaming Workout Hub
### The class diagram represents the structure and relationships between the core components of the Gaming Workout Hub system. It models how users interact with games, workouts, and fitness plans in the app.

- User: Represents a registered member who can create workout plans, leave reviews, and track progress.

- Game: Represents a video game that workouts can be themed around or paired with.

- Plan: A personalized workout plan linking a user to a game and containing multiple workouts.

- Workout: A fitness session that belongs to a plan and contains a series of exercises.

- Exercise: Individual physical tasks (e.g., push-ups, squats) that belong to a workout.

- Review: A user's rating and feedback on a specific game.

### The diagram includes implementation-level details such as data types, visibility (public, private), parameters, and return types. It also shows associations, such as one user having many plans, or a plan including multiple workouts.

### This diagram helps developers understand, build, and maintain the system by clearly showing how all parts of the backend interact.

# Sequence Diagrams

# Design Patterns
### Abstract Factory Design Pattern
![DesignPatterns](D-5-Pictures/design1.png)
### Singleton Design Pattern
![DesignPatterns](D-5-Pictures/design2.png)

# Design Principles

## 1. Single Responsibility Principle (SRP)

The function pageTransition(title, subtitle, html) is responsible only for handling page transitions, ensuring a smooth layout change without interfering with workout logic.

Similarly, generateWorkout(amount) focuses on determining the workout to be displayed, keeping responsibilities separate.

## 2. Open-Closed Principle (OCP)

The workout objects (bodyweight, cardio, etc.) are structured in a way that allows adding new workouts without modifying existing code. A new workout can be introduced by creating another object with the same structure.

The function parseCustomWorkout() processes custom workouts dynamically without modifying predefined workout structures.

## 3. Liskov Substitution Principle (LSP)

The confirmQuestion(obj) function works with any workout object (bodyweight, custom, etc.) as long as it has a name property, allowing consistent behavior regardless of the workout type.

generateWorkout(amount) supports both time-based and rep-based workouts interchangeably by checking curType, ensuring that different types of workouts can be used without breaking functionality.

