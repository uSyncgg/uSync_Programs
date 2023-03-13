import longunderline from '../../../website_images/games/long-underline.png';
import '../Lan.css';

const Halo_Lan = () => {
    return (
        <div>
            <div className="Background-mid">
                <h1 className='Lan'>Halo LANs</h1>
                <img src={longunderline} alt="Long Underline" className='long-underline' /> <br />
                <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1RWVPklwSmTd6iqaSgHP4LLh2WOd8Pt8&ehbc=2E312F" width="640" height="480" className='LanMap'></iframe>
            </div>
        </div>
    );
}

export default Halo_Lan;