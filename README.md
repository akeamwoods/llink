# LiveLink 2023
### Live Demo: https://akeamwoods.github.io/llink/


## Screenshots:
### iPhone 15 Chrome
<img src="https://github.com/akeamwoods/llink/assets/19963177/ab15b7f9-eebb-45c9-aa76-7fe2fe512845" width="400">
<img src="https://github.com/akeamwoods/llink/assets/19963177/6111fd93-28ed-4dc9-8bca-b80493ca0c93" width="400">

### Large viewport
<img width="400" alt="Screenshot 2023-11-27 at 20 39 24" src="https://github.com/akeamwoods/llink/assets/19963177/12c30de8-6fee-49ba-9fc0-8d548ae9c8da">
<img width="400" alt="Screenshot 2023-11-27 at 20 38 53" src="https://github.com/akeamwoods/llink/assets/19963177/7dd0c5eb-32b4-4dcf-a432-aa41bac17316">


## About this project
This project is built with **React**, **TypeScript**, **Vite**, and **pnpm**. It features a list of posts, with the data for the posts and users being fetched from [dummyjson.com]([url](https://dummyjson.com/)). The app uses React Router for navigation and React Query for data fetching and state management.

Whilst I have lots of experience working with Webpack in the past (and Rollup for component libraries), [Vite is increasingly edging towards being dominant over webpack]([url](https://kinsta.com/blog/vite-vs-webpack/#2-popularity-community-and-ecosystem)https://kinsta.com/blog/vite-vs-webpack/#2-popularity-community-and-ecosystem) and is the [clear winner in terms of building speed](https://kinsta.com/blog/vite-vs-webpack/#5-build-time-and-bundle-size). It also has a lot less overhead, which is why I decided to use it in this project. 

### Key Features
+ **Post Listing Page (PostListPage):** Displays a list of posts in a feed/list. Clicking on a post redirects to a detailed view of that post.
+ **Post Detail Page (PostDetailPage):** Shows detailed information about a selected post, including additional body text.
+ **React Router Integration:** React Router for handling navigation between the list of posts and individual post details.
+ **Data Fetching with React Query:** Uses React Query for efficient data fetching, caching, and updating the UI based on the data state (loading, error, success).
+ **Lazy Loading of Components:** Implemented Reacts lazy loading feature to enhance performance by loading pages only when needed.
+ **Custom Hooks for Data Management:** I've wrote custom hooks (usePosts, usePost, useUsers, useUser) to encapsulate the logic for data fetching and management.
+ **User and Post Data Integration:** Integrates user data with posts, displaying user information alongside their respective posts.
+ **TypeScript Support:** TypeScript for type safety.
+ **Styling and Layout:** Uses CSS modules for component styling, ensures styles are scoped and maintainable.
+ **Testing:** I have used Jest and React Testing Library to provide some example tests for the Card component.

## Responsive Design
+ I have used responsive design so that the view matches the designs in the task/brief for mobile, but also makes use of more screen space on larger devices.

## Routing
<img width="650" alt="Screenshot 2023-11-27 at 21 07 05" src="https://github.com/akeamwoods/llink/assets/19963177/fa0a94ef-4ec2-4a16-8de8-790f3b29fc66">

_A demonstration of the SEO and user friendly URL setup. This allows users to share deep links to posts, bookmark etc_

The application uses React Router for navigation between different pages. Key aspects include:

+ **useParams Hook:** Used in PostDetailPage to extract parameters (postId, slug) from the URL.
+ **Slug Generation:** The generateSlug utility function in utils/generateSlug.ts creates URL-friendly slugs from post titles. This function replaces spaces with hyphens, removes punctuation like full stops, commas, and question + marks, and converts the title to lowercase. This slug is used in URLs for better readability and SEO purposes.
+ **Dynamic Route Patterns:** The app defines dynamic routes in App.tsx (e.g., /post/:postId/:slug) to handle navigation to individual post detail pages.

## Suspense for Performance Optimization
I've used Suspense to optimize the application's performance. Suspense lazily loads pages (PostListPage, PostDetailPage), reducing the initial load time, only loading the pages when necessary.

## Storybook
I am a big advocate for maintainability, and keeping components clean and resuable. I've added storybook to this project to demonstrate this:
<img width="1728" alt="Screenshot 2023-11-27 at 21 22 53" src="https://github.com/akeamwoods/llink/assets/19963177/62eceda0-3d41-44a2-804f-c16e2d59fd9f">

As you can see, storybook allows us to visually inspect/test all the props of the Card component in complete isolation from the rest of the application, allowing me to live update props.

## Testing
I have added some tests for the card component using react testing library and jest:

<img width="378" alt="Screenshot 2023-11-27 at 21 51 08" src="https://github.com/akeamwoods/llink/assets/19963177/283f8e29-77b9-41c2-a306-45f6ad3fe0bf">


## Usage
### Starting the App:
+ Run pnpm install for dependencies.
+ Start the server with pnpm run dev.

### Running Tests:
+ Run component tests with pnpm run test.

### Running Storybook
+ Run pnpm run storybook
  
## Folder Structure
+ src/pages: Contains the page components (PostListPage, PostDetailPage).
+ src/components: Includes reusable components (Card, Header).
+ src/hooks: Custom hooks for data fetching (usePosts, usePost, useUsers, useUser).
+ src/api: API functions for fetching posts and user data.
+ src/types: TypeScript interfaces and types used in the project.
+ src/utils: Utility functions (generateSlug for creating URL slugs).

## Notes (e.g. things I didn't have time to do/fix)
+ I wanted to provide a live demo of this project which I did via GitHub Pages. This resulted in me having to switch the Router being used to a Hash router. As you can see in the screenshot in the Routing section, there is a # at the begining of the URL because of this.
+ I wanted to keep the Heading component in Storybook and keep it reuseable. Because of the routing issues I had to add a 'LinkComponent' prop at the last minute as a hacky solution. Here is the before/after code:

Before:
![x](https://github.com/akeamwoods/llink/assets/19963177/63441e96-ebc4-4ef5-859b-c71db3d0197d)


After:
![after](https://github.com/akeamwoods/llink/assets/19963177/0bbaec10-c0de-40f6-8524-c155c596c330)

## Future Improvements
+ In the future this application could be further improved via virtualisation. Currently the List component loads all of the posts and renders them all. Virtualization would prevent it from rendering the cards which are not in the viewport. Whilst it isn't an issue at the moment as we only load a small number of posts, it is definitely something to consider. I didn't add that in though as the time limit stated two hours, which I have already slightly overrun.


