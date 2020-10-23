# Compare two currencies

As a logged-in user (data-miner in the cryptocurrency industry), I need to take the information and data of my interested currencies and make meaningful comparisons (such as their current values, volatilities measured in beta value, historical trends etc.)

- Trigger: The user clicks the “Comparison” button
- Pre-conditions: 
  
The user is logged in (see #Login story for details)

The user has two or more items in the “Favorite” list (see #Favorite story for details)

- Description: If the pre-conditions are satisfied, the user should be able to highlight two cryptocurrencies and hit the “Submit” button. The system will then generate a comparison in numbers and graphs (See #Visualization for more detail) for the two desired currencies with details discussed in #Compare two currency user stories. If the user is not logged in, by clicking the “Comparison” button, the app will take the user to the Login page; if the user has less than two items in the “Favorites” list, the user should not be able to activate the “Submit” button, but instead receive a message asking the user to add more items into the list in order to make a comparison. When the comparison is done, the user can click the “Done” button and exit the visualization/comparison page. 
