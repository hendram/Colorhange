import React, { useState } from 'react';
import './App.css'; // CSS file for grid styling

const colors = [ '#0089E0',   '#E53458',   '#8C7A5B',   '#B85E61',   '#7F00CB',   '#00B19F',   '#007A67',   '#6953FE',   '#475C6D']; // List of colors

const App = () => {
  const [boxColors, setBoxColors] = useState(colors);

// [...boxColors]: This part creates a copy of the boxColors array using the spread operator ([...]). It's crucial to create a copy to avoid directly mutating the state.

//.sort(() => Math.random() - 0.5): The sort method is applied to the copied array. It takes a comparison function as an argument, which is used to determine the sorting order. In this case, the comparison function generates random values between -0.5 and 0.5 for each pair of elements, resulting in a random sorting order.

//setBoxColors(shuffledColors): Finally, the newly shuffled array (shuffledColors) is used to update the state via the setBoxColors function. This triggers a re-render of the component, displaying the boxes with the newly shuffled colors.

 
  const shuffleColors = () => {
    const shuffledColors = [...boxColors].sort(() => Math.random() - 0.5);
    setBoxColors(shuffledColors);
  };

// Div with className container specific to define layout for desktop with screen width > 600px, and for mobile layout with screen width <= 600 px 
// using div with className boxes as all className will be using display block or flex or none if not need it 

  return (
  <div>
    <div className="container">
      {/* First section */}
         <div className="section1" >
    <div className="box1" style={{ backgroundColor: boxColors[0] }} onClick={shuffleColors} >
   </div>
         <div className="section2" >
           <div className="box2" style={{ backgroundColor: boxColors[1] }} onClick={shuffleColors} >
    </div>
             <div className="section3" >
       <div className="box3" style={{ backgroundColor: boxColors[2] }}  onClick={shuffleColors} >
    </div>
 <div className="box4" style={{ backgroundColor: boxColors[3] }} onClick={shuffleColors} >
    </div>
    </div> {/* Closing for section 3 */}
</div> {/* Closing for section 2 */}
    
</div> {/* Closing for section 1 */}

      <div className="section4" >
      <div className="section5" >
           <div className="box5" style={{ backgroundColor: boxColors[4] }} onClick={shuffleColors} >
    </div>
       <div className="box6" style={{ backgroundColor: boxColors[5] }} onClick={shuffleColors} >
    </div>
    </div> {/* Closing for section5 */}
      <div className="box7" style={{ backgroundColor: boxColors[6] }} onClick={shuffleColors} >
    </div>  
<div className="section6" >
           <div className="box8" style={{ backgroundColor: boxColors[7] }} onClick={shuffleColors} >
    </div>
       <div className="box9" style={{ backgroundColor: boxColors[8] }} onClick={shuffleColors} >
    </div>
    </div> {/* Closing for section6 */}
    </div> {/* Closing for section4 */}
  </div>

 <div className="boxes">
    <div className="box1" style={{ backgroundColor: boxColors[0] }} onClick={shuffleColors} >
   </div>
  <div className="part1" >
       <div className="box3" style={{ backgroundColor: boxColors[2] }}  onClick={shuffleColors} >
    </div>
 <div className="box4" style={{ backgroundColor: boxColors[3] }} onClick={shuffleColors} >
    </div>
</div> {/* Closing for part1 */}
           <div className="box2" style={{ backgroundColor: boxColors[1] }} onClick={shuffleColors} >
    </div>
 <div className="box7" style={{ backgroundColor: boxColors[6] }} onClick={shuffleColors} >
    </div>  
  <div className="part2" >

           <div className="box5" style={{ backgroundColor: boxColors[4] }} onClick={shuffleColors} >
    </div>
           <div className="box8" style={{ backgroundColor: boxColors[7] }} onClick={shuffleColors} >
    </div>
</div>   {/* Closing for part2 */}
  <div className="part3" >
      <div className="box6" style={{ backgroundColor: boxColors[5] }} onClick={shuffleColors} >
    </div>
       <div className="box9" style={{ backgroundColor: boxColors[8] }} onClick={shuffleColors} >
    </div>
</div> {/* Closing for part3 */}
</div>
</div>
  );
};


export default App;
