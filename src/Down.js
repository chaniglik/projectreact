import React, { useState } from 'react';
import './Down.css'
 const  Down=()=>{


    const [pictures, setPictures] = useState([
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/d_pencil_03.png",caption: "לתרומה ליחצו והשאירו פרטי קשר. אנו נחזור אליכם בהקדם"},
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/d_circle_03.png",caption: "עיגול לטובה בכל קניה בכרטיס אשראי יעוגל סכום הקניה לשקל הקרוב, ממוצע סכום התרומה הוא 4 שח לחודש"},
     {src:"https://www.pitchonlev.org.il/wp-content/uploads/2015/11/d_v_03.png",caption: "לתשלום בהוראת קבע הורידו ומלאו את הקובץ"},
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/d_arrows_03.png",caption: "לתרומה באמצעות העברה בנקאית תרומה באמצאות הבנק הלאומי הראשון, סניף 119 ראשלצ . מס חשבון 1065120"},
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/carousel4_10.png",caption: "לתרומה טלפונית התקשרו ל-035576000" },
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/carousel1_10.png",caption: "לתרומה מאובטחת בכרטיס אשראי"},
     {src: "https://www.pitchonlev.org.il/wp-content/uploads/2015/11/carousel3_10.png",caption: " דואר תרומת מזומן וצקים בדואר"}
    ]);
    
      const rotatePictures = () => {
        setPictures(prevPictures => {
          const rotatedPictures = [...prevPictures];
          rotatedPictures.push(rotatedPictures.shift()); // Rotate the pictures
          return rotatedPictures;
        });
      };
return(<>
 <h5 className='koteret' >ערוצי תרומה נוספים</h5>
    <div className='contain'>
    <div className="picture-container">
        {pictures.map((picture, index) => (
            <div key={index} className={index < 3 ? 'hidden' : ''}>
            <img src={picture.src} alt={`Picture ${index + 1}`} />
            <p className="picture-caption">{picture.caption}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
      <button onClick={rotatePictures}>></button>
      </div>
    </div>
    </>


     
);
}
   
 export default Down;