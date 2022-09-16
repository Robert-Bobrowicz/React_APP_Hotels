import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import styles from './Hotel.module.css';
import img from '../../../assets/images/pexels-bruno-maceiras-2467558.jpg';
import ThemeContext from "../../context/themeContext";
import useAuth from "../../hooks/useAuth";

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

function Hotel(props) {
    const theme = useContext(ThemeContext);
    const [auth] = useAuth();

    const clickHandler = (e) => {
        // e.preventDefault(); 
        props.onOpen(props);
    }

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

                        {auth
                            ? <p className="mt-2">4 rooms avaiable</p>
                            : null}
                        <Link to={`/hotel/${props.id}`} onClick={clickHandler}
                            className={`btn btn-${theme} float-start px-5`}>
                            View deals
                        </Link>

                        {/* <a href='/hotel/id'
                                onClick={clickHandler}
                                className={`btn btn-${theme} float-start px-5`}>
                                View deals
                            </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

Hotel.propTypes = propTypes;

export default Hotel;