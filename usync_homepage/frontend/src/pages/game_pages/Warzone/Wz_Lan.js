import longunderline from '../../../website_images/games/long-underline.png';
import '../Lan.css';
import Footer from '../../../Footer'; // DONT FORGET TO ADD TO THE BOTTOM!!!!!!!
const Wz_Lan = () => {
    return (
        <div>
            <div className="Background-lans">
                <h1 className='Lan'>Warzone LANs</h1>
                <img src={longunderline} alt="Long Underline" className='long-underline' /> <br />
                <iframe src="https://www.google.com/maps/d/u/6/embed?mid=1a5JsmB31CsSiOh4SWPvXNfESQdpvrvA&ehbc=2E312F" width="640" height="480" className='LanMap'></iframe>
            </div>
        </div>
    );
}

export default Wz_Lan;