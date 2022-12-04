<template>
    <div 
      class="hover:outline-2 hover:outline hover:outline-stone-200/75 dark:hover:outline-slate-900
        flex  
        rounded-md
        forumArticle 
        shadow-md dark:shadow-slate-900/40
        my-2 md:my-4
      "
    >
      
      <div class=" bg-slate-200/25 dark:bg-slate-900 px-2 w-16 rounded-l-md text-center flex flex-col py-4">
        <font-awesome-icon class="text-blue-500 hover:text-blue-300/75" icon="fa-solid fa-arrow-up" />
        <span class="text-sm py-2">2.5k</span>
        <font-awesome-icon class="text-red-500" icon="fa-solid fa-arrow-down" />
      </div>
      <div class="relative group">
        <div
          class="peer absolute h-full w-full top-0 bottom-0 left-0 right-0 z-10 cursor-pointer"
        >

        </div>
        <p class=" px-4 py-1 text-sm text-gray-400 dark:text-gray-500/75 bg-slate-100/10 dark:bg-slate-900/25 rounded-t">
          <span class="relative z-20 hover:underline text-gray-700 dark:text-gray-400">f/Global</span>
          - published by 
          <span class="hover:underline relative z-20" >u/benoit</span> 
          2 days ago</p>
        <h3 class="forumArticle-title text-xl px-4 py-2">{{ props.title }}</h3>
        <p class="forumArticle-excerpt px-4 py-2 ">{{ excerpt }}</p>
        <footer class="forumArticle-footer relative px-2 py-1 z-20">
          <span class="px-2 py-2 inline-block hover:dark:bg-slate-500 hover:bg-slate-100">
            <font-awesome-icon icon="fa-regular fa-comment" /> 23 Comments
          </span>
        </footer>
      </div>
    </div>
</template>

<script setup>
import { truncate } from '../helpers/truncate';
const props = defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  }
})

const excerpt = truncate(props.content, 150, '...')



</script>

<style lang="scss" scoped>

</style>