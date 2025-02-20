import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UserTable from './UserTable';
import UserModal from './UserModal';
import { UserFormData } from '../../types/types';
import { useUserContext } from '../../contexts/Usercontext';

const UserManagement: React.FC = () => {
  const { addUser } = useUserContext();
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  const handleAddSubmit = (formData: UserFormData) => {
    addUser(formData);
    setAddModalOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            User Management
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddClick}
          >
            Add New User
          </Button>
        </Box>

        <UserTable />

        <UserModal
          open={addModalOpen}
          title="Add New User"
          onClose={() => setAddModalOpen(false)}
          onSubmit={handleAddSubmit}
        />
      </Box>
    </Container>
  );
};

export default UserManagement;