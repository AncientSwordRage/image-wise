import { Button, styled } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEventHandler } from "react";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadButton = ({ label, id, onChange }: { label: string, id: string, onChange: ChangeEventHandler<HTMLInputElement> }) => {
    return (<Button
        component="label"
        id={`${id}-button`}
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
    >
        {label}
        <VisuallyHiddenInput
            accept="image/*"
            id={`${id}-input`}
            multiple
            type="file"
            onChange={onChange}
        />
    </Button>)
}

export default UploadButton;