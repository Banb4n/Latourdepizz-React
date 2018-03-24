import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { StyleSheet, css } from 'aphrodite';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import BGColor from './constStyles/bgColor';

const styles = {
    root: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function NavbarApp(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar position="fixed" className={css(BGColor.darkGrey)}>
                <Toolbar className={classes.root}>
                    <Typography variant="title" color="inherit">
                        La tour de pizz'
                    </Typography>
                    <Button color="inherit">Notre carte</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavbarApp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarApp);