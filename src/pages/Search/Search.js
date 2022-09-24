import { useParams } from "react-router-dom"

export default function Search(props) {

    const { term } = useParams();

    // const searchHandler = term => {
    //     console.log('szukam z poziomu App', term);
    //     const newHotels = [...hotelsDB]
    //         .filter(el => el.name
    //             .toLowerCase()
    //             .includes(term.toLowerCase()));
    //     dispatch({ type: 'set-hotels', hotels: newHotels })
    // }

    return (
        <h2>Search results for "{term}"</h2>
    )
}