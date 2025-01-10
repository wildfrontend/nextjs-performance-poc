'use client';

import { LinearProgress, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography color="text.secondary" variant="body2">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearProgressItem: React.FC = () => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack spacing="16px">
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <Box sx={{ width: '100%' }}>
        <LinearProgress
          value={progress}
          valueBuffer={buffer}
          variant="buffer"
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    </Stack>
  );
};

export default LinearProgressItem;
