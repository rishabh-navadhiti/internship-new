const  Places = ({places}) => {
    return (
        <ul>
            {places.map(place => <li key={place}>{place}</li>)}
        </ul>
    )
}

const Content = ({styles, places}) => {
    return (
        <div className="content">
            <p style={styles}>Welcome to my Blog</p>
            <p style={styles}>This is a simple React application.</p>
            <h3>The places I have visited</h3>
            <Places places={places} />
        </div>
    )
}

export default Content;