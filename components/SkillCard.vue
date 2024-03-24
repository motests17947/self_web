<template>
  <div class="card">
    <div class="ds-top"></div>
    <div class="avatar-holder">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein">
    </div>
    <div class="name">
      <p>Albert Feynman</p>
    </div>
    <div class="ds-info">
      <div class="ds pens">
        <h6 title="Number of pens created by the user">Pens <i class="fas fa-edit"></i></h6>
        <p>29</p>
      </div>
      <div class="ds projects">
        <h6 title="Number of projects created by the user">Projects <i class="fas fa-project-diagram"></i></h6>
        <p>0</p>
      </div>
      <div class="ds posts">
        <h6 title="Number of posts">Posts <i class="fas fa-comments"></i></h6>
        <p>0</p>
      </div>
    </div>
    <div class="ds-skill">
      <h6>Skill <i class="fa fa-code" aria-hidden="true"></i></h6>
      <div class="skill html">
        <h6><i class="fab fa-html5"></i> HTML5 </h6>
        <div class="bar bar-html">
          <p>95%</p>
        </div>
      </div>
      <div class="skill css">
        <h6><i class="fab fa-css3-alt"></i> CSS3 </h6>
        <div class="bar bar-css">
          <p>90%</p>
        </div>
      </div>
      <div class="skill javascript">
        <h6><i class="fab fa-js"></i> JavaScript </h6>
        <div class="bar bar-js">
          <p>75%</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  emits: ['pageChange'],
  setup(props, ctx) {
    
    
    return {
      
    }
  },
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Krub:400,700');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #202020;
  font-family: 'Krub', sans-serif;
}

.card {
  @apply relative w-[30%] min-h-[400px] h-fit rounded-md bg-[#151515] overflow-hidden;
  box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);
  
  .ds-top {
    @apply relative w-full h-20 bg-red-700;
    animation: dsTop 1.5s;
  }
  
  .avatar-holder {
    @apply absolute left-1/2 w-[100px] h-[100px] rounded-full mx-auto -translate-y-[50px] translate-x-[-50%] bg-white overflow-hidden;
    box-shadow: 0 0 0 5px #151515,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000;
    animation: mvTop 1.5s;
    
    img {
      @apply w-full h-full object-cover;
    }
  }

  .name {
    @apply relative mx-auto w-full text-center h-20 translate-y-[60px] text-white;
    animation: fadeIn 2s ease-in;
    
    p {
      @apply font-bold text-lg cursor-default;
      text-decoration: none;
    }
  }
  
  .ds-info {
    @apply relative mt-5 mx-auto text-white w-[inherit] h-10 flex;
    
    .pens,
    .projects,
    .posts {
      @apply relative left-[-100%] text-center;
      width: calc(250px / 3);
      animation: fadeInMove 2s;
      animation-fill-mode: forwards;
      h6 {
        text-transform: uppercase;
        color: crimson;
      }
      p {
        font-size: 12px;
      }
    }
    .ds {
      &:nth-of-type(2) {
        animation-delay: .5s;
      }
      &:nth-of-type(1) {
        animation-delay: 1s;
      }
    }
  }
  .ds-skill {
    position: absolute;
    margin: auto;
    bottom: 10px;
    right: 0;
    left: 0;
    width: 200px;
    height: 100px;
    animation: mvBottom 1.5s;
    h6 {
      margin-bottom: 5px;
      font-weight: 700;
      text-transform: uppercase;
      color: crimson;
    }
    .skill {
      h6 {
        font-weight: 400;
        font-size: 8px;
        letter-spacing: 0.05em;
        margin: 4px 0;
        color: white;
      }
      .fab {
        color: crimson;
        font-size: 14px;
      }
      .bar {
        height: 5px;
        background: crimson;
        text-align: right;
        p {
          color: white;
          font-size: 8px;
          padding-top: 5px;
          animation: fadeIn 5s;
        }
        &:hover {
          background: white;
        }
      }
      .bar-html {
        width: 95%;
        animation: htmlSkill 1s;
        animation-delay: .4s;
      }
      .bar-css {
        width: 90%;
        animation: cssSkill 2s;
        animation-delay: .4s;
      }
      .bar-js {
        width: 75%;
        animation: jsSkill 3s;
        animation-delay: .4s;
      }
    }
  }
}

@keyframes fadeInMove {
  0% {
    opacity: 0;
    left: -300px;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes htmlSkill {
  0% {width: 0;}
  100% {width: 95%;}
}

@keyframes cssSkill {
  0% {width: 0;}
  100% {width: 90%;}
}

@keyframes jsSkill {
  0% {width: 0;}
  100% {width: 75%;}
}

@keyframes mvBottom {
  0% {bottom: -150px;}
  100% {bottom: 10px;}
}

@keyframes mvTop {
  0% {top: -150px;}
  100% {top: 40px;}
}

@keyframes dsTop {
  0% {top: -150px;}
  100% {top: 0;}
}

.following {
  color: white;
  background: crimson;
}
</style>