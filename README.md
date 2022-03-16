# addi-crm

A custom-made CRM that our sales agents use on a daily basis. That system is basically a sales pipeline where leads could convert into prospects for our company. In order to convert them into prospects, our sales agents need to run some manual checks to validate that the person is eligible to be a prospect of our company.

## Project Demo

🚀[View Demo](https://add-crm-jsalcedo.netlify.app/)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Decisions

I have made most of my decisions following based the steps below:

- Step 1: Break The UI Into A Component Hierarchy.
- Step 2: Build A Static Version in React
- Step 3: Identify The Minimal (but complete) Representation Of UI State
- Step 4: Identify Where My State Should Live
- Step 5: Add Inverse Data Flow

I also did use miragejs to mockup my api data and HTTP request calls.

## Improvements

There are some run for improvements for the CRM, among which it is worth mentioning the addition of filters to more easily and quickly search for contacts within the opportunities page.

Improvement decisions at the code level could be the implementation of styled-components, typescript for managing objects in the application, and teh implementation of ContextAPI for managing states globally.
