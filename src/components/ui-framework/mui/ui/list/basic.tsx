'use client';

import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const TextOnlyList: React.FC = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Box>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography component="div" sx={{ mt: 4, mb: 2 }}>
            Text only
          </Typography>

          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography component="div" sx={{ mt: 4, mb: 2 }}>
            Icon with text
          </Typography>

          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography component="div" sx={{ mt: 4, mb: 2 }}>
            Avatar with text
          </Typography>

          <List dense={dense}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Typography component="div" sx={{ mt: 4, mb: 2 }}>
            Avatar with text and icon
          </Typography>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton aria-label="delete" edge="end">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextOnlyList;
