function displayExpiry(expiry) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const exp = expiry.split('');
    if (expiry[1] == 'h') {
        hours += parseInt(exp[0]);
    } else if (expiry[1] == 'm') {
        minutes += parseInt(exp[0]);
    } else if (expiry[1] == 's') {
        seconds += parseInt(exp[0]);
    }
    if (seconds >= 60) {
        seconds -= 60;
        minutes += 1;
    }
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    if (hours >= 24) {
        hours -= 24;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

module.exports = displayExpiry;