// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';

class MenuTabsPlats extends Component<*> {
    static STYLES = StyleSheet.create({
        containerMenuTabsPlats: {
            padding: 12
        },
        paddingGrid: {
            padding: '10px 0'
        }
    });
    render() {
        const { STYLES } = MenuTabsPlats;
        return (
            <div className={css(STYLES.containerMenuTabsPlats)}>
                <div className={css(STYLES.paddingGrid)}>
                    <Grid container wrap="wrap" alignItems={'center'} justify={'center'} spacing={40}>
                        <Grid item>
                            <CardDishes title='Plats CC' price={15.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Plats CC' price={19.90} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Plats CC' price={12.90} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

MenuTabsPlats.propTypes = {};

export default MenuTabsPlats;
