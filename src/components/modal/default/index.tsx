import { Box, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useFetchRandomTodo } from '@/apis/dummyjson/todo/client';

const DefaultModal: React.FC = () => {
  const { data } = useFetchRandomTodo();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (data) {
      handleOpen();
    }
  }, [data]);

  return (
    <Modal
      aria-describedby="modal-modal-description"
      aria-labelledby="modal-modal-title"
      onClose={handleClose}
      open={open}
    >
      <Box sx={{ width: '500px', height: '400px', margin: '0 auto' }}>
        <Image
          alt="1"
          height={450}
          src={
            'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
          }
          width={600}
        />
        <Typography component="h2" id="modal-modal-title" variant="h6">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default DefaultModal;
