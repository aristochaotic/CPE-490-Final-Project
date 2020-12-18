# CPE 490 Final Project
**Tyler Wright**

This repo contains all the submission documents for my final project. The writeup and demo videos can be found in the documentation folder.

The project is a simple Go chat server. Users can log on locally with an email and username and enter the chat room. The server can be made publically accessible by using the tool `ngrok`. Most of my code is based on a tutorial I have linked below. 

Reference:
https://scotch.io/bar-talk/build-a-realtime-chat-server-with-go-and-websockets


## Setup

Dependencies: a Go compiler and `ngrok`, install instructions for the latter can be found [here](https://ngrok.com/download). 

Simply clone the repo, navigate to the src folder, and type `go run main.go`. You should then be able to access the chat server via your regular browser by going to `localhost:8000`. To make the server public, type `ngrok http 8000` in another terminal window. `ngrok` will then generate a url which you can share to access the server. 
