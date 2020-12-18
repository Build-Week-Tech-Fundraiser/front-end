# Front-end

## ☝️ Proposal

---

- What problem does your app solve?
They want to build a platform that provides tech entrepreneurs with limited resources access to business training, project capital raising and mentoring.

- Be as specific as possible; how does your app solve the problem?
Sharing and exposing projects to help fund users.

- What is the mission statement?

    To help underrepresented groups who wouldn’t otherwise have access to technology.

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

## 🎯 Target Audience

---

- Who is your target audience? Be specific.
Under-represented entrepreneurs, minorities
- What feedback have you gotten from potential users?
none really
- Have you validated this problem and your solution with a target audience? Describe how.
    - no issues yet

---

## 🔑 Prototype Key Feature(s)

---

- How long do you think it will take to implement these features? 
1 week ideally
- Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?

    Yes ideally

### API Endpoints - References

- **[GET] /api/projects**
    - **returns** Array of Objects  with Shape: [{**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }]
- **[GET] /api/projects/:id**
    - **returns** 1 Object with Shape: {**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }
- **[GET] /api/projects/user/:id**
    - **returns** Array of Objects for specific userId: {**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }
- **[POST] /api/projects**
    - **requires** Object with Shape: {**title**:'string', **host**:userId, **description**:'string'}
    - **returns** Object {**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }
- **[PUT] /api/projects/:id**
    - **requires** Object with Shape: {**title**: 'string', **description**: 'string'}
    - **returns** updated Object {**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }
- **[DELETE] /api/projects/:id**
    - does not return anything

Funder

- **[PUT] /api/projects/:id/fund/:userid**
    - object {**username**: 'string'}
- **[DELETE] /api/projects/:id/fund/:userid**
    - returns with updated array of users {**id**:int,  **title**: 'string', **host**: {object of a user w/id,username, firstname, lastname}, **description**: 'string', **funders:** ArrayofUserObjects[] }

Users

- **[POST] /api/users/register**
    - Object Shape: { username: "string", password: "string", firstname:"string", lastname:"string" }
    - Returns Object: { id: integer, username, password: "hashed string"}
- **[POST] /api/users/login**
    - requires Object Shape: { username: "string", password: "string" }
    - returns Object Shape: { message: "string", token: "string" }
- **[GET] /api/users/:username**
    - returns Object Shape: { id:int, username: 'string', firstname:'string', lastname:'string'}
