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
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ width: '500px', height: '400px', margin: '0 auto' }}>
        <Image
          width={600}
          height={450}
          src={
            'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA'
          }
          alt="1"
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
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
