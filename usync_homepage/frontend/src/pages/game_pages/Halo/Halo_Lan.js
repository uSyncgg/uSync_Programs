import '../Lan.css';
const Halo_Lan = () => {
    return (
        <div>
            <a href='http://localhost:3000/games/halo'>
                <button type="submit" className='info-button-lans'>Back to Games</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1RWVPklwSmTd6iqaSgHP4LLh2WOd8Pt8&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Halo_Lan;