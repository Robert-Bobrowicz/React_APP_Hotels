import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

class Hotels extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {      //PureComponent zastąpił Component i shouldComponentUpdate
    //     if (this.props.hotels === nextProps.hotels) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    count = this.props.hotels.length;

    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Explore our offers ({this.count})</h2>
                {this.props.hotels.map(hotel =>
                    <Hotel
                        onOpen= {this.props.onOpen}
                        key={hotel.id}
                {...hotel} />
                )}
            </div>
        )
    }
}

Hotels.propTypes = propTypes;

export default Hotels;