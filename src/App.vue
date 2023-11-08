<script setup lang="ts">
import { ref, onUpdated} from 'vue'
import type {Ref} from 'vue'
import config from './assets/config.yml'
import Card from './components/Card.vue'

const categories = ref(["Indexing and Selecting Data",
                        "Merge,join and concatenate",
                        "Reshaping and pivot tables",
                        "Working with missing data",
						            "Group by operations"])
const codeElement:Ref<HTMLElement | null> = ref(null)
const selectElement:Ref<HTMLFormElement | null> = ref(null)
var operations:Ref<string[]> = ref([])
var pandascode=ref(`import pandas as pd`)

var polarscode=ref(`import polars as pl`)

function categorychange(e:string){
  //const category = (e.target as HTMLSelectElement)?.value
  const category = e
  if (selectElement.value != null){
    selectElement.value?.reset()  
  }
  if (category === "Indexing and Selecting Data"){
    operations.value = ["select row by position",
                       "select column by position",
                       "select column by label",
                       "select rows by boolean filter",
                       "select rows using a list of values",
                       "setting with enlargement using a condition"]
  } else if (category === "Merge,join and concatenate"){
    operations.value = ["Concatenate dataframes",
                       "Join two dataframes using inner join"]
  } else if (category === "Reshaping and pivot tables"){
    operations.value = ["Spreadsheet style pivot table",
                        "Convert categorical column into indicator columns"]
  } else if (category === "Working with missing data"){
    operations.value = ["Filling in missing values with a scalar",
                        "Filling in missing values using a strategy",
                        "Remove missing values"]
  } else if (category === "Group by operations"){
    operations.value = ["Aggregate data"]
  }

  }

function operationchange(e:string){
  //const op = ((e.target as HTMLSelectElement)?.value)
  const op = e;
  var configkey = ""

  if (op === "select row by position"){
    configkey = "selectrowsbypos"
  }else if (op === "select column by position"){
    configkey = "selectcolsbypos"
  }else if (op === "select column by label"){
    configkey = "selectcolsbylabel"
  }else if (op === "select rows by boolean filter"){
    configkey = "boolmask"
  }else if (op === "select rows using a list of values"){
    configkey = "isin"
  } else if (op === "Concatenate dataframes"){
    configkey = "concat"
  } else if (op === "Join two dataframes using inner join"){
    configkey = "join"
  } else if (op === "Spreadsheet style pivot table"){
    configkey = "pivot"
  } else if (op === "Convert categorical column into indicator columns"){
    configkey = "dummies"
  } else if (op === "Filling in missing values with a scalar"){
    configkey = "fillna"
  } else if (op === "Filling in missing values using a strategy"){
    configkey = "fillstrategy"
  } else if (op === "Remove missing values"){
    configkey = "dropnan"
  } else if (op === "Aggregate data"){
    configkey = "agg"
  } else if (op === "setting with enlargement using a condition"){
    configkey = "where"
  }
  
  if (configkey===""){
      return
  }  
    pandascode.value = config[configkey]["pandascode"]
    polarscode.value = config[configkey]["polarscode"]
  
}
</script>

<template>
  <h1>Pandas - Polars CheatSheet</h1>

  <div class="d-lg-flex flex-row justify-space-evenly">
    <div>
      <v-select class="select ma-2 pa-2" :items="categories" clearable label="Select a category"
        @update:model-value="categorychange">
      </v-select>
    </div>
    <div>
      <v-select ref="selectElement" class="select ma-2 pa-2" label="Select a operation" clearable
        @update:model-value="operationchange" :items="operations">
      </v-select>
    </div>
  </div>

  <div class="d-lg-flex flex-row justify-space-evenly">
    <div>
      <Card :code="pandascode" title="Pandas">
      </Card>
    </div>

    <div>
      <Card :code="polarscode" title="Polars">
      </Card>
    </div>
  </div>
</template>

<style scoped>
h1{
  text-align: center;
  margin: 20px;
}
.select{
  width:400px
}
</style>
