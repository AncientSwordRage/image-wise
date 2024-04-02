import React, { ChangeEventHandler, UIEventHandler, useReducer } from 'react';
import {
  Button,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import UploadButton from '../components/UploadButton';

enum FormFields {
  NAME = 'name',
  IMAGES = 'images',
}

type GalleryFormState = Partial<Record<Extract<FormFields, FormFields.NAME>, string>>
  & Partial<Record<Extract<FormFields, FormFields.IMAGES>, string[]>>;

function formReducer(state: GalleryFormState, action: { type: FormFields, payload: string }) {
  const { type, payload } = action;
  if (type === FormFields.IMAGES) {
    (state[type] ?? []).push(payload);
  } else {
    state[type] = payload;
  }
  return state;
}

export function GalleryForm() {
  const [state, dispatch] = useReducer(formReducer, {});
  function readFiles(files: File[], reader: FileReader) {
    // if we still have files left
    if (files.length > 0) {
      // remove first from queue and store in file
      var file = files.shift();
      // when finished reading file, call recursive readFiles function
      reader.onloadend = function (loadEvent: ProgressEvent<FileReader>) {
        const currentImages = state[FormFields.IMAGES]
        const { result = undefined } = loadEvent?.target ?? {};
        if (result && typeof result === 'string') {
          dispatch({ type: FormFields.IMAGES, payload: [...currentImages, result] });
          readFiles(files, reader);
        }
      }
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  const saveImages: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { files } = target ?? {};
    console.log(target)
    if (files?.length === 0) {
      return undefined;
    } else if (files) {
      const fileReader = new FileReader();
      readFiles([...files], fileReader);
    }
  }

  return <Grid container direction="column" spacing={3}>
    <Grid item component={Typography} variant="h6">Form here</Grid>
    <Grid item container direction="row" spacing={2}>
      <Grid item component={InputLabel}>Gallery Name</Grid>
      <Grid
        item
        component={Input}
        id="new-gallery-name"
        value={state.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({ type: FormFields.NAME, payload: event.target.value });
        }}></Grid>
    </Grid>
    <Grid item container direction="row" spacing={2}>
      <Grid item component={InputLabel}>Upload images</Grid>
      <Grid
        item
        component={UploadButton}
        id="new-gallery-images"
        label="Upload images"
        onChange={saveImages}></Grid>
    </Grid>
  </Grid>;
}
