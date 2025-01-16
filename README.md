# Unhandled Database Error in Express.js Route Handler

This repository demonstrates an example of an unhandled database error within an Express.js route handler and provides a solution to handle such errors gracefully.

## Bug
The `bug.js` file contains an Express.js route that fetches user data from a database. If the database operation fails, the code does not handle the error effectively, leading to potential application crashes or unexpected behavior.  The client receives no informative error message.

## Solution
The `bugSolution.js` file demonstrates a corrected version of the route handler. It includes a `try...catch` block to handle potential database errors, allowing the application to gracefully handle failures and send appropriate error responses to the client.

## How to run

1. Clone the repository
2. Navigate to the repository directory
3. Run `npm install` to install required packages
4. Run `node bug.js` and `node bugSolution.js` to see the different behaviors