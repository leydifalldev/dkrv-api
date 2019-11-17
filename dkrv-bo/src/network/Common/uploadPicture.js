import gql from "graphql-tag";

export const UPLOAD_PICTURES = gql`
  mutation UploadFile($files: FileInput!, $entity: String, $id: String) {
    uploadPictures(files: $files, entity: $entity, id: $id) {
      status
    }
  }
`;
