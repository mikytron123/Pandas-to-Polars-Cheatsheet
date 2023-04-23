<script setup lang="ts">
import hljs from 'highlight.js';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-python';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import { ref, onUpdated} from 'vue'
import type {Ref} from 'vue'
const props = defineProps<{ 
    code: string,
    title : string
}>()
const codeElement:Ref<HTMLElement | null> = ref(null)

onUpdated(()=>{
    if (codeElement != null){
        if (codeElement.value?.innerHTML.includes("<span>")===false){
            Prism.highlightElement(codeElement.value)
        }
    }
})
// onUpdated(() => {
//   if (codeElement != null){
//     if (codeElement.value?.innerHTML.includes("<span>")===false){
//           hljs.highlightElement(codeElement.value)
//     }
//   }
// })

</script>

<template>
      <v-card width="500">
        <v-theme-provider theme="dark" with-background>
          <v-card-item>
        <v-card-title>{{ title }}</v-card-title>
      </v-card-item>
      <pre class="line-numbers mb-0">
<code ref="codeElement" class="language-python text-left">{{ code }}</code></pre>
    </v-theme-provider>
      
    </v-card>

</template>

<style scoped>

</style>