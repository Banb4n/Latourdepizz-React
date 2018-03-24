// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

class TheOpinions extends Component<*> {
    static STYLES = StyleSheet.create({
        containerOpinions: {
            minHeight: '15vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey'
        }
    });
    render() {
        const { STYLES } = TheOpinions;
        return (
            <div className={css(STYLES.containerOpinions)}>
                <h1>The Opinions from Google API</h1>
            </div>
        );
    }
}

export default TheOpinions;
