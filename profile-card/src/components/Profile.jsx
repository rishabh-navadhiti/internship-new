const Profile = ({name, age, profession, imgSrc}) => {


    const imgStyle = {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '15px',
        border: '3px solid #393c54',
    };

    const nameStyle = {
        color: '#9fafff',
        marginBottom: '8px',
    };

    const textStyle = {
        color: '#d1d1e0',
        margin: '4px 0',
        fontWeight: '700',
    };

    return (
        <div className="profile" >
            <img src={imgSrc} style={imgStyle}/>
            <h3 style={nameStyle}>{name}</h3>
            <p style={textStyle}>{age}</p>
            <p style={textStyle}>{profession}</p>
        </div>
    )
}

export default Profile;