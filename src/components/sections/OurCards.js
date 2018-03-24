// @flow
import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Grid from 'material-ui/Grid';
import CardDishes from '../parts/CardDishes';
import BOXES from "../styleguide/constStyles/boxes";
import Tabs from '../Tabs'
import CompleteCards from "./CompleteCards";

class OurCards extends Component<*> {
    static STYLES = StyleSheet.create({
       containerCards: {
           minHeight: '85vh',
           backgroundColor: 'lightgrey',
           padding: 30
       },
       containerTabs: {
           marginTop: 30
       }
    });
    render() {
        const { STYLES } = OurCards;
        return (
            <div className={css(STYLES.containerCards)}>
                <h1>Our Cards</h1>
                <div className={css(STYLES.containerTabs)}>
                    <Tabs />
                </div>
                <CompleteCards />
                {/*<Grid container wrap="nowrap">*/}
                    {/*<Grid item>*/}
                        {/*<CardDishes title='Pizza CC' price={8.50} />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                        {/*<CardDishes title='Pizza CC' price={8.50} />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                        {/*<CardDishes title='Pizza CC' price={8.50} />*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
            </div>
        );
    }
}

OurCards.propTypes = {};

export default OurCards;
