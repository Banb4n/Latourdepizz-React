// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';

class MenuTabsPizza extends Component<*> {
    static STYLES = StyleSheet.create({
        containerMenuTabsPizza: {
            padding: 12
        },
        paddingGrid: {
            padding: '10px 0'
        }
    });
    render() {
        const { STYLES } = MenuTabsPizza;
        return (
            <div className={css(STYLES.containerMenuTabsPizza)}>
                <div className={css(STYLES.paddingGrid)}>
                    <Grid container wrap="wrap" alignItems={'center'} justify={'center'} spacing={40}>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={12.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={11.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Pizza CC' price={13.50} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

MenuTabsPizza.propTypes = {};

export default MenuTabsPizza;
