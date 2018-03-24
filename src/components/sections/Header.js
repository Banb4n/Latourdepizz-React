// @flow
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../../assets/App.css';
import zINDEX from '../styleguide/constStyles/zindex'

const styles = StyleSheet.create({
    headerContainer: {
        height: '100vh',
        maxWidth: '100%',
        color: 'white',
        zIndex: zINDEX.normal,
        marginTop: '-20px'
    },
    bgImage: {
        backgroundImage: `linear-gradient(
            rgba(5, 5, 5, 0.1), 
            rgba(5, 5, 5, 0.1)), 
            url(https://scottsdalerealestate.com/wp-content/uploads/2016/05/412086.jpg)`,
        backgroundSize: 'cover'
    },
    headerContent: {
        top: '40vh',
        transform: 'translateY(-40%)',
        position: 'relative'
    },
});

class Header extends Component<*> {
    render() {
        return (
            <header className={css([styles.headerContainer, styles.bgImage])}>
                <div className={css(styles.headerContent)}>
                    <h1>Welcome to our restaurant</h1>
                </div>
            </header>
        );
    }
}

export default Header;
