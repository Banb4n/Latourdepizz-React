import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from './styleguide/Button'
import MenuTabsPizza from "./parts/MenuTabsPizza";
import MenuTabsEntrees from "./parts/MenuTabsEntrees";
import MenuTabsPlats from "./parts/MenuTabsPlats";
import MenuTabsDesserts from "./parts/MenuTabsDesserts";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: 'transparent',
        width: '100%'
    },
    appBarTabs: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'static',
        height: '60px'
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.appBarTabs}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                        centered
                    >
                        <Tab label="Pizza" />
                        <Tab label="Entrées" />
                        <Tab label="Plats" />
                        <Tab label="Desserts" />
                    </Tabs>
                </div>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <MenuTabsPizza />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <MenuTabsEntrees />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <MenuTabsPlats />
                    </TabContainer>
                    <TabContainer dir={theme.direction}>
                        <MenuTabsDesserts />
                    </TabContainer>
                </SwipeableViews>
                <Button content={'Voir la carte complete'} className={styles.btnIntro} />
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
