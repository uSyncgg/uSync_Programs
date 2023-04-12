import EventTime from "../EventTime";

const Test = () => {
    const time = '3:30';

    return (
        <div>
            <p>The time is: <EventTime time={time} /></p>
        </div>
    );
}

export default Test;