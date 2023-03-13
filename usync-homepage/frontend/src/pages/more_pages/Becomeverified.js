

const Becomeverified = () => {
    return (
        <div className="container">
          <h1>Verification Request</h1>
          <p>submit your verification request to become a uSync Verified Provider</p><br />
          <div className="become-verified-form">
            <form action="/" method="post">
              <div className="form-question">
                <label htmlFor="company-name">Company Name</label><br />
                <input type="text" name="comp-name" id="company-name" placeholder="Your answer" required/>
              </div>
              <div className="form-question">
                <h1>Event Type</h1>
                <p>You may select multiple</p><br />
                <label htmlFor="LAN">LAN</label>
                <input type="checkbox" name="event-type" id="LAN"/><br />
                <label htmlFor="League">League</label>
                <input type="checkbox" name="event-type" id="League"/><br />
                <label htmlFor="Wager">Wager</label>
                <input type="checkbox" name="event-type" id="Wager"/><br />
                <label htmlFor="Head-to-Head">Head-to-Head</label>
                <input type="checkbox" name="event-type" id="Head-to-Head"/>
              </div>
              <div className="form-question">
                <h1>Game Title(s)</h1>
                <p>You may select multiple</p><br />
                <label htmlFor="cod">Call of Duty</label>
                <input type="checkbox" name="game-title" id="cod"/><br />
                <label htmlFor="warzone">Warzone</label>
                <input type="checkbox" name="game-title" id="warzone"/><br />
                <label htmlFor="league-of-legends">League of Legends</label>
                <input type="checkbox" name="game-title" id="league-of-legends"/><br />
                <label htmlFor="halo">Halo</label>
                <input type="checkbox" name="game-title" id="halo"/><br />
                <label htmlFor="rocket-league">Rocket League</label>
                <input type="checkbox" name="game-title" id="rocket-league"/><br />
                <label htmlFor="valorant">Valorant</label>
                <input type="checkbox" name="game-title" id="valorant"/><br />
                <label htmlFor="other">Other</label>
                <input type="checkbox" name="game-title" id="other"/><br />
              </div>
              <div className="form-question">
                <label htmlFor="become-verified-email">Email</label><br />
                <input type="email" name="verified-email" id="become-verified-email" placeholder="Your answer" required/>
              </div>
              <div className="form-question">
                <label htmlFor="become-verified-comments">Comments</label><br />
                <input type="text" name="verified-comments" id="become-verified-comments" placeholder="Your answer"/>
              </div>
              <input type="submit" value="Submit" className="btn btn-primary" id="verified-submit" name="become-verified-submit"/>
            </form>
          </div>
        </div>
      )
}

export default Becomeverified