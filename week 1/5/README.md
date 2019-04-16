# Instructor Guide

## Goal

The purpose of this morning activity is to help students become comfortable with accessing variables found in nested structures of objects and arrays using both bracket and dot notation. Students should show an increased understanding of data types and how to interact with them. It is also important to use the word `resolves` a lot in this lecture. Talk about about after each `.` or `[]` js will determine the values one step at a time. Also important to hit on the errors that will inevitably come up when working with objects.

## Lecture notes

I recommend giving students 20-30 minutes time to practice this before the exercise leader goes over it with them. When doing this exercise it is important that the leader messes up a fair number of times. An issue with experience is we often do it right so we don't run into errors and then the students think they are bad programmers if they have errors.

## Errors

- Accessing properties that do not exist `undefined`
  - Often caused by types
- `cannot read property x of undefined`
  - Often caused by types on the previous property
  - highlight that you can get the same error by typing `undefined.x`
- `cannot read property '0'` of undefined.
  - this is caused when you do something like this: ```{y: 5}.x[0]```

## Vocab

- Resolves: How JS determines what value it is accessing one step at a time.