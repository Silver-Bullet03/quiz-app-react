import React, { useState } from 'react';

export default function App() {
	
  const questions = [
     {
       question : "Capital city of India?",
       options : [
         { answer : 'Delhi', iscorrect : true},
         { answer : 'Mumbai',iscorrect : false},
         { answer : 'Hyderabad' , iscorrect : false},
         { answer : 'Kolkata' , iscorrect : false}

       ]
     },

     {
       question : 'Which of the following is not in react?',
       options : [
         { answer : 'components',iscorrect : false},
         { answer : 'state' , iscorrect : false},
         { answer : 'props' , iscorrect : false},
         { answer : 'vector' , iscorrect : true}
       ] 
     },

     {
       question : 'why components are used in react?',
       options : [
         { answer : 'seperation of concerns',iscorrect : true},
         { answer : 'they look cool' , iscorrect : false},
         { answer : 'they make life easier' , iscorrect : true},
         { answer : "Don't know" , iscorrect : false}
       ] 
     },

     {
       question : 'Odd man out',
       options : [
         { answer : 'Haikyuu',iscorrect : false},
         { answer : 'game of thrones' , iscorrect : true},
         { answer : 'Death note' , iscorrect : false},
         { answer : "food wars" , iscorrect : false}
       ] 
     }
   ];

   const [currentQ, setCurrentQ] = useState(0);
   const [showScore , setShowScore] = useState(false);
   const [score , setScore] = useState(0);

   const handleClick = (inp) => {
     if(inp){
       setScore(score+1);
     }
     const nextQ = currentQ +1;
     
     if(nextQ < questions.length){
       setCurrentQ(currentQ+1);}
     else{
       setShowScore(true);
     }
     
   }
   
      return(
     <div className = 'main-cont'>
      { showScore ? (<div className = 'score'> You scored {score} out of {questions.length}</div>) : 
         (
           <div className = 'quest-cont'>
              <div className = 'quest-num'> <span>Question : {currentQ+1}</span>/  {questions.length}
              </div>
              <div className = 'quest'>
                {questions[currentQ].question}
              </div>
              <div className = 'options'>
                <div className = 'options-cont'>
                {questions[currentQ].options.map(ans => (<button onClick = {() =>handleClick(ans.iscorrect)}>{ans.answer}</button>))}
                </div>
              </div>
           </div>
         )}
     </div>
   );


  
}



