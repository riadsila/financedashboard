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
