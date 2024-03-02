import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = [
    {
      id: 1,
      heroimg:
        "https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      heroimg:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      heroimg:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      heroimg:
        "https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]; md

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]); 

  // const nextHandler = () => {
  //   currentImgIndex < 3
  //     ? setCurrentImgIndex((preValue) => ++preValue)
  //     : setCurrentImgIndex(0);
  // };

  // const preHandler = () => {
  //   currentImgIndex > 0
  //     ? setCurrentImgIndex((preValue) => --preValue)
  //     : setCurrentImgIndex(3);
  // };

  return (
    <div className="w-[90%] h-screen grid content-center grid-cols-1 gap-2 mx-auto">
      <div className="h-[30rem] bg-black">
        <img src={images[currentImgIndex].heroimg} alt="#" />
      </div>

      <div className="flex justify-around bg-black ">
        {images.map((image) => (
          <img key={image.id} src={image.heroimg} alt="#" width="300px" />
        ))}
      </div>

      {/* <button onClick={nextHandler}>Next</button>
      <button onClick={preHandler}>Pre</button> */}
    </div>
  );
}

export default App;
