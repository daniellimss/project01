import React from 'react';
import './App.css';
 
import Button from 'react-bootstrap/Button'; 
import Counter from './components/Counter'; 


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
			numSquares: 6, 
      modeId: 1,
      duration: props.duration,  
      dur: 0,
      /* easyTimer: 0, */
      answer: 0,
      countDownTimer: 0,
			
    /*The original code below is for singular color for all 6 squareboxes: */
      /* squareBoxes: ["item1", "item2", "item3", "item4", "item5", "item6"],  
      squareColor: "rgb(100,100,100)",
      redColor: 100,
      greenColor: 100,
      blueColor: 100,    */

      squareBoxes: [
        {
          id:1,
          colors: "rgb(255, 0, 0)",
          item: "item1"
        },
        {
          id:2,
          colors: "rgb(255, 255, 0)",
          item: "item2"
        },
        {
          id:3,
          colors: "rgb(0, 255, 0)",
          item: "item3"
        },
        {
          id:4,
          colors: "rgb(0, 255, 255)",
          item: "item4"
        },
        {
          id:5,
          colors: "rgb(0, 0, 255)",
          item: "item5"
        },
        {
          id:6,
          colors: "rgb(255, 0, 255)",
          item: "item6"
        },
      ]
    }
  } 
   

  /* This is original code for setting single color for all 6 squareBoxes */
  /* updateTileStateColors = () =>{
    this.setState({
      redColor: Math.floor(Math.random()*255+1),
      greenColor: Math.floor(Math.random()*255+1),
      blueColor: Math.floor(Math.random()*255+1),
      squareColor: `rgb(${this.state.redColor}, ${this.state.greenColor}, ${this.state.blueColor})`,
    })
    return   
  }  */
  
  /*The following generates 6 random colors when Easy button is pressed */

  




  generateRandomColors = (e) =>{
    /* err */
    console.log(e)
    if (e == "easy"){
      //set duration equal 90
      this.setState({
        dur: 60
      })
    } else {
        this.setState({
        dur: 45
      })
    }
    
    let arr = [];
    for(let i=0; i<6; i++){
      arr.push(this.randomColor());
    } /*console.log(arr);*/
    const colorSquares = arr.map((color, index)=>{
      return {id:index+1, colors:color, item:`item${index+1}`}
    })
    /*console.log(colorSquares);*/
    const num = Math.floor(Math.random()*5+1);
    this.setState({
      squareBoxes: colorSquares,
      answer: num,
      duration: 90,
      
      countDownTimer: this.state.countDownTimer+1  /*+1 because we just need to change the countDownTimer's state */
    })
    return arr
  }
  /*Pick out random colorSquares as color for guessing */
  randomColor = () => {
    const redColor= Math.floor(Math.random()*255+1);
    const greenColor= Math.floor(Math.random()*255+1);
    const blueColor= Math.floor(Math.random()*255+1);
    const color = `RGB(${redColor}, ${greenColor}, ${blueColor})`;
    return color;
  }

rungame = () =>{
  let arr = [];
    for(let i=0; i<6; i++){
      arr.push(this.randomColor());
    } /*console.log(arr);*/
    const colorSquares = arr.map((color, index)=>{
      return {id:index+1, colors:color, item:`item${index+1}`}
    })
    /*console.log(colorSquares);*/
    const num = Math.floor(Math.random()*5+1);
    this.setState({
      squareBoxes: colorSquares,
      answer: num,
      /*duration: 90, this line is no longer applicable? */
      
      countDownTimer: this.state.countDownTimer+1  /*+1 because we just need to change the countDownTimer's state */
    })
    return arr
}


/*The following is for Easy mode when user tries to guess the colorSquares */  
guess = (e) => {
  if(e.target.id == this.state.answer+1){ 
    /* console.log('winner') */
    this.setState({
      score: this.state.score+1
    })
    this.rungame();/*this line is to continue the game  */
  
  } 
  /* console.log(e.target.id) */
}  

/* ********************************************************************* */

  /*The following is for setting uniform color for all 6 squareboxes */
  /*updateTileStateColors = () =>{
    this.setState({
      redColor: Math.floor(Math.random()*255+1),
      greenColor: Math.floor(Math.random()*255+1),
      blueColor: Math.floor(Math.random()*255+1),
      squareColor: `rgb(${this.state.redColor}, ${this.state.greenColor}, ${this.state.blueColor})`,
    })
    return   
  }*/
/* ********************************************************************** */


  reset = () =>{
    this.setState({
      squareBoxes: this.state.squareBoxes,
      score: 0,
    })
    
    return
  }

  render(){
  
    return (
      <div className="App">
        <header className="App-header">
          <div>
             <h1 class="animated">Color Guessing Game</h1>
          </div>
         
           
          <h2>{this.state.squareBoxes ? this.state.squareBoxes[this.state.answer].colors : `RGB (colors not ready)`}</h2>
          
            
	        <div id="stripe">
            <Button className="reset-btn" id="reset" variant="primary" onClick={this.reset}>Reset</Button>
            <span id="message">Guess this color</span>
            <Button className="mode" id="easy" variant="success" onClick={()=>{
              this.generateRandomColors('easy')}}>Easy</Button>
            <Button className="mode selected" id="hard" variant="danger" onClick={()=>{this.generateRandomColors('hard')}}>Hard</Button>
            <span className="countdown"><Counter countDownTimer={this.state.countDownTimer} duration={this.state.dur}/></span>
            <span className="score">Score: {this.state.score}</span>
          </div>

          {/*The original code
          <div id="stripe">
            <Button className="reset-btn" id="reset" variant="primary" onClick={this.reset}>Reset</Button>
            <span id="message">Guess this color</span>
            <Button className="mode" id="easy" variant="success" onClick={this.updateTileStateColors}>Easy</Button>
            <Button className="mode selected" id="hard" variant="danger">Hard</Button>
            <span className="countdown">2:00</span>
            <span className="score">Score: 0</span>
        </div>*/}
	
          <div className="game-con">
            <h1>Game Container</h1>
            <div className="square-con animated-box">
                
              {/*The following code is the generic one of setting an uniform single color for all 6 squareBoxes  */}
              {/* {this.state.squareBoxes.map((item)=>{
                console.log(this.state.squareColor);
                return (<button style={{backgroundColor: `${this.state.squareColor}`}} className={item}></button>)
              })}    */}
              
              {this.state.squareBoxes.map((item)=>{
                /* console.log(item) */;
                return (<button style={{backgroundColor: `${item.colors}`}} key={item.id} id={item.id} className={item.item} onClick={this.guess}></button>)
              })}
                           
            </div>				
			    </div>
        </header>
      </div>
    );

  }
}  


export default App;

 
 