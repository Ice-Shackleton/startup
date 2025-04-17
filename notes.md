# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: at the moment, not determined. I still need to figure out if I want to pay for an elastic IP address.
I had no problems creating and connecting to my AWS. As of this moment, my SSH connect command is thus:
- ssh -i ~/Documents/Webserver-key-01.pem ubuntu@54.164.179.151
  
## Caddy
This was... very frustrating.

## HTML
I plan on getting around my unfamiliarity with HTML by heavily borrowing from the simon code. By editing and messing with an already-formatted example, I can avoid having to start from scratch while still progressing.

Successful in this regard.

## CSS

My initial plan: my display is, fortunately, quite simple. All I need is a login screen, a chat display, a movement button, and a game section.

Update: I've decided to pull code from this guide (https://css-tricks.com/gooey-effect/) to add some interesting visual effects to the login screen. Besides, I want to implement gooey effects across the board in my design.

So that proved harder than expected. For now I will leave it to the side.

It's proving surprisingly difficult to add the containers I want for the chat functionality.

So a day later it turns out my html code was a buggy mess that had no right to function. Significantly edited the structure and am currently testing items within it.

It's done! I learned that CSS is surprisingly difficult to work with, especially without a deeper understanding of html. I'm just glad that I can start moving on to React.



## React Part 1: Routing

The first step I'm going to take is reorganizing my folders to exactly match the simon exercise for the prerequisite.

A bit into the conversion process, and I'm thinking that maybe I should write an "about" page...

I've decided that the work required to make the movement buttons function in a multiplayer context is beyond my capabilities for the moment, and so will be removing it from the project for now.

It's done! I found react rather intuitive to work with; the compartmentalization of the Java code
used in previous sections made it click in my brain, for some reason.

## React Part 2: Reactivity

Very, Very Hard.

## Part 3: HTTP

I learned a fair amount from Simon. I will be heavily relying on that understanding to complete the functionality of my own code. Largely I think websocket will be better suited for the chat element of my code; but I will see where http needs to be added beyond the login. 

This was overall pretty simple! Didn't struggle too much.

## Part 4: Database

I was quite familiar with database work after the chess project a year back. This came as a breeze.

# Part 5: Websocket

I was relatively familiar with websocket work after the chess project a year back. This was a pain to get through; but I managed in the end.



