// @flow
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

class SimpleModal extends React.Component<*, *> {
    props: {
        isOpen: () => boolean,
        classes: Object
    };

    state = {
        open: false
    };

    static STYLES = StyleSheet.create({
        paper: {
            position: 'absolute',
            top: '2vw',
            width: '90%',
            left: '3%',
            height: '95vh',
            padding: 18,
            backgroundColor: 'white'
        },
    });

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { STYLES } = SimpleModal;

        return (
            <div>
                <Button onClick={this.handleOpen}>Open Modal</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className={css(STYLES.paper)}>
                        <Typography variant="title" id="modal-title">
                            Text in a modal
                        </Typography>
                        <Typography variant="subheading" id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </div>
                </Modal>
            </div>
        );
    }
}


export default SimpleModal;