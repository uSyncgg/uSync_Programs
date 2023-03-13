import longunderline from '../../../website_images/games/long-underline.png';
import '../Lan.css';

const Cod_Lan = () => {
    return (
        <div>
            <div className="Background-mid">
                <h1 className='Lan'>Call of Duty LANs</h1>
                <img src={longunderline} alt="Long Underline" className='long-underline' /> <br />
                <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1GEf0IzpwDFmiA-Snc7WsoH_nbqPvNhU&ehbc=2E312F" width="640" height="480" className='LanMap'></iframe>
            </div>
        </div>
    );
}

export default Cod_Lan;