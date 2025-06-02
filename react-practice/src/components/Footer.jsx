const Footer = () => {
    const displayDate = () => {
        const date = new Date();
        return `
        ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}
        `;
    }
    const date2 = new Date();
    console.log(date2);
    return (
        <footer>
            <p>My Blog Page</p>
            {/* <p>{displayDate()}</p> */}
            <p>{date2.getFullYear()}</p>
        </footer>
    )
}

export default Footer;