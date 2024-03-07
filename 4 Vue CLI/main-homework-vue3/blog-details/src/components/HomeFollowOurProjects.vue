<template>
 <section class="projects center">
        <div class="projects__heading">
            <h2 class="projects__heading_title">Follow Our Projects</h2>
            <p class="projects__heading_txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;page lookings at&nbsp;its layouts points.</p>
        </div>
        <div class="projects__list">
            <article class="projects__card"> 
                <img class="projects__card-img" src="../assets/img/HomeFollowOurProjects1.png" alt="HomeFollowOurProjects photo1">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                    
                </div>
            </article>
            <article class="projects__card">
                <img class="projects__card-img" src="../assets/img/HomeFollowOurProjects2.png" alt="HomeFollowOurProjects photo2">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                       
                </div>
            </article>
        </div>
        <div class="projects__list">
            <article class="projects__card">
                <img class="projects__card-img" src="../assets/img/HomeFollowOurProjects3.png" alt="HomeFollowOurProjects photo3">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35" fill="#F4F0EC"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                       
                </div>
            </article>
            <article class="projects__card">
                <img class="projects__card-img" src="../assets/img/HomeFollowOurProjects4.png" alt="HomeFollowOurProjects photo4">
                <div class="projects__description">
                    <div>
                        <h3 class="projects__description_title">Modern Kitchan</h3>
                        <p class="projects__description_txt">Decor&nbsp;/ Artchitecture</p>
                    </div>
                    <a class="projects__description_link" href="#">
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="projects__description_circle" cx="35" cy="35" r="35"/>
                            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </a>                     
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
  name: 'HomeFollowOurProjects',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .center {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    h2, h3 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        color: #292F36;
    }
    .projects {
        margin-bottom: 96px;
        &__heading {
            margin: 0 auto 93px;
            width: 737px;
            text-align: center;
            &_title {
                margin: 0 0 8px 0;
                font-size: 50px;
                line-height: 62.5px;
                letter-spacing: 1px;
            }
            &_txt {
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
        &__list {
            margin: 0 0 56px 0;
            display: flex;
            gap: 104px;
            flex-wrap: wrap;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__card {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
        &__card-img {
            width: 548px;
            background-repeat: no-repeat;
            background-size: cover;
        }
        &__description {
            display: flex;
            justify-content: space-between;
            &_title {
                font-size: 25px;
                line-height: 31.25px;
                letter-spacing: 0.5px;
                margin: 0 0 4px 0;
            }
            &_txt {
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
            &_circle {
                fill:#F4F0EC;
                &:hover {
                    opacity: 0.5;
                    transition: 0.3s;
                }
            }
        }
    }
</style>