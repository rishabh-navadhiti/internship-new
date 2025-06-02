const Footer = () => {
    const displayDate = () => {
        const date = new Date();
        return `
        ${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}
        `;
    }

    return (
        <footer>
            <p>My Blog Page</p>
            <p>{displayDate()}</p>
        </footer>
    )
}

export default Footer;