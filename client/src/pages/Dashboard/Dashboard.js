import React from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: 'http://i68.tinypic.com/2jb1nvs.jpg',
    title: 'Casual Apparel',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1490707967831-1fd9b48e40e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=749def5b21084e6ee01beca8e6bc73a9&auto=format&fit=crop&w=1350&q=80',
    title: 'Formal',
    width: '40%',
  },
  {
    url: 'http://i65.tinypic.com/oq8zm1.jpg',
    title: 'Everyday',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2996962c8db1ab54f6998cf640db8ec&auto=format&fit=crop&w=1350&q=80',
    title: 'Colorful',
    width: '40%',
  },
  {
    url: 'https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78f4a9da162471fff0acce3b5be33393&auto=format&fit=crop&w=1350&q=80',
    title: 'Mens',
    width: '30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1490243248048-8a68b3b77805?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26f48d29b5a4bec845fbcaa9e9848a5b&auto=format&fit=crop&w=1778&q=80',
    title: 'Shoes',
    width: '30%',
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
<div>
  <Navbar />
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);
