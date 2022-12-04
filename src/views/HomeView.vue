<script setup>
import ForumDrawer from '../components/ForumDrawer.vue';
import ForumCard from '../components/ForumArticleCard.vue';
import ForumContextSidebar from '../components/ForumContextSidebar.vue';
import ForumButton from '../components/ForumButton.vue';
import ForumThemeMode from '../components/ForumThemeMode.vue';
</script>

<template>
  <aside 
  class="md:col-span-3">
    <ForumDrawer>
      
      <ForumSearch/>
      <ForumThemeMode></ForumThemeMode>
      <ForumSpacer Text>If not logged</ForumSpacer>
      <ForumList>
        <li>Login</li>
        <li>Register</li>
      </ForumList>
      <ForumSpacer Text>If Logged</ForumSpacer>
      <ForumList>
        <li>lorem1</li>
        <li>lorem1</li>
        <li>lorem1</li>
        <li>lorem1</li>
        <li>lorem1</li>
      </ForumList>
    </ForumDrawer>
  </aside>
  <section 
    class="
      min-h-screen
      md:col-span-6
      px-2 md:px-0
    "
  >
    <ForumCard title="This is not Lorem" content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    <ForumCard title="This is not Lorem" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    <ForumCard title="This is not Lorem" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    <ForumCard title="This is not Lorem" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    <ForumCard title="This is not Lorem" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    <ForumCard title="This is not Lorem" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem."/>
    
  </section>
  <aside
  class="md:col-span-3 pt-4">
    <ForumContextSidebar >
      <div class="flex justify-center">
        <ForumButton >
          <font-awesome-icon  icon="fa-solid fa-plus" />
          New Topic
        </ForumButton>
      </div>
    </ForumContextSidebar>
  </aside>
</template>

<style>

.shadow-md-left{
  box-shadow: -4px 0px 2px -2px rgb(0 0 0 / 0.1), -2px 0px 2px -2px rgb(0 0 0 / 0.1);
}
</style>