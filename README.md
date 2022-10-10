# CRM-system

## Commands
- ### Install devDependencies: `npm install`
- ### Run project: Add `.env` PORT and ENCRYPT_KEY variables, then use the command `npm run start`

## Routes
- ### POST: `/users/create-user`
#### Example request-body: {"name": "Douglas", "username": "DouglasVolcato", "email": "douglasvolcato@gmail.com", "password": "teste123"}
- ### PUT: `/users/update-user/:id`
#### Example request-body: {"name": "Teste", "password": "TesteTeste"}
- ### DELETE: `/users/delete-user/:id`
- ### GET: `/users/find-all-users`
- ### GET: `/users/find-users-by-name/:name`
- ### GET: `/users/find-user-by-id/:id`
- ### GET: `/users/find-user-by-email/:email`

- ### POST: `/auth/login`
#### Example request-body: {"email": "douglasvolcato@gmail.com", "password": "teste123"}

- ### POST: `/customers/create-customer`
#### Example request-body:   {"name": "Teste", "age": 77, "phone": 123123123, "city": "Porto Alegre", "notes": "Empty"}
- ### PUT: `/customers/update-customer/:id`
#### Example request-body:   {"name": "Customer", "age": 33}
- ### DELETE: `/customers/delete-customer/:id`
- ### GET: `/customers/find-all-customers`
- ### GET: `/customers/find-customers-by-name/:name`
- ### GET: `/customers/find-customer-by-id/:id`
