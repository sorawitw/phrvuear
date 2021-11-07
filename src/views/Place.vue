<template>
  <a-scene
    vr-mode-ui="enabled: false"
    loading-screen="enabled: false;"
    arjs="sourceType: webcam; debugUIEnabled: false;"
    id="scene"
    embedded
    gesture-detector
  >
    <a-assets>
      <video
        id="vid"
        src="https://sorawitw.github.io/testarsimulgruh6g/assets/asset1.mp4"
        preload="auto"
        response-type="arraybuffer"
        loop
        crossorigin="anonymous"
        webkit-playsinline
        autoplay
        playsinline
      ></video>
    </a-assets>

    <a-marker
      type="pattern"
      preset="custom"
      url="https://sorawitw.github.io/testarsimulgruh6g/assets/marker1.patt"
      videohandler
      smooth="true"
      smoothCount="10"
      smoothTolerance="0.01"
      smoothThreshold="5"
      raycaster="objects: .clickable"
      emitevents="true"
      cursor="fuse: false; rayOrigin: mouse;"
      id="markerA"
    >
      <a-video
        src="#vid"
        scale="1 1 1"
        position="0 0.1 0"
        rotation="-90 0 0"
        class="clickable"
        gesture-handler
      ></a-video>
    </a-marker>

    <a-entity camera></a-entity>
  </a-scene>
</template>