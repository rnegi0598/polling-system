# Polling System API

## Routes:

### Create a que
- /questions/create
- title,empty options array

### create an option for a given que id
- /questions/:id/options/create
- text,votes,link_to_vote:localhost:5173/options/:id/add_vote
- add optionn to its question

### delete a que with given id
- /questions/:id/delete
- also all the options will also need to be deleted
- A question can’t be deleted if one of it’s options has votes

### delete an option with given id
- /options/:id/delete
- An option can’t be deleted if it has even one vote given to it

### add vote to option with given id
- /options/:id/add_vote
 
### get  the ques with given id
- /questions/:id
- populate ques with options and then send

questions
- id
- title
-  options [option objectId] 

options
- id
- text
- votes
- link_to_vote
- questionId