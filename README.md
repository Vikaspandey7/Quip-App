# Salesforce Quiz App with Lightning Web Components (LWC)

This repository contains a simple quiz application built using Lightning Web Components (LWC) on the Salesforce platform. The quiz app consists of three questions and allows users to select answers for each question.

## Features

- Three quiz questions with multiple-choice answers.
- User-friendly interface built with Lightning Web Components.
- Dynamic rendering of questions and options.
- Ability to submit answers and view results.

## Installation

To deploy this quiz app to your Salesforce environment, follow these steps:

1. Clone this repository to your local machine:

   git clone https://github.com/Vikaspandey7/Quip-App.git

2. Navigate to the project directory:

   cd salesforce-quiz-lwc
   
4. Deploy the Lightning Web Component to your Salesforce org using Salesforce CLI:

   sfdx force:source:deploy -p force-app/main/default

6. Assign appropriate permissions to access the quiz app to desired profiles or permission sets in your Salesforce org.
7. Add the QuizApp component to a Lightning page or app in your Salesforce org to start using the quiz app

## Usage
Once installed and configured, users can access the quiz app from their Salesforce interface. Follow these steps to use the quiz app:

-Navigate to the Lightning page or app where you added the QuizApp component. <br>
-Answer each of the three quiz questions by selecting the correct option.<br>
-Click the "Submit" button to submit your answers.<br>
-View your results to see how many questions you answered correctly.

## Contributing
Contributions are welcome! If you'd like to improve this quiz app or add new features, feel free to fork this repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
