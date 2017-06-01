## DIRECTOR STRUCTURE

.
├── README.md
├── client
│   └── src
│       ├── app.jsx
│       ├── components
│       │   ├── Base.jsx
│       │   ├── HomePage.jsx
│       │   ├── LoginForm.jsx
│       │   └── SignUpForm.jsx
│       ├── containers
│       │   ├── LoginPage.jsx
│       │   └── SignUpPage.jsx
│       └── routes.js
├── index.js
├── package.json
├── server
│   ├── routes
│   │   └── auth.js
│   └── static
│       ├── css
│       │   └── style.css
│       └── index.html
└── webpack.config.js

## Presentation and container

container focuses on how things work and presentational focus on how things look. The former holds the state and the latter is for recieving props.

## Good to understand API auth

https://stackoverflow.com/questions/14572600/passport-js-restful-auth
