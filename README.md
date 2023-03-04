# Recipe app
## Introduction
Areas covered
- user is able to search and filter based on recipes ingredients and all
- api set up for all endpoints required for above functionality, reusable error handling set up for edge case scenarios
- datastore created using mongodb, mongo express set up to view content in db
- e2e testing set up showcase development usecases presented. All pass
- CI/CD set up using gitlab-ci, need more time for pipeline setup
- Wireframes created in figma, used to map out design and user flow of user flow
- high level architecture diagram created for structure of deployed applications on docker-compose

## How to run the app

Open a terminal and run the following command to spin up the API and React UI

```
make install docker
```

_Navigate to http://localhost:3000 to view the UI_

## How to run the tests

Run the following command in a separate terminal (You must have your UI and API running)

```
make test
```

## Build an app for a chef to store their favorite recipes.
Ideal tech stack:
- Typescript
- React
- Cypress
- Docker

## Non-functional requirements
- Run the whole stack with `make install docker`
- Data is persisted when database is stopped and started
- End to end tests demonstrate acceptance criteria has been implemented


## Saving favorite recipes
### User story 1
As a chef
I want to save my favorite recipes\
So that I can cook them another time

### Acceptance criteria 1
Given I have a new recipe\
When I add the new recipe name\
And ingredients\
And measurements\
And cooking method\
Then the new recipe is saved for later
 
## Searching favorite recipes by name
### User story 2
As a chef\
I want to search for my favorite recipe\
So that I can cook it

### Acceptance criteria 2
Given I want to look for a recipe\
When I search by the name of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods
 
## Searching favorite recipes by ingredients (Optional)
### User story 3
As a chef\
I want to search for my favorite recipe by ingredient\
So that I can cook it

### Acceptance criteria 3
Given I want to look for a recipe by ingredients\
When I search by the ingredient of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods

## Bonus points (Optional)
1. Continuous integration
2. App deployment
