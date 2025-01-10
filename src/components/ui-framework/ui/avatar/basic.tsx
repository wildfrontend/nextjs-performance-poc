import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Avatar, AvatarGroup, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { green, pink } from '@mui/material/colors';
import * as React from 'react';

export default function BasicAvatar() {
  return (
    <Box>
      <Stack direction="row" spacing={4}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <PageviewIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>
        </Stack>
        <Stack direction="row">
          <AvatarGroup max={3}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </Box>
  );
}
