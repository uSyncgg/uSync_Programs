import './FAQ.css'

const FAQ = () => {
  return (
    <div>
        <div className="total-container-FAQ">
        <div className="container-fluid">
            <div className="row FAQ-container">
                <div className="col-sm-4">
                    <h4 className='FAQ-header-text'>Articles</h4>
                    <div className="images-container">
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                    </div>

                    <h4 className="FAQ-header-text">Games</h4>
                    <div className="images-container">
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                    </div>

                    <h4 className="FAQ-header-text">Socials</h4>
                    <div className="socials-images-container">
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
                       <img className='FAQ-img' src="https://i.imgur.com/5riYNow.png" alt="img" />
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
                        <h6 className="FAQ-q">Q: </h6>
                        <h6 className="FAQ-a">A: </h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: </h6>
                        <h6 className="FAQ-a">A: </h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: </h6>
                        <h6 className="FAQ-a">A: </h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: </h6>
                        <h6 className="FAQ-a">A: </h6>
                    </div>
                    <div className="FAQ-text-container">
                        <h6 className="FAQ-q">Q: </h6>
                        <h6 className="FAQ-a">A: </h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FAQ