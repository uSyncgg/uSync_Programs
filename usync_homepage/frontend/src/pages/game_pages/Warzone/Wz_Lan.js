import '../Lan.css';
const Wz_Lan = () => {
    return (
        <div>
            <a href='http://localhost:3000/games/warzone'>
                <button type="submit" className='info-button-lans'>Back to Games</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Wz_Lan;