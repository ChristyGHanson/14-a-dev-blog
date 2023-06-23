# A Dev Blog
* CMS blog deployed with Heroku. 
* Uses MVC paradigm, 
* Handlebars.js for templates, 
* Sequelize for ORM. 
* Authenticated with express-session npm package.

## CODE FROM SCRATCH
BUILD a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts.

* You’ll build this site completely from scratch and deploy it to Heroku. 
*  App follows the MVC paradigm in its architectural structure, 
* Sequelize as the ORM, 
* and the express-session npm package for authentication.
* using Handlebars.js 

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

* GIVEN a CMS-style blog site
1. WHEN I visit the site for the first time
* THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
2. WHEN I click on the homepage option
* THEN I am taken to the homepage
3. WHEN I click on any other links in the navigation
* THEN I am prompted to either sign up or sign in
4. WHEN I choose to sign up
* THEN I am prompted to create a username and password
5. WHEN I click on the sign-up button
* THEN my user credentials are saved and I am logged into the site
6. WHEN I revisit the site at a later time and choose to sign in
* THEN I am prompted to enter my username and password
7. WHEN I am signed in to the site
* THEN I see navigation links for the homepage, the dashboard, and the option to log out
8. WHEN I click on the homepage option in the navigation
* THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
9. WHEN I click on an existing blog post
* THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
10. WHEN I enter a comment and click on the submit button while signed in
* THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
11. WHEN I click on the dashboard option in the navigation
* THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
12. WHEN I click on the button to add a new blog post
* THEN I am prompted to enter both a title and contents for my blog post
13. WHEN I click on the button to create a new blog post
* THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
14. WHEN I click on one of my existing posts in the dashboard
* THEN I am able to delete or update my post and taken back to an updated dashboard
15. WHEN I click on the logout option in the navigation
* THEN I am signed out of the site
16. WHEN I am idle on the site for more than a set time
* THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Contributing](#contributing)
* [Questions](#questions)

## Description
  
* The application is deployed using Heroku. Click [here](link).
* This app is also accessible from the GitHub [repo](link).

## Usage
  
Developers will be able to use this blog for writing about their own interests within tech.

## Installation

1. Clone the [repo](link) to your computer. 
2. After cloning the repo, open the repo in VS Code.
3. Open a command line in VS Code.
4. Run `npm install` to install Node.js.
5. Run `npm run develop` to launch the app locally. 


## Contributing

* You may submit pull requests to the repo.
* You may also contact a team member. (see [Questions](#questions))

## Questions
  
For any questions, message me on GitHub.

| Dev | Info |
| ----------- | ----------- |
| Christy Hanson | [ChristyGHanson](https://github.com/Shelcisco)  |
