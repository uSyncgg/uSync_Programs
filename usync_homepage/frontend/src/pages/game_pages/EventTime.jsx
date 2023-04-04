import React from 'react';

function EventTime(props) {
    const { time } = props;

    const [hours, minutes] = time.split(':');
    const formattedHours = hours.padStart(2, '0');
    const formattedTime = `${formattedHours}:${minutes}`;
    const date = new Date(props.time);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formatter = new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const parts = formatter.formatToParts(new Date(`2023-04-03T${formattedTime}:00`));
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
        <div>
            {parts}
        </div>
    );
}

export default EventTime;