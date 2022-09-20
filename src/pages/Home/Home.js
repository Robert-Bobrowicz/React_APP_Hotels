export default function Home(props) {
    return (
        <>
        <h2>Hotels</h2>
        {lastSeenHotel ? <LastSeenHotel {...lastSeenHotel} onRemove={removeLastSeenHotel} /> : null}
        {getBestHotel() ? <BestHotel getBestHotel={getBestHotel} /> : null}
        <Hotels onOpen={openHotel} hotels={hotels} />
      </>
    )
}