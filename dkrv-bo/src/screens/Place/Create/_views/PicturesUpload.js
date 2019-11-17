import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/react-hooks";
import { useUpload } from "react-use-upload";
import { UPLOAD_PICTURES } from "../../../../network";

export const PlacePicturesUpload = ({ stepperStore }) => {
  let [files, setFiles] = useState();

  const [uploadFiles] = useMutation(UPLOAD_PICTURES);
  const { enqueueSnackbar } = useSnackbar();

  const onChange = async ({ target: { files, validity } }) => {
    if (validity.valid) {
      try {
        await uploadFiles({
          variables: { files, entity: "place", id: stepperStore.placeid }
        });
      } catch (e) {
        enqueueSnackbar(String(e), { variant: "error" });
      }
    }
  };

  return (
    <div>
      <div>GraphQL Test</div>
      <input type="file" onChange={onChange} multiple />
    </div>
  );
};
