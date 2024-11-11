<template>
  <div class="testTracking">
        <video
          id="video"
          width="100%"
          height="100%"
          preload
          autoplay
          loop
          muted
          ref="video"
        ></video>
        <canvas id="canvas" width="1000" height="500"></canvas>
        <img :src="imgSrc" width="100px" height="100px" />
        <div class="buttonDiv">
          <button type="button" @click="submit" style="font-size: 3vw;">提取照片</button>
          <button type="button" name="button" @click="checkFace" style="font-size: 3vw;">检测人脸</button>
          <button type="button" name="button" @click="getCompetence" style="font-size: 3vw;">
              打开摄像头
          </button>
          <button type="button" name="button" @click="de" style="font-size: 3vw;">停</button>
        </div>
    </div>
</template>

<script>
  import 'tracking/build/tracking-min.js'
  import 'tracking/build/data/face-min.js'
  import 'tracking/build/data/mouth-min.js'
  import 'tracking/examples/assets/stats.min.js'
  export default {
      name: "testTracking",
      data() {
          return {
            trackerTask: null,
            imgSrc: ''
          };
      },
      methods: {
          closeCamera () {
                if (!this.$refs['video']?.srcObject) return
                let stream = this.$refs['video'].srcObject
                let tracks = stream.getTracks()
                tracks.forEach(track => {
                    track.stop()
                })
                this.$refs['video'].srcObject = null
            },
          submit() {
              // let that = this;
              let canvas = document.getElementById("canvas");
              let context = canvas.getContext("2d");
              let video = document.getElementById("video");
              console.log('video.readyState', video.readyState);
              console.log('video.HAVE_CURRENT_DATA', video.HAVE_CURRENT_DATA);
              canvas.height = video.videoHeight
              canvas.width = video.videoWidth
              context.drawImage(video, 0, 0, canvas.width, canvas.height);
              this.imgSrc = this.convertCanvasToImage(canvas).src
              canvas.toBlob((blob) => {
                  // axios.post({ faceUrl: URL.createObjectURL(blob) }).then((res) => {
                  //   console.log("上传成功");
                  // });
                  var reader = new FileReader();
                  reader.readAsDataURL(blob);
                  console.log(reader);
                  this.closeCamera()
              });
          },
          // 将canvas转化为图片
          convertCanvasToImage(canvas) {
            let image = new Image()
            image.src = canvas.toDataURL('image/png')
            return image
          },
          checkFace() {
              var video = document.getElementById("video");
              console.log('video', video)
              var canvas = document.getElementById("canvas");
              var context = canvas.getContext("2d");
              console.log('video', video)

              // eslint-disable-next-line no-undef
              var tracker = new tracking.ObjectTracker("face");
              tracker.setInitialScale(4);
              tracker.setStepSize(2);
              tracker.setEdgesDensity(0.1);

              // eslint-disable-next-line no-undef
              this.trackerTask = tracking.track("#video", tracker, { camera: true });

              tracker.on("track", function (event) {
                  if (event.data.length <= 0) {
                      return;
                  }
                  if (event.data.length === 122) {
                    context.drawImage(video, 150, 0, );
                    canvas.toBlob((blob) => {
                        // axios.post({ faceUrl: URL.createObjectURL(blob) }).then((res) => {
                        //   console.log("上传成功");
                        // });
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        console.log('reader', reader);
                    });
                    if (!video.srcObject) return
                    let stream = video.srcObject
                    let tracks = stream.getTracks()
                    tracks.forEach(track => {
                        track.stop()
                    })
                    video.srcObject = null
                  }
                  console.log(Math.random(), event, context);
                  // context.clearRect(0, 0, canvas.width, canvas.height);
                  // event.data.forEach(function (rect) {
                  //     context.strokeStyle = '#a64ceb';
                  //     context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                  //     context.font = '11px Helvetica';
                  //     context.fillStyle = "#fff";
                  //     context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                  //     context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
                  // });
              });
          },
          getCompetence() {
              console.log('getCompetence')
              var _this = this;
              this.thisCancas = document.getElementById("canvas");
              this.thisContext = this.thisCancas.getContext("2d");
              this.thisVideo = document.getElementById("video");
              // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
              if (navigator.mediaDevices === undefined) {
                  navigator.mediaDevices = {};
              }
              // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
              // 使用getUserMedia，因为它会覆盖现有的属性。
              // 这里，如果缺少getUserMedia属性，就添加它。
              if (navigator.mediaDevices.getUserMedia === undefined) {
                  navigator.mediaDevices.getUserMedia = function (constraints) {
                      // 首先获取现存的getUserMedia(如果存在)
                      var getUserMedia =
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.getUserMedia;
                      // 有些浏览器不支持，会返回错误信息
                      // 保持接口一致
                      if (!getUserMedia) {
                          return Promise.reject(
                              new Error("getUserMedia is not implemented in this browser")
                          );
                      }
                      // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
                      return new Promise(function (resolve, reject) {
                          getUserMedia.call(navigator, constraints, resolve, reject);
                      });
                  };
              }
              var constraints = {
                  audio: false,
                  video: {
                      width: this.videoWidth,
                      height: this.videoHeight,
                      transform: "scaleX(-1)",
                  },
              };
              navigator.mediaDevices
                  .getUserMedia(constraints)
                  .then(function (stream) {
                      console.log('stream', stream, _this.thisVideo)
                      // 旧的浏览器可能没有srcObject
                      if ("srcObject" in _this.thisVideo) {
                          _this.thisVideo.srcObject = stream;
                      } else {
                          // 避免在新的浏览器中使用它，因为它正在被弃用。
                          _this.thisVideo.src = window.URL.createObjectURL(stream);
                      }
                      _this.thisVideo.onloadedmetadata = function () {
                          _this.thisVideo.play();
                      };
                  })
                  .catch((err) => {
                      console.log(err);
                  });
          },
          de() {
              console.log('1111', this.trackerTask)
              window.tracking
              // 停止侦测
              this.trackerTask?.stop();
              // 关闭摄像头
              this.closeCamera()
              // this.trackerTask?.closeCamera();
          },
      },
      destroyed() {
          // 停止侦测
          console.log('2222', this.trackerTask)
          this.trackerTask?.stop();
          // 关闭摄像头
          this.closeCamera()
          // this.trackerTask?.closeCamera();
      },
  };
</script>
<style lang="css" scoped>
      .testTracking {
        height: 80vh;
        width: 100%;
        position: relative;

      }
    .testTracking > * {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }

        video,
        canvas {
            top: 0;
        }
        .buttonDiv {
            bottom: 10px;
        }
</style>
