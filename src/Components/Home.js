import VideoPlayBack from "./videoplayback.mp4"


function Home() {
  return (
    <div className="Home">
      
      <video 
      className="video"
      autoPlay
      loop 
      muted
      style={{
        position: "absolute",
        width:"100%",
        // left: "50%" ,
        top:"17%" ,
        height:"100%",
        // objectFit:"cover",
        // transform: "translate(-50%,-50%)",
        // zIdex:'-1',
        padding:"30px"
        
        
      }}>
        <source src={VideoPlayBack} type="video/mp4">

        </source>
      </video>
    </div>
  );
}

export default Home;