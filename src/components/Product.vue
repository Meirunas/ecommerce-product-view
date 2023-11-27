<script setup>
import AddProduct from "./AddProduct.vue";
import { ref } from 'vue'
import { FwbButton, FwbModal } from 'flowbite-vue'
import '../style.css'
</script>

<template>
  <div class="container mx-auto bg-slate-100 pt-6  p-8">


    <!-- ............................................Mobile View............................ -->
    <div v-if="$isMobile()">
      <div class="flex ">
        <div class="">
          <div class="flex py-8 bg-white">
            <button @click="prevSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="fill-current rotate-90 h-8 w-8 lg:h-8 lg:w-8 text-blue-800 cursor-pointer mr-auto" style="">
                <path fill-rule="evenodd"
                  d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z">
                </path>
              </svg>
            </button>
            <!-- <div class="zoom-preview"></div> -->
            <!-- The Modal -->
            <div id="myModal" class="modal">
              <!-- <span class="close">&times;</span> -->
              <fwb-button id="closeCus" color="alternative"
                style="position: absolute;top: 4rem;left: 2rem;">Back</fwb-button>
              <div ref="swipeArea" class="swipe-area" style="">
                <img :src="currentImage.main" alt="Swipe left or right" class="w-80 h-80 object-contain"
                  style="position: absolute;top: 10rem;left: 4rem;">
              </div>
              <!-- <img  id="img01"> -->


              <div class="flex justify-center align-items-center bg-white pb-6 " style="position: absolute;bottom: 0;">
                <template v-for="(slide, index) in slides" :key="index">
                  <img v-if="slide.type === 'image'" :src="slide.thumbnail" :alt="slide.alt" @click="goToSlide(index)"
                    :class="{ thumbnailsActive: index === currentSlide }" class="mx-4 w-16  tile" />

                </template>
              </div>
              <div id="caption">

              </div>
            </div>


            <div class="relative overflow-hidden">
              <div class="flex transition ease-in-out myImg" :style="{
                transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              }">
                <div v-for="(slide, index) in slides" :key="index" class="flex-none w-full flex justify-center">
                  <template v-if="slide.type === 'image'">
                    <img :src="slide.main" :id="index" class="w-80 h-80 object-contain" @click="showModal(index)" />
                  </template>

                </div>
              </div>
            </div>
            <button @click="nextSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="fill-current rotate-90 h-8 w-8 lg:h-8 lg:w-8 text-blue-800 cursor-pointer ml-auto" style="">
                <path fill-rule="evenodd"
                  d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z">
              </path>
            </svg>
          </button>


        </div>
        <!-- <div class="flex justify-center align-items-center bg-white pb-6 ">
                        <template v-for="(slide, index) in slides" :key="index">
                            <img v-if="slide.type === 'image'" :src="slide.thumbnail" :alt="slide.alt"
                                @click="goToSlide(index + 1)" :class="{ thumbnailsActive: index + 1 === currentSlide }"
                                class="mx-4 w-16 p-2 tile" />

                        </template>
                    </div>
                    <div class="flex justify-center mt-4">
                        <template v-for="(slide, index) in slides" :key="index">
                              <div v-if="slide.type === 'image'" :class="[
                                  { paginationActive: index + 1 === currentSlide },
                                  slide.icon,
                              ]" @click="goToSlide(index + 1)"></div>

                          </template>
                      </div> -->
          <div class="flex  flex-col py-6 pr-4 ">
            <div class="flex justify-between">
              <h2 class="text-slate-400" style="color: black;">SAMSUMNG</h2>
              <h2 class="text-green-600 text-sm" style="color: red;">Hurry Limited Stock</h2>
            </div>
            <div class="flex flex-col">
              <h1 class="font-bold" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
              <h2 class="font-bold mt-2" style="color: black;">£880.00</h2>
            </div>
            <div class="flex border-t-4 mt-3">
              <ul class="list-none">
                <li class="mt-2 text-sm" style="color: black;"><strong>Sim:</strong> DUAL SIM</li>
                <li class="mt-3 text-sm" style="color: black;"><strong>Condition:</strong> LIKE NEW</li>
                <li class="mt-3 text-sm" style="color: black;"><strong>Colour:</strong> LAVANDER</li>
                <li class="mt-3 text-sm" style="color: black;"><strong>Network:</strong> UNLOCKED</li>
                <li class="mt-3 text-sm" style="color: black;"><strong>STORAGE:</strong> 512GB</li>
              </ul>
            </div>
            <AddProduct />
          </div>

        </div>


      </div>
    </div>




    <!-- ...................................Desktop View............................. -->
    <div v-else>
      <div class="flex">
        <div class="basis-[41%]">
          <div class="flex px-3 py-8 bg-white">
            <button @click="prevSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="fill-current rotate-90 h-8 w-8 lg:h-8 lg:w-8 text-blue-800 cursor-pointer mr-auto" style="">
                <path fill-rule="evenodd"
                  d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z">
                </path>
              </svg>
            </button>
            <div class="zoom-preview"></div>



            <div class="relative overflow-hidden">
              <div class="flex transition ease-in-out myImg" :style="{
                transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              }">
                <div v-for="(slide, index) in slides" :key="index" class="flex-none w-full flex justify-center">
                  <template v-if="slide.type === 'image'">

                    <img :src="slide.main" :id="index" class="w-80 h-80 object-contain" @mouseover="showZoom(index)"
                      @mousemove="showZoom(index)" @click="showModal1(index)" />

                  </template>
                  <template v-else-if="slide.type === 'video'">
                    <video :src="slide.src" controls muted autoplay loop alt="Product Video" :id="index" @click="showModal1(index)"></video>
                  </template>
                </div>
              </div>
            </div>
            <button @click="nextSlide">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                class="fill-current rotate-90 h-4 w-4 lg:h-8 lg:w-8 text-blue-800 cursor-pointer ml-auto" style="">
                <path fill-rule="evenodd"
                  d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z">
                </path>
              </svg>
            </button>
          </div>
          <div class="flex justify-center align-items-center bg-white pb-6 ">
            <template v-for="(slide, index) in slides" :key="index">
              <img v-if="slide.type === 'image'" :src="slide.thumbnail" :alt="slide.alt" @click="goToSlide(index + 1)"
                :class="{ thumbnailsActive: index + 1 === currentSlide }" class="mx-4 w-16 p-2 tile" />
              <div v-else-if="slide.type === 'video'" class="flex items-center mx-3 w-16" @click="goToSlide(index + 1)"
                :class="{ thumbnailsActive: index + 1 === currentSlide }">
                <img src="../assets/icon-video.svg" alt="" />
              </div>
            </template>
          </div>
          <div class="flex justify-center mt-4">
            <template v-for="(slide, index) in slides" :key="index">
              <div v-if="slide.type === 'image'" :class="[
                { paginationActive: index + 1 === currentSlide },
                slide.icon,
              ]" @click="goToSlide(index + 1)"></div>
              <div class="flex" v-else-if="slide.type === 'video'"
                :class="[{ playActive: index + 1 === currentSlide }, slide.icon]" @click="goToSlide(index + 1)">
              </div>
            </template>
          </div>
        </div>

        <div class="flex basis-[43%] flex-col py-6 pr-4 pl-28">
          <div class="flex justify-between">
            <h2 class="text-slate-400" style="color: black;">SAMSUMNG</h2>
            <h2 class="text-green-600 text-sm" style="color: red;">Hurry Limited Stock</h2>
          </div>
          <div class="flex flex-col">
            <h1 class="font-bold" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
            <h2 class="font-bold mt-2" style="color: black;">£880.00</h2>
          </div>
          <div class="flex border-t-4 mt-3">
            <ul class="list-none">
              <li class="mt-2 text-sm" style="color: black;"><strong>Sim:</strong> DUAL SIM</li>
              <li class="mt-3 text-sm" style="color: black;"><strong>Condition:</strong> LIKE NEW</li>
              <li class="mt-3 text-sm" style="color: black;"><strong>Colour:</strong> LAVANDER</li>
              <li class="mt-3 text-sm" style="color: black;"><strong>Network:</strong> UNLOCKED</li>
              <li class="mt-3 text-sm" style="color: black;"><strong>STORAGE:</strong> 512GB</li>
            </ul>
          </div>
          <AddProduct />
        </div>
      </div>
    </div>
  </div>


  <fwb-modal v-if="isShowModal" @close="closeModal" size="5xl">
    <template #header>
      <div class="flex justify-center">
        <h1 class="font-bold" id="vidh" style="color: black; cursor: pointer;" @click="isVideoModal">Video</h1>
        <h1 class="font-bold pl-10" id="imgh" style="color: gray;  cursor: pointer;" @click="isImageModal">Images
        </h1>
      </div>
    </template>
    <template #body>
      <div class="flex" style="background: white;">

        <div class="basis-[61%]">

          <div class="flex px-3 py-8 bg-white" v-if="isShowModalVideo">

            <div class="zoom-preview1">

            </div>
            <div class="relative overflow-hidden">
              <div class="flex transition ease-in-out myImg" :style="{
                transform: `translateX(-${(currentSlideModal - 1) * 100}%)`,
              }">
                <div v-for="(slide, index) in slides" :key="index" class="flex-none w-full flex justify-center">
                  <template v-if="slide.type === 'image'">
                    <img :src="slide.main" :id="index" class="object-contain" @mouseover="showZoom1(index)"
                      @mousemove="showZoom1(index)" style="width: 35rem;height: 35rem;" />
                  </template>

                </div>
              </div>
            </div>
          </div>

          <div class="flex px-3 py-8 bg-white" v-else="isShowModalVideo">


            <div class="relative overflow-hidden">
              <div class="flex transition ease-in-out myImg" :style="{
                transform: `translateX(-${(currentSlideModal - 1) * 100}%)`,
              }">
                <div v-for="(slide, index) in slides" :key="index" class="flex-none w-full flex justify-center">

                  <template v-if="slide.type === 'video'">
                    <video :src="slide.src" controls muted autoplay loop alt="Product Video"
                      style="width: 75rem;height: 35rem;" />
                  </template>
                </div>
              </div>
            </div>
          </div>



        </div>

        <div class="flex basis-[23%] flex-col py-6 pr-4 pl-28">
          <div class="flex justify-between">
            <h2 class="text-slate-400" style="color: black;">SAMSUMNG</h2>

          </div>
          <div class="flex flex-col">
            <h1 class="font-bold" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
            <h1 class="font-bold" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
            <h1 class="font-bold" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
            <h1 class="font-bold pb-10" style="color: black;">Samsung galaxy S23 Plus 5G</h1>
          </div>
          <div class="flex justify-center align-items-center pb-6 " v-if='isShowModalVideo'>
            <template v-for="(slide, index) in slides" :key="index">
              <img v-if="slide.type === 'image'" :src="slide.thumbnail" :alt="slide.alt"
                @click="goToSlideModal(index + 1)" :class="{ thumbnailsActive: index + 1 === currentSlideModal }"
                class="mx-4 w-16 p-2 tile" />


            </template>
          </div>

          <div class="flex justify-center align-items-center pb-6" v-else='isShowModalVideo'>
            <template v-for="(slide, index) in slides" :key="index">

              <div v-if="slide.type === 'video'" class="flex items-center mx-3 w-16" @click="goToSlideModal(index + 1)"
                :class="{ thumbnailsActive: index + 1 === currentSlideModal }">
                <img src="../assets/icon-video.svg" alt="" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </fwb-modal>
</template>


<script>


export default {

  data() {

    return {
      currentSlide: 1,
      currentSlideModal: 1,
      isShowModal: false,
      isShowModalVideo: true,
      slides: [
        {
          type: "image",
          thumbnail: "src/assets/product-image-thumbnail.jpeg",
          main: "src/assets/product-image.jpeg",
          src: "src/assets/product-image-thumbnail.jpeg",
          alt: "Image",
          icon: "paginationCircle",
        },
        {
          type: "image",
          thumbnail: "src/assets/product-image-front-thumbnail.jpeg",
          main: "src/assets/product-image-front.jpeg",
          src: "src/assets/product-image-front-thumbnail.jpeg",
          alt: "Image",
          icon: "paginationCircle",
        },
        {
          type: "image",
          thumbnail: "src/assets/product-image-back-thumbnail.jpeg",
          main: "src/assets/product-image-back.jpeg",
          src: "src/assets/product-image-back-thumbnail.jpeg",
          alt: "Image",
          icon: "paginationCircle",
        },
        {
          type: "video",
          src: "src/assets/video.mp4",
          alt: "Video",
          icon: "play",
        },
        {
          type: "video",
          src: "src/assets/video2.mp4",
          alt: "Video",
          icon: "play",
        },
      ],
    };
  },
  created() {
    // Use in js
    console.log(this.$isMobile());
  },
  mounted() {
    const swipeArea = this.$refs.swipeArea;
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    const threshold = 50; // minimum distance required to register a swipe

    swipeArea.addEventListener('touchstart', (event) => {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);

    swipeArea.addEventListener('touchend', (event) => {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      const deltaX = touchendX - touchstartX;
      const deltaY = touchendY - touchstartY;
      if (Math.abs(deltaX) > threshold && Math.abs(deltaY) < threshold) {
        this.handleSwipe(deltaX > 0 ? 'right' : 'left');
      }
    }, false);
  },
  computed: {
    totalSlides() {
      return this.slides.length;
    },
    currentImage() {
      return this.slides[this.currentSlide];
    },
  },
  components: {
    "fwb-modal": FwbModal,
    "fwb-button": FwbButton,

  },
  methods: {
    closeModal() {
      this.isShowModal = false;
      this.isShowModalVideo = true;
    },
    showModal1(index) {
      this.isShowModal = true
      this.currentSlideModal = index + 1;
      this.currentSlide > 3 ?this.isShowModalVideo = false : this.isShowModalVideo = true

    },

    isImageModal() {
      this.isShowModalVideo = true;
      document.getElementById('imgh').style.color = 'black';
      document.getElementById('vidh').style.color = 'grey';
      this.currentSlideModal = 1
    },
    isVideoModal() {
      this.isShowModalVideo = false;
      document.getElementById('imgh').style.color = 'grey';
      document.getElementById('vidh').style.color = 'black';
      this.currentSlideModal = 5
    },
    nextSlide() {

      this.currentSlide =
        this.currentSlide < this.totalSlides ? this.currentSlide + 1 : 1;
    },
    prevSlide() {

      this.currentSlide =
        this.currentSlide > 1 ? this.currentSlide - 1 : this.totalSlides;
    },
    goToSlide(index) {
      this.currentSlide = index;

    },

    nextSlideModal() {

      this.currentSlideModal =
        this.currentSlideModal < this.totalSlides ? this.currentSlideModal + 1 : 1;
    },
    prevSlideModal() {

      this.currentSlideModal =
        this.currentSlideModal > 1 ? this.currentSlideModal - 1 : this.totalSlides;
    },
    goToSlideModal(index) {
      this.currentSlideModal = index;

    },
    showZoom(index) {
      // document.getElementsByClassName[0]('dark:border-gray-600').style.background = '#fff';
      var img = document.getElementById(`${index}`);
      var preview = document.querySelector(".zoom-preview");
      var calculateRatio = (value) => preview.offsetWidth / value;
      var x = calculateRatio(100);
      var y = calculateRatio(100);
      var setBackgroundProperties = (posX, posY) => {
        preview.style.backgroundImage = `url(${img.src})`;
        preview.style.backgroundSize = `${img.width * x}px ${img.height * y}px`;
        preview.style.backgroundPosition = `-${posX * x}px -${posY * y}px`;
        preview.style.display = 'block';
      };
      img.addEventListener("mousemove", (e) => {
        var posX = e.offsetX;
        var posY = e.offsetY;
        setBackgroundProperties(posX, posY);

      });
      img.addEventListener("mouseout", () => {
        preview.style.backgroundImage = "none";
        preview.style.display = 'none';
      });
    },

    showZoom1(index) {
      var img = document.getElementById(`${index}`);
      var preview = document.querySelector(".zoom-preview1");
      var calculateRatio = (value) => preview.offsetWidth / value;
      var x = calculateRatio(100);
      var y = calculateRatio(100);
      var setBackgroundProperties = (posX, posY) => {
        preview.style.backgroundImage = `url(${img.src})`;
        preview.style.backgroundSize = `${img.width * x}px ${img.height * y}px`;
        preview.style.backgroundPosition = `-${posX * x}px -${posY * y}px`;
        preview.style.display = 'block';
      };
      img.addEventListener("mousemove", (e) => {
        var posX = e.offsetX;
        var posY = e.offsetY;
        setBackgroundProperties(posX, posY);

      });
      img.addEventListener("mouseout", () => {
        preview.style.backgroundImage = "none";
        preview.style.display = 'none';
      });
    },
    handleSwipe(direction) {
      if (direction === 'right') {

        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        // this.showModal(this.currentSlide)
        console.log(this.currentSlide)
      } else {

        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        // this.showModal(this.currentSlide)
        console.log(this.currentSlide)
      }
    },
    showModal(index) {
      var modal = document.getElementById("myModal");
      console.log(index)
      this.currentSlide = index;
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(`${index}`);
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      var fwbB = document.getElementById('closeCus');

      // When the user clicks on <span> (x), close the modal
      fwbB.onclick = function () {
        modal.style.display = "none";
      }
    },


  },
};

</script>

<style scoped>
.paginationCircle {
  @apply w-2.5 h-2.5 rounded-full mx-2 border border-solid border-gray-400;
}

.img-hover-zoom {
  height: 300px;
  /* [1.1] Set it as per your need */
  overflow: hidden;
  /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.img-hover-zoom img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover img {
  transform-origin: 65% 75%;
  transition: transform 1s, filter .5s ease-out;
}

.thumbnailsActive {
  @apply border-2 border-solid border-[#1e40af] rounded;
}

.paginationActive {
  @apply bg-[#ff0000] border-none;
}

.play::before {
  @apply text-slate-400 text-sm mx-2;
  line-height: 0.7;
  content: "▷";

}

.playActive::before {
  @apply text-red-600 rounded;
}

.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.thumbnail {
  position: relative;
}

.thumbnail img {
  width: 200px;
  /* Adjust the width as needed */
  transition: transform 0.3s ease-in-out;
}


.zoom-preview {
  height: 400px;
  width: 300px;
  border: 1px solid #000;
  margin-left: 20px;
  background-repeat: no-repeat;
  position: absolute;
  top: 11vw;
  left: 40vw !important;
  z-index: 9999;
  display: none;
}

.zoom-preview1 {
  height: 400px;
  width: 300px;
  border: 1px solid #000;
  margin-left: 20px;
  background-repeat: no-repeat;
  position: absolute;
  top: 11vw;
  left: 40vw !important;
  z-index: 999999999;
  display: none;
}



#containerFF {
  width: 200px;
  height: 150px;
  overflow: hidden;
  border: 1px solid red;
}

#imageFF {
  transform: translate(0, 0);
  transition: all 0.25s ease;
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: white;
  /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0)
  }

  to {
    -webkit-transform: scale(1)
  }
}

@keyframes zoom {
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #000;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

.cd__mainFF {
  position: relative;
  min-height: 720px;
  background: #fff;
  color: #000;
  margin: 0;
}

.img-magnifier-container {
  position: relative;
}

.img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}
</style>
