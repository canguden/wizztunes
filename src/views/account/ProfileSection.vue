<template>
  <TopNavigation />
  <div class="flex flex-col max-w-4xl mt-10 mx-auto flex">
    <div class="w-1/2 mt-2 w-full">
      <RouterLinkButton
        btnText="Edit Profile"
        color="green"
        url="/account/edit-profile"
      />
    </div>
    <div class="flex flex-col items-center mx-auto">
      <img
        class="w-full w-40 h-40 rounded-full h-auto shadow-lg"
        src="https://via.placeholder.com/250"
        alt="profile picture"
      />
      <ProfileInfoSection />
    </div>
    <div class="w-full mt-5 pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-xl md:text-2xl text-left text-gray-100">Can Guden</h1>
          <span class="text-sm text-gray-300">
            <i class="fa-solid fa-location-dot mr-1 text-red-500"></i>
            <i><b>Amsterdam, the Netherlands</b></i>
          </span>
        </div>
      </div>
      <ProfileAboutSection />
    </div>
  </div>
  <SongsSection />
  <YoutubeVideosSection />
  <PostsSection />
</template>

<script setup>
import ProfileInfoSection from "../../components/partials/profile/ProfileInfoSection.vue";
import ProfileAboutSection from "../../components/partials/profile/ProfileAboutSection.vue";
import RouterLinkButton from "@/components/global/RouterLinkButton.vue";
import SongsSection from "@/components/partials/SongsSection.vue";
import YoutubeVideosSection from "@/components/partials/YoutubeVideosSection.vue";
import PostsSection from "@/components/partials/PostsSection.vue";
import TopNavigation from "@/components/structure/TopNavigation.vue";
</script>
