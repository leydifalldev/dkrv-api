Skip to content
Search…
Material-UI
v4.5.1
Contents

Chip
Outlined Chips
Chip array
Small Chip
Default variant
Outlined variant
Chip Playground
API
Chips
Chips are compact elements that represent an input, attribute, or action.
ads via Carbon
Flag, Test & Deploy Features In Production Without Worrying! Free 14 Day Trial.
ads via Carbon

Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated here is not shown in context.

Chip
Examples of Chips, using an image Avatar, SVG Icon Avatar, "Letter" and (string) Avatar.

Chips with the onClick property defined change appearance on focus, hover, and click.
Chips with the onDelete property defined will display a delete icon which changes appearance on hover.
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label="Basic" />
      <Chip label="Disabled" disabled />
      <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label="Clickable Link" component="a" href="#chip" clickable />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
      <Chip
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label="Basic" variant="outlined" />
      <Chip label="Disabled" disabled variant="outlined" />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Clickable"
        onClick={handleClick}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
        label="Deletable"
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Clickable deletable"
        onClick={handleClick}
        onDelete={handleDelete}
        variant="outlined"
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip label="Clickable link" component="a" href="#chip" clickable variant="outlined" />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<FaceIcon />}
        label="Primary clickable"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip label="Deletable primary" onDelete={handleDelete} color="primary" variant="outlined" />
      <Chip
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
        variant="outlined"
      />
    </div>
  );
}
Chip array
An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick property is defined, the Chip can be focused, but does not gain depth while clicked or touched.

Small Chip
You can use the size prop to define a small Chip.

Default variant
Outlined variant
Chip Playground

variant
default
outlined

color
default
primary
secondary

size
medium
small

icon
none
icon

avatar
none
letter
img

onDelete
none
default
custom
<Chip variant="outlined" color="primary" />
API
<Chip />
