# RecruitApp


To run the app:

```
yarn install && yarn start
```

Login as user: **http://localhost:8080/user/login**

Login as employer: **http://localhost:8080/employer/login**

Todo list:

- Add loading spinner when items are fetched (like in the login page).
- It's possible to use the race effect of redux-saga for the 3 sessions sagas to avoid 3 watchers.
- Possible refactoring of the css.
- To test the app I suggest Jest + Enzyme, for the components I like to use snapshot tests.
- Add a /Home route where users can choose whether to login as Users or Employers.
- For simplicity, when an API call fails I kick out the user/employer and redirect to the login page. It would be possible to take advantange of the returned errors from the API to have a better control of the failure case.
- I did not handle the case when users have no avatar because I don't know if /avatar/missing.png is the "null" value of users without pictures. I any case it's easy to handle and show a default one.
- A loading spinner should be shown instead of the dashboard till GET /sessions API call is completed to hide the dashboard content. I showed an example of loading spinner in the login page.
- the webpack configuration contains some useless loaders in the hot reload configuration as well as some unused plugins. Those comes from my boilerplate that I reused to speed up the development.
