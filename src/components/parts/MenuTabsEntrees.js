// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';

class MenuTabsEntrees extends Component<*> {
    static STYLES = StyleSheet.create({
        containerMenuTabsEntrees: {
            padding: 12
        },
        paddingGrid: {
            padding: '10px 0'
        }
    });
    render() {
        const { STYLES } = MenuTabsEntrees;
        return (
            <div className={css(STYLES.containerMenuTabsEntrees)}>
                <div className={css(STYLES.paddingGrid)}>
                    <Grid container wrap="wrap" alignItems={'center'} justify={'center'} spacing={40}>
                        <Grid item>
                            <CardDishes title='Entrées CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Entrées CC' price={8.50} />
                        </Grid>
                        <Grid item>
                            <CardDishes title='Entrées CC' price={8.50} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

MenuTabsEntrees.propTypes = {};

export default MenuTabsEntrees;
