<template>
      <div class="container max-w-4xl mx-auto flex">
            <div class="w-1/3">
                  <img 
                  class="w-full rounded-lg h-auto shadow-lg" 
                  src="https://via.placeholder.com/500" 
                  alt="profile picture"
                  > 
            </div>
            <div class="w-full pl-4">
                  <div class="flex">
                        <div class="w-1/2">
                              <h1 class="text-2xl md:text-4xl text-left text-gray-100">
                                    Can Guden
                              </h1>
                              <span class="text-md text-gray-300">
                                    <i><b>Amsterdam, the Netherlands</b></i>
                              </span>
                        </div>

                        <div class="w-1/2 mt-2">
                        <RouterLinkButton
                        btnText="Edit Profile"
                        color="green"
                        url="/account-edit-profile"
                        />

                        </div>
                  </div>
                  <ProfileInfoSection />
                  <ProfileAboutSection />
            </div>
      </div>
      <SongsSection />
      <YoutubeVideosSection />
</template>

<script setup>
import ProfileInfoSection from '../../components/profile/ProfileInfoSection.vue'
import ProfileAboutSection from '../../components/profile/ProfileAboutSection.vue'
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
import SongsSection from '@/components/partials/SongsSection.vue'
import YoutubeVideosSection from '@/components/partials/YoutubeVideosSection.vue'
</script>