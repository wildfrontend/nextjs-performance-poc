'use client';

import { Box, Container, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';

import useCountdown from '@/hooks/global/count-down';

const Page = () => {
  const [targetDate, setTargetDate] = useState<Date | null>(
    new Date('2025-06-01T23:59:59')
  );
  const countdown = useCountdown(targetDate ?? new Date());

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography gutterBottom variant="h4">
        倒數計時 Demo
      </Typography>
      <Box mt={4} textAlign="center">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="選擇目標時間"
            onChange={(newValue) => setTargetDate(newValue)}
            value={targetDate}
          />
        </LocalizationProvider>
      </Box>
      <Box mt={4} textAlign="center">
        {countdown.isExpired ? (
          <Typography color="error" variant="h5">
            已過期！
          </Typography>
        ) : (
          <>
            <Typography variant="h6">倒數剩餘：</Typography>
            <Typography mt={2} variant="h3">
              {countdown.days} 天 {countdown.hours} 時 {countdown.minutes} 分{' '}
              {countdown.seconds} 秒
            </Typography>
            {countdown.isInThreeDays && (
              <Typography color="warning.main" mt={1} variant="body1">
                🔥 目標時間在 3 天內！
              </Typography>
            )}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Page;
