# Express Server Template with JWT Auth

This is a simple template for starting off any api that needs some level of authorization to it. The template includes a basic User model that you can customize as you see fit, just make sure you're reflecting those changes in the 'register' route.

## Tech Used

-Nodejs
-Express
-Mongoose
-Cors 
-bcryptjs
-jsonwebtoken

## Routes

| route path           | access level | description                      |
|----------------------|--------------|----------------------------------|
| "/api/auth/register" | public       | Registers a user to the database |
| "/api/auth/login"    | public       | Logs a user in to the database   |

## User Model

```js
const userSchema = new Schema({
   firstName: {
       type: String,
   },
   lastName: {
       type: String,
   },
   username: {
        type: String,
        required: true,
        unique: true,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   password: {
       type: String, 
       required: true,
       select: false
   }
});
```
## Environment Variable's you'll need

This template uses 'dotenv', so start by creating a `.env` file to store your sensitive information in.

In order to protect your api's privacy and tighten up security, you'll only need two variables to get this template working: 
- `MONGO_URL` which is your uri connection with MongoDB
- `TOKEN_SECRET` is where you need to keep your JWT signature secret safe for generating and comparing tokens.
- (Optional) `PORT` I left this blank for any Heroku deployments for the future, or defined as `4000`. Change this as you see fit, but not necessary for it to be defined to work. 

## Installation

