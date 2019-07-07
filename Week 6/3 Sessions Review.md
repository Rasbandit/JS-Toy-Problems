# Instructor Notes

The purpose of this project is to review sessions and show the need for session data.

## Link

- https://github.com/jlmcd/sessions-morning-review

## Guide

- The **master** branch holds the beginning state of our app. 
- The **sessions** branch holds the completed state of our app, with sessions added. 
- For the sake of example, our SECRET is not kept in an *.env* file, however you should create an *.env* file and store the SECRET there.

1. Run `npm i` and `npm start` 
2. Allow students to connect to your development server via the local ip address (e.g. *http://192.168.1.153:3000/*).
3. As users add messages to the list, they will see messages added by other users.
4. Walk through the implementation of sessions, storing our messages array on the session object instead of directly in the server. The end goal is that nobody should see each other's messages, creating an 'antisocial network'.
