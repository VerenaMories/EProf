import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

import axios from "axios";
import {
  Player,
  ControlBar,
  ForwardControl,
  ReplayControl,
  BigPlayButton,
  PlaybackRateMenuButton,
} from "video-react";
import "video-react/dist/video-react.css";
export default function Lecture() {
  let { classRoom, sub } = useParams();
  const [lecture, setLecture] = useState();
  const [video, setVideo] = useState();
  const [playerRef, setPlayerRef] = useState(useRef(null));
  const verena = sessionStorage.getItem("code");
  // console.log(verena);
  const [text, setText] = useState(verena);

  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  useEffect(() => {
    axios
      .get(
        "https://eprof-zu1o.onrender.com/lecture/getSubLecture/" + classRoom +"/"+sub
      )
      .then((response) => {
        // console.log(response.data.subLecture);
        setLecture(response.data.subLecture);
        getVideo(response.data.subLecture.video.url)
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const handleSeekBackward = (seconds) => {
    const currentTime = playerRef.current.getState().player.currentTime;
    sessionStorage.setItem("progress", currentTime - seconds);
    playerRef.current.seek(currentTime - seconds);
  };

  const handleSeekForward = (seconds) => {
    const currentTime = playerRef.current.getState().player.currentTime;
    sessionStorage.setItem("progress", currentTime + seconds);
    playerRef.current.seek(currentTime + seconds);
  };
  const handleSpeedChange = (speed) => {
    const currentTime = playerRef.current.getState().player.currentTime;
    sessionStorage.setItem("progress", currentTime);
    playerRef.current.setPlaybackRate(speed);
  };
  // function EachLesson(o) {
  //   navigate("/courseList/" + id + "/" + o);
  //   // getAllLessons()
  //   getshowLessons();
  // }
  function formatDuration(duration) {
    if (duration >= 3600) {
      // Display in hours
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${
        minutes > 1 ? "s" : ""
      }`;
    } else if (duration >= 60) {
      // Display in minutes
      const minutes = Math.floor(duration / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      // Display in seconds
      return `${duration} second${duration > 1 ? "s" : ""}`;
    }
  }

  const [flagFullScreen, setFlagFullScreen] = useState(false);

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault();
    };

    // attach the event listener to
    // the document object
    document.addEventListener("contextmenu", handleContextMenu);

    // clean up the event listener when
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  const navigate = useNavigate();
  const [mystream, setmystream] = useState(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && flagFullScreen) {
        playerRef.current.pause();
        const checked = window.confirm("Do you want to leave this page?");
        if (checked) {
          setFlagFullScreen(false);
          document.exitFullscreen(); // Exit fullscreen mode
          navigate("/");
        }
      }
    };
  
    document.addEventListener("fullscreenchange", handleFullscreenChange);
  
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [flagFullScreen]);
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFlagFullScreen(true);
    }
  };
  
  const [showMessage, setShowMessage] = useState(false);
  const onButtonClickHandler = () => {
    // console.log("here");
    setShowMessage(true);
  };
  const myvideo = useRef(null);
  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true, audio: true })
  //     .then((stream) => {
  //       myvideo.current.srcObject = stream;
  //       myvideo.current.autoplay = true;
  //       myvideo.current.muted = false;
  //       setmystream(stream);
  //     });
  // }, []);

  function key1(e) {
    if (
      e.code === "Space" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowRight"
    ) {
      return (videoPlayerContainer.style.display = "flex");
    }
    const videoPlayerContainer = document.querySelector(
      "#video-player-container"
    );
    if (videoPlayerContainer) {
      videoPlayerContainer.style.display = "none";
    }
    // console.log(e);
    switch (e.which) {
      case 49: // 1
        break;
      case 44: // PrintScreen
        // console.log("You pressed print screen");
        break;
      case 91: // left windows
      case 92: // right windows
        // console.log("You pressed the one of the windows keys");
        break;
    }
  }

  const getVideo = async (videoId) => {
    // console.log("alooo");
    // const response = await axios.get(
    //   "https://eprof-zu1o.onrender.com/lecture/video"
    // );
    // const response1 = await fetch(
    //   `https://www.googleapis.com/drive/v3/files/${videoId}?alt=media`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${response.data.access_token}`,
    //     },
    //   }
    // );
    // let videoData = await response1.arrayBuffer();
    // videoData = URL.createObjectURL(new Blob([videoData]));
    // console.log("hii")
    setVideo(`https://eprof-zu1o.onrender.com/lecture/video/${videoId}`);
  }

  const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.focus();
  // }, []);

  useEffect(() => {
    // console.log("unload");
    window.addEventListener("beforeunload", beforeUnLoad);

    return () => {
      // console.log("unload");
      window.removeEventListener("beforeunload", beforeUnLoad);
    };
  }, []);
  const beforeUnLoad = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.returnValue = "";
  };

  // const handleKeyDown = event => {
  //   console.log('User pressed: ', event.key);
  // };
  document.onkeyup = key1;
  const springProps = useSpring({
    to: async (next) => {
      while (true) {
        await next({
          position: "relative",
          zIndex: "9999999999",
          transform: `translate(${Math.random() * 240 - 20}px, ${
            Math.random() * 70 - 10
          }px)`,
        });
      }
    },
    config: {
      tension: 20,
      friction: 10,
    },
  });

  return (
    <>
    <section class="pager-section">
        <div class="container">
          <div class="pager-content text-center">
          {lecture && <div key={lecture}> <h2>{lecture.name && lecture.name}</h2></div>}
            <ul>
              <li>
              <Link to="/" style={{ textDecoration: "none" }} title="">
                      Home
                    </Link>
              </li>
            
            
            </ul>
          </div>
          <h2 class="page-titlee">
            <span style={{ fontFamily: "flanella", color: "#c5892b" }}>E</span>{" "}
            <span style={{ color: "#3c719a", fontFamily: "azonix" }}>
              {" "}
              PROF
            </span>
          </h2>
        </div>
      </section>
      <div className="container">
        <div className="row" style={{justifyContent:'center', paddingTop:'4%',paddingBottom:'4%'}}>
          <div className="col-md-10">
            {lecture && <div key={lecture}>
                {/* <h1>{lecture.name && lecture.name}</h1> */}
              
                <div
                  id="video-player-container"
                  className="myVideo"
                  style={{
                    positon: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <animated.div style={springProps}>
                    {showMessage && (
                      <div
                        style={{
                          width: "20%",
                          height: "20%",
                          position: "absolute",
                          opacity: "0.5",
                          color: "red",
                          fontSize: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          zIndex: "999099999",
                        }}
                      >
                        {text}
                      </div>
                    )}
                  </animated.div>
                  {video && (
                    <Player
                      ref={playerRef}
                      autoPlay={false}
                      src={video}
                      width="100%"
                      height="100%"
                      controlBarClassName="my-custom-class"
                      playbackRate={0.5}
                      onPlay={() => {
                        const currentTime =
                          playerRef.current.getState().player.currentTime;
                        sessionStorage.setItem("progress", currentTime);
                        onButtonClickHandler();
                      }}
                      onPause={() => {
                        let progress = playerRef.current.getState().player.currentTime *100/ playerRef.current.getState().player.duration;
                        axios.patch(
                          "https://eprof-zu1o.onrender.com/lecture/updateVideoProgress",
                          { lectureId: classRoom, videoId: lecture.video.url, progress: progress},
                          {
                          headers: {
                            Authorization: `${sessionStorage.getItem("token")}`,
                          },
                          }
                        ).then((res)=>{
                          // console.log(res ,classRoom, lecture.video.url,progress)
                        }).catch((e)=>{
                          // console.log(e)
                        });
                      }}
                      onEnded={() => {
                        axios.patch(
                          "https://eprof-zu1o.onrender.com/lecture/updateVideoProgress",
                          { lectureId: classRoom, videoId: lecture.video.url, progress: 100},
                          {
                          headers: {
                            Authorization: `${sessionStorage.getItem("token")}`,
                          },
                          }
                        ).then((res)=>{
                          // console.log(res)
                        }).catch((e)=>{
                          // console.log(e)
                        });
                      }}
                      // onEnded={async () => {
                      //   if (showLessons.viewed != showLessons.duration) {
                      //     const currentTime =
                      //       playerRef.current.getState().player.currentTime;

                      //     // let response = await axios.post(
                      //     //   "https://student-system.herokuapp.com/read_lesson/" +
                      //     //     real_id +
                      //     //     "/" +
                      //     //     sessionStorage.getItem("user_id"),
                      //     //   { duration: currentTime }
                      //     // );
                      //   }
                      // }}
                    >
                      <BigPlayButton position="center" />

                      <ControlBar autoHide={false} className="my-class">
                        <ReplayControl seconds={10} order={2} />
                        <ForwardControl seconds={10} order={3} />
                        <PlaybackRateMenuButton
                          rates={[2, 1.75, 1.5, 1, 0.75, 0.5]}
                        />
                      </ControlBar>
                    </Player>
                  ) }
                </div>
              </div>}
              
          </div>
        </div>
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-10">
          <div className="row p-3">
       {lecture && Array.isArray(lecture.file) &&
  lecture.file.map((v, index) => (
    
    <div key={index} className="col-md-2">
      <a
        style={{ textDecoration: "none", color: "#000" }}
        onClick={() => {
        
              window.open(v.url)}}
       
      >
        <i
          className="fa-regular fa-file-pdf fs-3"
          style={{
            color: "rgb(197, 137, 43)",
            paddingBottom: "2%",
          }}
        ></i>{" "}
        {v.name}
      </a>
    </div>
  ))} </div>
  <div className="row p-3">
{lecture && Array.isArray(lecture.url) &&
  lecture.url.map((v, index) => (
    <div key={index}  className="col-md-2">
      <a
        style={{ textDecoration: "none", color: "#000" }}
        onClick={() => { window.open(v.url)}}
         
      >
        <i
          className="fa-solid fa-link fs-3"
          style={{
            color: "rgb(197, 137, 43)",
            paddingBottom: "2%",
          }}
        ></i>
        {v.name}
      </a>
    </div>
  ))}  </div>
						 
             </div>
        </div>
      </div>
    </>
  );
}
