# aws-amplify-react-hooks
AWS Amplify react &amp;&amp; react-native hooks

# Installation

`npm install aws-amplify-react-hooks`

Or if using [yarn](https://yarnpkg.com/en/)


`yarn add aws-amplify-react-hooks`

# Example

```bash
git clone git@github.com:react-native-village/aws-amplify-react-hooks.git
cd examples/reactNativeCRUD
yarn
react-native run-ios
react-native run-android
```

# API
## AmplifyProvider

Similar to
[ApolloProvider from react-apollo](https://www.apollographql.com/docs/react/essentials/get-started.html#creating-provider).
In order for this package to work, you need to wrap your component tree with
`AmplifyProvider` at an appropriate level, encapsulating all components which
will use hooks.
