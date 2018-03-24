// @flow
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';


const styles = StyleSheet.create({
    aboutContainer: {
        minHeight: '30vh',
        textAlign: 'center',
    },
    imgResto: {
      maxWidth: '100%',
      minHeight: '25vh'
    },
    gridItem: {
        padding: 50,
        minHeight: '30vh'
    }
});

class AboutUs extends Component<*> {
    render() {
        return (
            <section className={css(styles.aboutContainer)}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <div className={css(styles.gridItem)}>
                        <img src="https://i.goopics.net/a5Aqe.png" className={css(styles.imgResto)} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={css(styles.gridItem)}>
                        <h1>Qui sommes nous</h1>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Aliquid asperiores cum eius et exercitationem fugiat,
                            laudantium nostrum quam quia quod.
                            Adipisci autem eveniet nemo odio,
                            perferendis repellat sit suscipit vero.
                        </p>
                    </div>
                </Grid>
            </Grid>
            </section>
        );
    }
}

export default AboutUs;
