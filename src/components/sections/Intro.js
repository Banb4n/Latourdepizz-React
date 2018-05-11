// @flow
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from '../styleguide/Button';
import zINDEX from '../styleguide/constStyles/zindex';

const styles = StyleSheet.create({
    introContainer: {
        width: '100%',
        padding: '19px 0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zINDEX: zINDEX.front,
        position: 'absolute',
        bottom: 0,
        marginBottom: 0,
    },
    introContent: {
        color: 'dimgrey'
    },
    btnIntro: {
        marginTop: '50px'
    }
});

class Intro extends Component<*, *> {
    render() {
        return (
            <section className={css(styles.introContainer)}>
                <div className={css(styles.introContent)}>
                    <Button content={'Qui sommes nous'} className={styles.btnIntro} />
                </div>
            </section>
        );
    }
}

export default Intro;
