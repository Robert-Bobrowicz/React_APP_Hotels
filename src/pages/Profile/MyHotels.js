import { Link, useLocation } from 'react-router-dom';

export default function MyHotels(props) {
    const {pathname} = useLocation();

    return (
        <>
            <p>My hotels</p>
            <Link to={`${pathname}/add-new`} className='btn btn-primary'>Add new hotel</Link>
        </>

    )
}