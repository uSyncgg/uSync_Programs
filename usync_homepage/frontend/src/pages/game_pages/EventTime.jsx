import React from 'react';

function EventTime(props) {
    const { time } = props;

    const [hours, minutesAMPM] = time.split(':');
    const minutes = minutesAMPM.split(' ');
    // const formattedHours = hours.padStart(2, '0');
    // const formattedTime = `${formattedHours}:${minutes}`;
    let hrs = parseInt(hours, 10);

    if (hrs < 10) {
        hrs = "0" + hours;
    }

    let formattedTime = hours + ":" + minutes;

    // const date = new Date(props.time);
    let date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let formatter = {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZoneName: "short"
    };

    let timeString = new Intl.DateTimeFormat([], formatter).format(date);


    // const formatter = new Intl.DateTimeFormat(undefined, {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     hour12: true,
    //     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    //     timeZoneName: "short"
    // });

    // const parts = formatter.formatToParts(new Date(`2023-04-03T${formattedTime}:00`));
    // const formattedTime = parts
    //     .filter(part => part.type === 'hour' || part.type=== 'minute' || part.type === 'dayPeriod')
    //     .map(part => part.value)
    //     .join(' ');

    
    // let ampm = '';

    // parts.forEach(part => {
    //     if (part.type === 'hour') {
    //         formattedTime += part.value;
    //     }

    //     if (part.type === 'minute') {
    //         formattedTime += ':' + part.value;
    //     }
        
    //     if (part.type === 'dayPeriod') {
    //         ampm = part.value;
    //     }
    // })

    return ( 
        <span>
            {timeString}
        </span>
    );
}

export default EventTime;