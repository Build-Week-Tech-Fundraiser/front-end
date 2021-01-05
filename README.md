# Front-end

## 💡 Features

---

- What features are required for your minimum viable product?
1. Registration and login capabilities for a `user`.
2. As a `fundraiser` I can create a `project` to start fundraising.
3. As a `funder` I can browse the page and find `projects` I would like to fund.

- What features may you wish to put in a future release?
1. Integrate a payment service (Stripe, for example ) to donate to a `project`.
2. Authenticated `user` can set up push notifications to be triggered when a particular `fundraiser` reaches a certain percentage of and / or reaches its `goal`.
3. An authenticated `user` can upload `image`s. If no `user` `image` is provided, a placeholder `image` populates the view. 

- What do the top 3 similar apps do for their users?
    - have a subscription
    - have a tier system that you buy into
    - have a recommended section/ browse categories

## 🛠 Frameworks - Libraries

---

- What 3rd party frameworks/libraries are you considering using?
    - Front-End
        - React, Redux?, Styled Components, React-Router-Dom,
    - Back-End
        - Node.js, Express, Knex, sqlite3
- Do the APIs you need require you to contact them to gain access?
    - Nope
- Are you required to pay to use said API(s)?
    - No

---

# API Endpoints - References

This data is broken down into three categories: `Project`, `Funder` and `User` data. 

* `User`: used for registration and login.
* `Funder`: used to add and remove a user from/to `funders` array.
* `Project`: used to get data for browsing page and individual fundraiser page. 

---

## Project data

 **[GET]** `/api/projects`
 
- **RETURNS** Array of objects with Shape: 

```js
[
    {
        id: 0, //int
        title: "Title", //str
        description: "project description", //str
        host: {
            id: 0, //int
            username: "username", //str
            firstname: "John", //str
            lastname: "Doe", //str
        }, 
        funders: [
            {
                id: 0, //int
                username: "username", //str 
                firstname: "James", //str
                lastname: "Smith" //str
            },
            ...
        ] 
    }
]

```

**[GET]** `/api/projects/:id`

- **RETURNS** Object with shape: 

```js
{
    id: 0, //int
    title: "Title", //str
    description: "project description", //str 
    host: {
        id: 0, //int,
        username: "username", //str
        firstname: "John", //str
        lastname: "Doe", //str
    }, 
    funders: [
        {
            id: 0, //int
            username: "username", //str 
            firstname: "James", //str
            lastname: "Smith" //str
        },
        ...
    ] 
}
```

 **[GET]** `/api/projects/user/:id`

- **RETURNS** Array of objects for specific userId:

```js
[
    {
        id: 0, //int
        title: "Title", //str 
        description: "project description", //str
        host: {
            id: 0, //int,
            username: "username", //str
            firstname: "John", //str
            lastname: "Doe", //str
        }, 
        funders: [
            {
                id: 0, //int
                username: "username", //str 
                firstname: "James", //str 
                lastname: "Smith" //str
            },
            ...
        ] 
    }   
]
```

**[POST]** `/api/projects`

- **REQUIRES** Object with Shape: 

```js
{
    title: "Title", //str
    description: "project description", //str
    host: 0 //userId 
}
```

- **RETURNS** Object with shape: 

```js
{
    id: 0, //int
    title: "Title", //str
    description: "project description", //str
    host: {
        id: 0, //int
        username: "username", //str
        firstname: "John", //str
        lastname: "Doe", //str
    }, 
    funders: [] 
}
```

**[PUT]** `/api/projects/:id`

- **REQURIES** Object with Shape: 
```js
{
    title: "Title", //str
    description: "project description" //str
}
```
- **RETURNS** Updated object: 

```js
{
    id: 0, //int
    title: "Title", //str
    description: "project description", //str
    host: {
        id: 0, //int
        username: "username", //str
        firstname: "John", //str
        lastname: "Doe", //str
    }, 
    funders: [
        {
            id: 0, //int
            username: "username", //str 
            firstname: "James", //str 
            lastname: "Smith" //str
        },
        ...
    ] 
}
```

**[DELETE]** `/api/projects/:id`

- Does not return anything.
---
## Funder data 

**[POST]** `/api/projects/:id/fund/:userid`

- **REQUIRES** Object: 

```js
{
    username: "username" //str
}
```

**RETURNS**

- Does not return anything. Maybe it could return updated project oboject.

**[DELETE]** `/api/projects/:id/fund/:userid`

- **RETURNS** with updated `funders` array: 

```js
{
    id: 0, //int
    title: "Title", //str
    description: "project description", //str 
    host: {
        id: 0, //int,
        username: "username", //str
        firstname: "John", //str
        lastname: "Doe", //str
    }, 
    funders: [
        {
            id: 0, //int,
            username: "username", //str 
            firstname: "James", //str 
            lastname: "Smith" //str
        },
        ...
    ] 
}
```

---

## Users

**[POST]** `/api/users/register`
    
- **REQUIRES** Object shape: 

```js
{ 
    username: "username", //str
    password: "password", //str 
    firstname: "John", //str
    lastname: "Doe" //str 
}
```
- **RETURNS** Object shape: 
    
    <!-- This should be just like the return of the login -->

```js
{ 
    id: 0, //int
    username: "username", //str 
    password: "ntbbksxhtasnethnstajea" //hashed str
}
```

**[POST]** `/api/users/login`

- **REQUIRES** Object shape: 

```js
{ 
    username: "username", //str 
    password: "password" //str 
}
```

- **RETURNS** Object shape: 

```js
{ 
    message: "Logged in", //str 
    token: "'rcnjntahontjmsantohscrnthasntjbnkthslcjvw"//str 
}
```

**[GET]** `/api/users/:username`

- **RETURNS** Object shape: 

```js
{ 
    id: 0, //int, 
    username: "username", //str 
    firstname: "John", //str
    lastname: "Doe"//str
}
```
