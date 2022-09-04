import React from "react";
import styles from './Hotel.module.css';
import img from '../../../assets/images/pexels-bruno-maceiras-2467558.jpg';

function Hotel(props) {
    return (
        <div className={`${styles.hotel} card`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img className={`img-fluid img-thumbnail`} src={img} alt="Hotel 1" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{props.name}</p>
                                <span className="badge bg-primary">{props.city}</span>
                            </div>
                            <div className="col">
                                <p>Rating: {props.rating}</p>
                                <span className="badge bg-secondary">Reviews: 234</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>
                            {props.description}
                        </p>
                        <a href='www.booking.com' className="btn btn-primary float-start px-5">View deals</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hotel;