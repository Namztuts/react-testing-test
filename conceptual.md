### Conceptual Exercise

Answer the following questions below:

-  What is the purpose of the React Router?
-  To route to different urls/handle routing within an app

-  What is a single page application?
-  An application where the page does not need to refresh, even when accessing new areas and functionality

-  What are some differences between client side and server side routing?
-  Client side is single page app and does not require refreshing
-  Server side requires refresh for page navigation

-  What are two ways of handling redirects with React Router? When would you use each?
-  One would be with Navigate | would be used within a component to redirect based on a condition
-  Another is useNavigate | best for event-driven navigations like buttons and form submission

-  What are two different ways to handle page-not-found user experiences using React Router?
-  One way is to make a Route component with a path of '\*' as the last Route | a 'catch all'
-  Another way is with useRoutes | i had to search this as it was not mentioned or used in course material

-  How do you grab URL parameters from within a component using React Router?
-  With useParams(), initialize it as a variable and call 'variable.' and then the ':param' name in the Route component's path

-  What is context in React? When would you use it?
-  Context is what allows some object to persist throughout the app without having to pass it down through props
-  You could use it in something like managing a theme throughout the different routes and components of an app

-  Describe some differences between class-based components and function components in React.
-  Functional components are generally much less cluttered and earier to read
-  Class-based components use lifecycle methods to manage state while functional components use hooks

-  What are some of the problems that hooks were designed to solve?
-  They were designed to help with things like code reusability, 'wrapper hell', and to ultimately allow less code to be used while functioning the same/better
