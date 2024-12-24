const calculateTimeLeft = (createdAt) => {

    const deadline = new Date(createdAt).getTime() + 48 * 60 * 60 * 1000
    const now = new Date().getTime()
    const difference = deadline - now

    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            hours: Math.floor(difference / (1000 * 60 * 60)),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    return timeLeft
}

const updateCountdown = (createdAt) => {
    const timeLeft = calculateTimeLeft(createdAt)
    const formattedTime = `${timeLeft.hours || '0'}h ${timeLeft.minutes || '0'}m ${timeLeft.seconds || '0'}s`
    return formattedTime
}

export { calculateTimeLeft, updateCountdown }