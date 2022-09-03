import React from "react";
import styles from './Hotel.module.css';
import img from '../../../assets/images/pexels-bruno-maceiras-2467558.jpg';

function Hotel() {
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
                                <p className={styles.title}>Robert's Apartment Old City Piwna</p>
                                <span className="badge bg-primary">Warsaw</span>
                            </div>
                            <div className="col">
                                <p>Excellent: 9.1</p>
                                <span className="badge bg-secondary">Reviews: 234</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                        </p>
                        <a href='www.booking.com' className="btn btn-primary float-start px-5">View deals</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hotel;