import React, { useState } from 'react';
import './App.css'; // CSS file for grid styling

const colors = [ '#0089E0',   '#E53458',   '#8C7A5B',   '#B85E61',   '#7F00CB',   '#00B19F',   '#007A67',   '#6953FE',   '#475C6D']; // List of colors

const App = () => {
  const [boxColors, setBoxColors] = useState(colors);

  const shuffleColors = () => {
    const shuffledColors = [...boxColors].sort(() => Math.random() - 0.5);
    setBoxColors(shuffledColors);
  };

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
