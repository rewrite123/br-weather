# br-weather

## Side-note for Bottle Rocket

This project is not completed. I would like to finish it and send you the completed project, however I recently had a complication requiring me to be out of my home and my office for multiple days. For this reason, I am submitting this application with the intent to finish it later so that at least you can see some of my methodologies for solving the problems I faced in this project. Just keep in mind, this project at this time represents no more than 6-8 hours of work. I can still answer emails during the day via my phone, but my laptop will be out of reach for possibly the next week. Thanks for your understanding and I hope to hear from you soon.

## Getting started

This project uses npm.
Run the following to install packages.

```bash
npm i
```

To start the project, run:

```bash
npm run start
```

This will start a webpack dev server on port 3009

This package uses prettier to force code formatting.
To run prettier run the following.

```bash
npm run prettier
```

To create a production build of this project, run the following.

```bash
npm run build
```

## About

This project is part of the br-weather coing assessment from BottleRocket. I have modified this project to better showcase my skills as a developer.

1. his project was developed using TypeScript, and all other parts of this application that were using regular JSX have been converted to TSX.

2. his project is not using create-react-app (CRA), but instead uses webpack with a config I have set up and used on my previous projects.

3. I have modified some components to better fit the needs of this project. For instance, the icons that were provided by BR have been modified so that they are not hard-coded, and therefore can be styled with CSS.

4. I have added a bunch of CSS variables to this project to make theming easier. I also use SASS variables as well, however they are limited to media queries since CSS vars are not accepted in media queres yet. Also, CSS vars allow for JS to access and modify them if needed, making this a great way to create themeing without rebuilding.

5. This project uses positioned class-names. This is a method I created for naming classes. This method gives all elements and components class-names that inform developers where the component is, and what is styling it. It follows roughly the following pattern.

```
<PROJECT_ABREVIATION>-<VIEW_ABRREVIATION>-<PARENT_DESCRIPTOR>-<CHILD_DESCRIPTOR>
brw-home-header-title
```

This way, you can always tell what you are styling and avoid class-name collisions whithout having to hash the classnames. Below is an example for a component used in this project.

```
<PROJECT_ABREVIATION>-<COMPONENT_ABRREVIATION>-<PARENT_DESCRIPTOR>-<PARENT_DESCRIPTOR>-<PARENT_DESCRIPTOR>-<CHILD_DESCRIPTOR>
brw-carousel-selector-center-bullets-el
```

6. I am aware that Heroku has changed their billing, so I added react-query to cache API responses. This also speeds up the app and avoid additional expensive, unnecessary API calls. You can still see the fetch requests in the src/api folder. There are also interfaces describing all of the datatypes returned that I got to.
