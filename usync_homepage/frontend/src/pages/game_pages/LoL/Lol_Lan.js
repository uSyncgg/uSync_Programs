import '../Lan.css';
const Lol_Lan = () => {
    return (
        <div>
            <a href='http://localhost:3000/games/LoL'>
                <button type="submit" className='info-button-lans'>Back to Games</button>
            </a>
            <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1CFHyDVMbDSwBAX2_cz3KqiCm0UY9aQQ&ehbc=2E312F" className='LanMap'></iframe>
        </div>
    );
}

export default Lol_Lan;
