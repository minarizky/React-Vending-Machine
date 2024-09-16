React Vending Machine
Overview
This is a simple React application that simulates a vending machine. It allows users to navigate through different snack options using React Router. The app features a site-wide navigation bar for easy access to different pages, and highlights the active page in the navigation bar.

Features
Vending Machine Page: Displays a list of snacks available in the vending machine.
Snack Pages: Detailed views for individual snacks.
Site-Wide Navigation: Navigation bar present on all pages with active link highlighting.
Installation
To get started with this project, clone the repository and install the necessary dependencies.

Clone the repository:

bash
git clone https://github.com/minarizky/React-Vending-Machine
Navigate into the project directory:

bash
cd react-vending-machine
Install the dependencies:

bash
npm install
Usage
Start the Development Server:

bash
npm start
This command starts the development server and opens the application in your default web browser. The server will automatically reload if you make changes to the code.

Build the Project for Production:

bash
npm run build
This command creates an optimized build of the application in the build directory. The build is ready for deployment.

Run Tests:

bash
npm test
This command runs the tests defined in your project to ensure everything is working as expected.

Project Structure
src/components/: Contains React components for the application.
navbar.js: Site-wide navigation bar.
vendingmachine.js: Main page displaying the list of snacks.
snack1.js, snack2.js, snack3.js: Individual snack pages.
src/App.js: Main application component that sets up routes and includes the Navbar.
src/index.js: Entry point of the React application.
src/styles.css: Stylesheet for the application.
Contributing
Feel free to submit issues or pull requests if you have suggestions or improvements for the project. Ensure that you follow the coding standards and include tests for new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React Router for routing functionality.
Create React App for bootstrapping the project.
