import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import UserForm from './UserForm';
import { UserFormData } from '../../types/types';

interface UserModalProps {
  open: boolean;
  title: string;
  initialData?: UserFormData;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const UserModal: React.FC<UserModalProps> = ({ open, title, initialData, onClose, onSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-modal-title"
    >
      <Box sx={modalStyle}>
        <Typography id="user-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <UserForm
          initialData={initialData}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </Box>
    </Modal>
  );
};

export default UserModal;