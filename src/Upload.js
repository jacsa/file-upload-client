import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'


const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
        filename
        mimetype
        encoding
    }
  }`;
  
  const handleChange = async ( event, mutation ) => {
    const {
      target: {
        validity,
        files: [file],
      }
    } = event;
    
    if (validity.valid) {
      // Call graphql API
      const { data: { uploadSingleFile } } = await mutation({
        mutation: UPLOAD_FILE,
        variables: { file },
        fetchPolicy: 'no-cache',
      });
      // Use uploadSingleFile response
    }
  };
  
  const UploadFile = ({ onChange, ...rest }) => {
  return (
    <Mutation mutation={UPLOAD_FILE} fetchPolicy="no-cache">
      { (mutation, { loading }) => (
        <input
            type="file"
            required
            onChange={event => handleChange(event, mutation)} />
      ) }
    </Mutation>
  );
};

export default UploadFile;