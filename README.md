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
