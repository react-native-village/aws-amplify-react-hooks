![CRUD](https://res.cloudinary.com/practicaldev/image/fetch/s--kn4qnY-k--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--edS2IST9--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/9ycncydh8czhwfk9k5kb.png)

# CRUD



## Step 1 - Fast start example

 Clone repository
 
 `git clone git@github.com:react-native-village/aws-amplify-react-hooks.git`
 
Let's go to the example folder

`cd aws-amplify-react-hooks/examples/reactNativeUnicorn`

Install dependencies

`yarn`

or

`npm install`

## Step 2 - Register your AWS account

We register according to this [instruction](https://aws-amplify.github.io/docs/) 📃 and check all 5 steps according to the video tutorial..
Attention!!! You will need a bank card 💳, where should be more than 1 $ 💵
There we look and put the Amplify Command Line Interface (CLI)


## Step 3 - Init Amplify

`amplify init`

![amplify init](https://miro.medium.com/max/2948/1*LFe2FrFge8oeAWV6BikVcg.png)


## Step 4 - Connecting Authentication Plugin — Auth 🔐
Now that the application is in the cloud, you can add some features, such as allowing users to register with our application and log in.
We connect the authentication plugin.
amplify add auth
Select the default configuration. This adds auth resource configurations locally to your amplify/backend/auth directory.
Select the profile we want to use. default. Enter and how users will log in. Email (write off money for SMS).

![auth](https://miro.medium.com/max/3188/1*KD6KyPjd9Ac3REpgsTC9CQ.png)

Successfully added resource yourname locally
Send changes to the cloud 💭

`amplify push`

✔ All resources are updated in the cloud

[Details](https://dev.to/playra/crud-create-read-update-delete-aws-amplify-graphql-react-native-4m2b)


## Stap 5 - Backend - Create an API

We will now create the GraphQL API, which interacts with the DynamoDB NoSQL database to perform CRUD operations (create, read, update, delete).

`amplify add api`

![api](https://res.cloudinary.com/practicaldev/image/fetch/s--UZVHLKSk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/2994/1%2AKXb3-t8wyjjHfO1OuLH44g.png)

After the selected items, a diagram will open, which is always available for editing at ./amplify/backend/api/messaga/schema.graphql
Where we add the following code:

```graphql
type Job 
  @model
  @auth(
    rules: [
      {allow: owner, ownerField: "owner", operations: [create, update, delete]},
    ])
{
  id: ID!
  position: String!
  rate: Int!
  description: String!
  owner: String
}
```

This is a GraphQL schema. GraphQL Transform provides an easy-to-use abstraction that helps you quickly create server parts for web and mobile applications in AWS. Using GraphQL Transform, you define the data model of your application using the GraphQL Schema Definition Language (SDL), and the library handles the conversion of the SDL definition to a set of fully descriptive AWS CloudFormation templates that implement your data model.

It's time to test it in practice! Therefore, we write the command in the console

`amplify mock api`

![mockapi](https://res.cloudinary.com/practicaldev/image/fetch/s--Y5-rkmnt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/3124/1%2Afs-GeUIaPGVP3-5Jwi3m2Q.png)

With this team, you can quickly test your achievements of change without the need to allocate or update the cloud resources that you use at each stage. In this way, you can configure unit and integration tests that can be performed quickly without affecting your cloud backend.

 [Details](https://dev.to/playra/crud-create-read-update-delete-aws-amplify-graphql-react-native-4m2b)
 
## Step 6 - We start the project 🚀
iOS

`react-native run-ios`

Android

`react-native run-android`


## Done ✅

