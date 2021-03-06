import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
// import DashImage from '../../static/img/trasa-bluebg.svg';
import ThemeBase from '../muiTheme';

const useStyles = makeStyles((theme) => ({
  background: {
    // padding: theme.spacing(6),
    // maxWidth: 1500,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // background: '#f5f6ff',
  },
  ctaPad: {
    marginTop: 20,
  },

  sideImage: {
    boxShadow: '0 0 20px 0 rgba(0,0,0,0.12)',
    marginTop: theme.spacing(3),
    // padding: theme.spacing(2),
    backgroundColor: 'white',
  },
  contained: {
    color: 'white',
    backgroundColor: '#000080',
    fontWeight: 600,
    //  fontSize: '14px',
    boxShadow: 'none',
    // '&:active': {
    //   boxShadow: 'none',
    //   backgroundColor: '#000080',
    // },
    '&:hover, &:focus': {
      color: 'white',
      //  backgroundColor: '#000066',
      // boxShadow: '0 0 10px #030417',
    },
  },
}));

export default function MainCta() {
  const imgUrl = useBaseUrl('dash/access-stats.png');
  const classes = useStyles();
  return (
    <ThemeBase>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.background}
      >
        <Grid item xs={12} sm={12} md={5}>
          <div className={classes.ctaPad}>
            <Typography variant="h1" component="h1">
              zero trust access
            </Typography>
            {/* <Typography variant="h3" component="h3">
              secure remote access to Web, SSH, RDP and Database services
            </Typography> */}

            <Typography variant="subtitle1" style={{ textAlign: 'center' }}>
              Identity aware access proxy, privileged access management, two-factor authentication,
              device trust, and policies that enable secure remote access to Web, SSH, RDP, and
              Database services.
            </Typography>

            <Grid item xs={12}>
              <Grid container spacing={0} direction="row" alignItems="center" justify="center">
                {/* <Grid item xs={4}>
                  <Link
                    className={clsx('button  button--md', classes.contained)}
                    to={useBaseUrl('blog/2020/09/22/why-zero-trust-network-access-ztna')}
                  >
                    Why do I need this?
                  </Link>
                </Grid> */}

                <Grid item xs={4}>
                  <Link
                    className={clsx('button  button--lg', classes.contained)}
                    to={useBaseUrl('docs/')}
                  >
                    Get Started
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={7}>
          <div className={classes.sideImage}>
            <img src={imgUrl} alt="dashboard" />
          </div>
        </Grid>
      </Grid>
    </ThemeBase>
  );
}
