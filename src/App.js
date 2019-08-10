import React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink  } from 'apollo-upload-client';
import Upload from './Upload';

const link = createUploadLink({
  uri: 'http://localhost:4444/graphql'
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <Upload />
      </div>
    </ApolloProvider>
  );
}

export default App;
