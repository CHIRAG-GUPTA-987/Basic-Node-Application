**Clone this repository**
  1. Click on Code
  2. Copy the HTTPS Code
  3. In your local machine's terminal write ->
       _git clone "The copied URL"_

Move to the new folder created and follow the following steps:
  1. Install Node (https://nodejs.org/en) and npm (automatically installed with Node😃)
  2. Write _npm install_ to install the modules required for the application.
     **Note** - All the module metadata is already present in package.json
  3. Now, please create a .env file in the same folder and write your mongo connection URL as we discussed in the tutorial. Visit - https://www.youtube.com/watch?v=ngtDDUUmUdk.
  4. You are ready with your local setup. Now you can write
       **_node index_**
     in the terminal to start the application.
  5. Let's discuss, how things are going on-
     
       4 Request types: **GET PUT POST DELETE** on the Route **/message**

       **POST** /message
       Request Body: { "text": "Chirag Gupta" }
       Result: A new object will be created in your Mongo Atlas Database

       **GET** /message
       Result: All the message objects will be printed

       **PUT** /message
       Request Body: { "id": "ID of the object to be updated", "text": "Chirag" }
       Result: Message text will be updated

       **DELETE** /message
       Request Body: { "id": "ID of the object to be deleted" }
       Result: Message object will be deleted
