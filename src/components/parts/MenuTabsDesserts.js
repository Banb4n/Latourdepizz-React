// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';

class MenuTabsDesserts extends Component<*> {
    static STYLES = StyleSheet.create({
        containerMenuTabsDesserts: {
            padding: 12
        },
        paddingGrid: {
            padding: '10px 0'
        }
    });
    render() {
        const { STYLES } = MenuTabsDesserts;
        return (
            <div className={css(STYLES.containerMenuTabsDesserts)}>
                <div className={css(STYLES.paddingGrid)}>
                    <Grid container wrap="wrap" alignItems={'center'} justify={'center'} spacing={40}>
                        <Grid item>
                            <CardDishes title='Desserts CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Desserts CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Desserts CC' price={8.50} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

MenuTabsDesserts.propTypes = {};

export default MenuTabsDesserts;
