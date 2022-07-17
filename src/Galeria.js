import React from 'react'
import {useState} from 'react'
import {useLocalStorage} from './useLocalStorage'

let Image = [ {
    image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwcGhvdG8lMjAyMDE5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    id: 0
}];





export const Galeria = () =>{
  
    const [arrayImg, setArray] = useLocalStorage("gallery", Image)
    
    function handleClick() {
        setArray([...arrayImg, {image: newImg, id: 0}]);
    }

    const [newImg, setImage] = useState("");

    function remove() {
        setArray([{image: newImg, id: 1}]);
    }
    return (
    <div>
        <form onSubmit={ev=>{
            ev.preventDefault();
            setImage(ev.target.newImg.value);
        }}>
            <div className="update-file">
                <div className="Generate">
                    <input type="text" name="newImg" id="newImg" placeholder='Insert a link to an image...'/>
                    <div className="btns">
                    <button type="submit" id="Save" className="btn">Save</button>
                    <button onClick={handleClick} className="btn">Generate</button>
                    </div>
                </div>
            </div>
        </form> 
          
        <div>
        <div id="Galerycount">    
            {
            arrayImg.map(function(Image){
                return (
                    <div className="Image">
                        <button className="delete" onClick={remove}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg></button>
                        <img src={Image.image} className="imageGalery" style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  );

}   