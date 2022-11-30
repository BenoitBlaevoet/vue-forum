<script setup>
import ForumDrawer from '../components/ForumDrawer.vue';
import ForumCard from '../components/ForumCard.vue';
</script>

<template>
  <ForumDrawer>
    
    <ForumSearch/>
    
    <ForumSpacer Text>Account</ForumSpacer>
    <ForumList>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
    </ForumList>
    <ForumSpacer Text>Favorites Forum</ForumSpacer>
    <ForumList>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
      <li>lorem1</li>
    </ForumList>
  </ForumDrawer>
  <section>
    <ForumCard title="This is not Lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, quidem.</ForumCard>
  </section>
</template>
