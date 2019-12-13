import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bouncy.css';
import './christmas.css';
import Sound from 'react-sound';
import abc from './audio/feliz3.mp3';
import timer from './audio/countDown.mp4';
import rick from './audio/tacky.mp4';
import snow from './audio/snow.mp3';
import $ from "jquery";
import image from './photos/pic1.jpg';
import './snow.css';


const info = (<div class="snowflakes" aria-hidden="true">
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
    <div class="snowflake">
        ❅
</div>
    <div class="snowflake">
        ❆
</div>
</div>);

class UgleWebste extends React.Component {
    constructor(props) {
        super(props);
        this.letTheNightMareBegin = this.letTheNightMareBegin.bind(this);
        this.randomWindow = this.randomWindow.bind(this);
        this.music = this.music.bind(this);
        this.rickRoss = this.rickRoss.bind(this);
        this.downloadFiles = this.downloadFiles.bind(this);
        this.santaFunction = this.santaFunction.bind(this);
        this.video = this.video.bind(this);
        this.enableVideo = this.enableVideo.bind(this);
        this.alert = this.alert.bind(this);

        this.state = ({
            rickRossPage: false,
            santa: true,
            countDown: false,
            snow: false,
            video: false,
        });



    }

    letTheNightMareBegin() {
        this.music();
        this.downloadFiles();
        this.randomWindow();
    }
    randomWindow() {
        let links = [
            "http://www.northpole.com/",
            "https://www.emailsanta.com/",
            "https://santatracker.google.com/#village",
            "https://santatracker.google.com/#village",
            "https://santatracker.google.com/#village",
            "https://santatracker.google.com/#village",
            "https://www.noradsanta.org/"]
        let strWindowFeatures = "location=yes,height=" + Math.random() * (700 - 200) + 200 + ",width=" + Math.random() * (700 - 200) + 200 + ",scrollbars=yes,status=yes";
        let randIdx = Math.random() * links.length;
        // round it, so it can be used as array index
        randIdx = parseInt(randIdx, 10);
        // construct the link to be opened
        let link = links[randIdx];

        let win = window.open(link, '_blank', strWindowFeatures);
        // win.focus();
        this.downloadFiles();
    }

    downloadFiles() {

        setInterval(
            function () {
                let links = ['https://ichef.bbci.co.uk/images/ic/640x360/p05pkj1d.jpg',
                    'http://www.lazerhorse.org/wp-content/uploads/2017/12/Weird-Christmas-Breaking-Brad-Japan-Santa.png',
                    'https://www.coburgbanks.co.uk/wp-content/uploads/2017/12/party-santa.jpg',
                    'https://i.redd.it/z5n04a9kxg4y.jpg',
                    'http://www.dailymagazine.news/news-images/f977e143b24a7fcf3f46d492bf57283e-690-0-N.jpg',
                    'https://i.pinimg.com/564x/65/5e/8c/655e8c5a6ea9c3b5c0a8dcdc189f63e9.jpg'
                ]
                let randIdx = Math.random() * links.length;
                randIdx = parseInt(randIdx, 10);
                let url = links[randIdx];
                let fileName = 'mypic';
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.responseType = "blob";
                xhr.onload = function () {
                    var urlCreator = window.URL || window.webkitURL;
                    var imageUrl = urlCreator.createObjectURL(this.response);
                    var tag = document.createElement('a');
                    tag.href = imageUrl;
                    tag.download = fileName;
                    document.body.appendChild(tag);
                    tag.click();
                    document.body.removeChild(tag);
                }
                xhr.send();
            }, 5000)

    }

    rickRoss() {


        setTimeout(

            function () {

                let links = ['https://giphy.com/gifs/Vuw9m5wXviFIQ/html5',
                    'https://giphy.com/gifs/6b9QApjUesyOs/html5',
                    'https://giphy.com/gifs/pxy9QQUMF0glq/html5',
                    'https://giphy.com/gifs/Ju7l5y9osyymQ/html5',
                    'https://giphy.com/gifs/6JCMt69P2YanC/html5'
                ]
                let randIdx = Math.random() * links.length;
                randIdx = parseInt(randIdx, 10);
                let link = links[randIdx];
                let strWindowFeatures = "location=yes,height=" + Math.random() * (700 - 200) + 200 + ",width=" + Math.random() * (700 - 200) + 200 + ",scrollbars=yes,status=yes";
                // let win = window.open(link, '_blank', strWindowFeatures);
                $.ajax({
                    url: link,
                    dataType: "text",
                    cache: false,
                    strWindowFeatures: strWindowFeatures,
                    success: function (data) {
                        window.open('url', '_blank', 'strWindowFeatures');
                        // window.focus();
                    }
                });
            }, 1000
        )
        // }
    }

    music() {
        let x = document.getElementById("myAudio");
        x.pause();
        let y = document.getElementById("snow");
        y.play();
        this.setState({
            snow: true
        })
        setTimeout(function () {
            y.pause()
            this.setState({
                santa: false,
                video: true
            })
        }.bind(this),20000);

        setTimeout(function () {
            this.setState({
                video: false,
                rickRossPage: true
            })
        }.bind(this),30000);


    }




    santaFunction() {
        return (
            <div id="santa">
                <img src="https://media.giphy.com/media/uQDAIMaLTPq8M/giphy.gif" alt="Smiley face" />
                <div id="gift1" className="animation-target">
                </div>
                <div id="gift2" className="animation-target">
                </div>
                <div id="gift3" className="animation-target">
                </div>
                <div className="bg">
                    <div className="centerer">
                        <a onClick={this.letTheNightMareBegin} className="button">Let it snow, let it snow, let it snow</a>
                    </div>
                </div>
            </div>
        )

    }

    enableVideo() {
        let x = document.getElementById("myAudio");
        x.play();
    }

    video() {
        return (
            <div id="video">
                <video width="100%" height="100%" autoPlay>
                    <source src={timer} type="video/mp4" />
                </video>
            </div>
        )
    }

    rick() {
        return (
            <div id="video">
                <video width="100%" height="100%" autoPlay >
                    <source src={rick} type="video/mp4" />
                </video>
            </div>
        )
    }

    alert() {
        return (
            <React.Fragment>
                <script type="text/javascript">
                    {window.onbeforeunload = function () {
                        this.setState({
                            playOriginal:true
                        })
                        return ("Why leave? do you not love santa??? You'll be put on the naughtly list!");
                    }}
                </script>
            </React.Fragment>
        )
    }



    render() {
        return (

            <div >
                {this.state.santa ? this.santaFunction() : null}
                {this.state.snow ? info : null}
                {this.state.video ? this.video() : null}
                {this.state.rickRossPage ? this.rick() : null}


                {this.alert()}

                <audio
                    id="myAudio"
                    loop
                    ref="audio_tag"
                    autoPlay={true}
                    controls={true} >
                    <source type="audio/mp3" src={abc} />
                </audio>

                <audio
                    id="snow"
                    loop
                    ref="audio_tag"
                    // autoPlay={true}
                    controls={true} >
                    <source type="audio/mp3" src={snow} />
                </audio>

            </div>
        );
    }
}

ReactDOM.render(<UgleWebste />, document.getElementById('root'));