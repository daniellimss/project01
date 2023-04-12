import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state ={
			timeRemaining: props.duration,
			//this turns the props, duration, into a state called timeRemaining
			 
		};
	}
	
 
	runCountDown = () => { 
			if(this.state.timeRemaining == null)
    	{
        console.log("NULL")
    	}
			this.intervalId = setInterval(() => {
				let myTime = this.state.timeRemaining	
				if (myTime > 0){
					myTime--
					this.setState({timeRemaining: myTime})
					
					console.log(myTime)
				} else {
					clearInterval(this.intervalId);
				}
			}, 1000)	
	}		 

	/*The following is generic code for countdown */
	/* runCountDown = () => { 
		this.intervalId = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState((prevState) => ({
          timeRemaining: prevState.timeRemaining - 1,
        }));
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
	} 
 */
	 

	  

  /* countdown(){
    if(this.state.timeRemaining == null)
    {
        console.log("NULL")
    }
    let myTime = this.state.timeRemaining
    
    if(myTime > 0) {
        myTime--;
        this.setState({timeRemaining: myTime})
        console.log(myTime)
    } else {
        clearInterval(this.intervalId)
    }

    return myTime;
	} */


	componentDidUpdate(prevProps){
		if((prevProps.countDownTimer !== this.props.countDownTimer) && (prevProps.duration !== this.props.duration)) {
				/* this.intervalId = setInterval(() => 
				this.runCountDown(this.intervalId),1000
			);
			console.log('testing') */
			this.setState({timeRemaining: this.props.duration})
			this.runCountDown(this.props.duration);
		}
	}

	/* componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState((prevState) => ({
          timeRemaining: prevState.timeRemaining - 1,
        }));
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }   */

  componentWillUnmount() {
    if(this.intervalId) {
			clearInterval(this.intervalID);
		}
  }  


	render() {
    const { timeRemaining } = this.state;

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

		return (
			<div>
				 
				 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}

			</div>

		)

	}

}



export default Counter;

/* The following is the countdown in vanilla javascript:
startCountDown = () => {
		const startingMinutes = 1;
		let time = startingMinutes * 60;
		const updateCountDown = () => {
			
				const minutes = Math.floor(time / 60);
				let seconds = time % 60;

				seconds = seconds < 10 ? "0" + seconds : seconds;
				const countdownEl = document.getElementById("countdown");

				countdownEl.innerHTML = `${minutes} : ${seconds}`;
				time--;
				if (time <= -1) {
					clearInterval(stopIntervalID);
					const gameover = document.getElementById("gameover");
					gameover.innerText = "gameover!";
				}
		};
		const stopIntervalID = setInterval(updateCountDown, 1000);
	};

*/