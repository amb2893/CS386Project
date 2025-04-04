# Description

# Architecture

![Architecture](D-5-Pictures/architecture.png)

Most of our applications are contained within the Gaming Workout Hub folder. Within this folder, we have a back-end folder, front end folder, and a media folder. Within the media folder, we contain any sounds that are used in the website. Within the front-end folder, we have a JavaScript folder and an HTML/CSS folder to build the website. Within the back-end folder, we just have a node folder for now, to launch the server and connect with the database, and store user data. All of these work together to build our web application but leaves plenty of opportunity to 

# Class Diagrams

# Sequence Diagrams

# Design Patterns

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

