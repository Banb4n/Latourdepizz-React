// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class CompleteCards extends Component<*> {
    static STYLES = StyleSheet.create({
        containerCompleteCards: {
            position: 'fixed',
            top: 0,
            left: 0,
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1200,
            display: 'none'
        }
    });

    render() {
        const { STYLES } = CompleteCards;

        return (
            <section className={css(STYLES.containerCompleteCards)}>
                <h1>This is the complete cards</h1>
            </section>
        );
    }
}

export default CompleteCards;
