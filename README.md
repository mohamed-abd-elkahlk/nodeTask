# Node.js Weather Application

This is a Node.js application that uses the Mapbox and WeatherAPI services to fetch the current weather of a given location. The application takes a command line argument as an address, uses the `geocode` function to get the coordinates, and then uses the `forecast` function to get the weather. The `geocode` function uses the Mapbox API to convert the address into geographical coordinates, and the `forecast` function uses the WeatherAPI to fetch the current weather of the location corresponding to these coordinates. The application uses the `dotenv` module to load API keys from a `.env` file, and the `request` module to make HTTP requests.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js and npm on your machine.
3. Install the required dependencies by running `npm install` in the project directory.
4. Create a `.env` file in the project directory and add your Mapbox and WeatherAPI API keys to it.

### cation

- i make the .env folder and it content is a personal data do not puplish your data  to  puplic rep

## Usage

To use the application, follow these steps:

1. Open a terminal window and navigate to the project directory.
2. Run the application by running `node app.js` followed by the address you want to get the weather for.
3. The application will output the current weather for the specified location.

## Dependencies

The application uses the following dependencies:

- dotenv
- request


Thank you for your interest in contributing to this project !