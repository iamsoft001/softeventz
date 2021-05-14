<template>
  <div id="vue-particles">
    <vue-particles
      color="#EEEEEE"
      :particleOpacity="0.6"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="6"
      linesColor="#EEEEEE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="5"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
export default {};
</script>

<style>
#vue-particles {
  background-color: gray;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7) 20%,
      rgba(0, 0, 0, 0.4)
    ),
    url(/deco5.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  display: none;
}
</style>
