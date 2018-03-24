// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';

class Specialities extends Component<*> {
    static STYLES = StyleSheet.create({
       containerSpecialities: {
           minHeight: '50vh',
           padding: 50
       },
        paddingGrid: {
           padding: '20px 0'
        }
    });
    render() {
        const { STYLES } = Specialities;
        return (
            <div className={css(STYLES.containerSpecialities)}>
                <h1>Our Specialities</h1>
                <div className={css(STYLES.paddingGrid)}>
                    <Grid container wrap="wrap" alignItems={'center'} justify={'center'} spacing={40}>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={8.50} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Specialities;
