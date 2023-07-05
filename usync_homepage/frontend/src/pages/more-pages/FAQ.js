import './FAQ.css'

const FAQ = () => {
  return (
    <div>
        <div className="total-container-FAQ">
        <div className="container-fluid">
            <div className="row FAQ-container">
                <div className="col-sm-4">
                    <h4 className='FAQ-header-text'>Articles</h4>
                    <div className="container-border">
                        <div className="images-container">
                            <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                        </div>
                    </div>
                    <h4 className="FAQ-header-text">Games</h4>
                    <div className="container-border">
                        <div className="images-container">
                            <img className='FAQ-img' src="https://i.imgur.com/CsoQufa.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/wqKJfEu.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/BIs3u5h.png" alt="img" />
                        </div>
                        <div className="images-container">
                            <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/GJO8JIZ.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/Gsl3oIp.png" alt="img" />
                        </div>
                    </div>
                    

                    <h4 className="FAQ-header-text">Socials</h4>
                    <div className="container-border">
                        <div className="images-container">
                            <img className='FAQ-img' src="https://i.imgur.com/YhpeqKK.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/YOav7r1.png" alt="img" />
                            <img className='FAQ-img' src="https://i.imgur.com/BgGzaKS.png" alt="img" />
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-8">
                    <h4 className="FAQ-header-text">FAQ</h4>
                    <div className="FAQ-text-container-top">
                        <h6 className="FAQ-q">Q: How to sign up?</h6>
                        <h6 className="FAQ-a">A: You can sign up directly through the links provided. 
                            You will be redirected to the given host where you can register. 
                            Please feel free to contact us.</h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: How to Start?</h6>
                        <h6 className="FAQ-a">A: Once you know what game you want to participate in, click 'Join Now', Register, and sign up. Please feel free to contact us.</h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: What's the easiest way to navigate the site?</h6>
                        <h6 className="FAQ-a">A: The best way to navigate the site is either going page-to-page or watching this short video. <a className='FAQ-link' href="/">Link</a></h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: Best way to learn the rules?</h6>
                        <h6 className="FAQ-a">A: Luckily, we include game rules on our site. <a className='FAQ-link' href="/">Link</a></h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: How to enter a league?</h6>
                        <h6 className="FAQ-a">A: The league you wish to join will explain everything on the host site. We also explain it in short-terms on the select league page.</h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: What is uSync Verified?</h6>
                        <h6 className="FAQ-a">A: uSync verified is a verification feature for hosts to lead the others as a form of status that allows a safe environment for players. <a className='FAQ-link' href="/">learn more</a></h6>
                    </div>
                    <button className='FAQ-button'>Join The Fun ></button>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default FAQ