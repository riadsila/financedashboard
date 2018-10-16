import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

  static defaultProps = {
        onDone() {}
  }

  constructor(props) {
   super(props);
   this.state = {
            emojiClicked: false,
            highlightedEmoji: {
              bad: "",
              okay: "",
              good: ""
            },
            reviewComments: '',
            isSubmitted: false
   };

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
 }

  submitEmojiReview = ( review ) => {
   let highlightedEmoji = {
        bad: "",
        okay: "",
        good: ""
   }
   highlightedEmoji[review] = "-clicked";
   this.setState({highlightedEmoji: highlightedEmoji});

   /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   ADD in API call here to capture emoji reviews
   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1*/
 }

 handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
       e.preventDefault();
       this.props.onDone({...this.state});
       this.setState({
           reviewComments: '',
           isSubmitted: true
       });

       /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       ADD in API call here to capture feedback
       //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1*/
   }

  render() {

    const isSubmitted = this.state.isSubmitted;

    return (
      <div className="App">
        <div className="container pb-4">
          <div className="col-md-8 offset-md-2">
            <h3 className="text-left pl-2">Overview</h3>
            <div className="row m-0">
              <div className="col-md-6 pl-md-0">
                <div className=" card mb-4 shadow-sm h-md-250">
                  <div className="card-body">
                      <p className="d-inline-block mb-1 text-muted">Account balance</p>
                      <h2 className="mb-0 text-dark mb-2">£119.34</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6 pr-md-0">
                <div className="card mb-4 ml-md-auto shadow-sm h-md-250">
                  <div className="card-body">
                      <p className="d-inline-block mb-1 text-muted">Days until payday</p>
                      <h2 className="mb-0 text-dark mb-2">14</h2>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-left pl-2"><strong>Spending Analysis</strong></p>
            <div class="card mb-4 shadow-sm">
              <div class="card-body d-flex flex-column align-items-start">
                  <p className="text-left">See how your finances compare with people like you.</p>
                  <Chart />
                  <p className="text-left">The chart above shows how much you spent last month compared with people whose income is similar to yours.</p>
              </div>
            </div>

            <p className="text-left pl-2"><strong>Want to earn some money?</strong></p>
            <div class="card mb-4 p-4 shadow-sm">
            <p className="mb-3 text-left">{"We at Zipper are always looking for ways to help you make a little bit of extra dosh. We've got some exclusive opportunities for you to make a quick quid in your spare time. "}</p>
            <div class="card-group">
              <div class="card">
                <img class="card-img-top" style={{height: '100px'}} src="referafriend.jpg" alt="referral" />
                <div class="card-body text-left">
                  <h5 class="card-title">Refer a friend</h5>
                  <p class="card-text" style={{fontSize: '0.8em'}}>{"Share Zipper with your friends and earn up to £50!"}<br /><br />{"We'll give you £5 in cash for every friend you introduce to Zipper. You'll get the money as soon as they repay their first loan. Just tell your friends to message our online chat and say you referred them."}</p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top" style={{height: '100px'}} src="dogwalking.png" alt="dogwalking" />
                <div class="card-body text-left">
                  <h5 class="card-title">Walk a dog</h5>
                  <p class="card-text" style={{fontSize: '0.8em'}}>Sign up for Rover and get paid to play with dogs!<br /><br />Turn extra time into extra cash by walking or sitting dogs in your neigbourhood. Sign up using the link below to get an extra £20.</p>
                  <a href="http://share.rover.com/pnNgJ" target="_blank"><button type="button" class="btn btn-success btn-sm">Sign up</button></a>
                </div>
              </div>
              <div class="card">
                <img class="card-img-top"  style={{height: '100px'}} src="onlinesurveys.png" alt="onlinesurveys" />
                <div class="card-body text-left">
                  <h5 class="card-title">Fill in surveys</h5>
                  <p class="card-text" style={{fontSize: '0.8em'}}>Earn cash and gift cards by completing tasks online. <br /><br />Swagbucks pays you for shopping online and in person, watching videos, taking surveys, donating to charity, searching the web, and playing games online. Get a free £5 using the link below.</p>
                  <a href="http://www.swagbucks.com/p/register?rb=47594485" target="_blank"><button type="button" class="btn btn-success btn-sm">Sign up</button></a>
                </div>
              </div>
              </div>
            </div>

            <div class="card shadow-sm">
              <div class="card-body">
                  <p className="mb-1" style={{fontSize:'12px'}}>{"Did you find this useful?"}</p>
                  <span onClick= {()=> this.submitEmojiReview("bad")} className={"face-review" + this.state.highlightedEmoji.bad}>🙁</span>
                  <span onClick= {()=> this.submitEmojiReview("okay")} className={"face-review" + this.state.highlightedEmoji.okay}>😐</span>
                  <span onClick= {()=> this.submitEmojiReview("good")} className={"face-review" + this.state.highlightedEmoji.good}>😃</span>


                  { isSubmitted ? (
                      <p>Thanks for your feedback!</p>
                    ) : (
                      <form onSubmit={this.handleSubmit} class=" mt-3">
                        <div class="form-group row mb-2">
                          <div className="col-md-10 mb-2">
                            <input type="text" value={this.state.reviewComments} onChange={this.handleChange} name="reviewComments" style={{fontSize:'12px'}} class="form-control" id="review" placeholder="Anything else you'd like to share with us..." />
                          </div>
                          <div className="col-md-1">
                            <button type="submit" class="btn btn-primary mb-2">Submit</button>
                          </div>
                        </div>
                      </form>
                    )
                  }

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
