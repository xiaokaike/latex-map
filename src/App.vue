<template>
  <div id="app">
    <h1>{{ title }}</h1>
    
    
    <section class="map-wrap latter-wrap">
      <h3 class="h3 bg-blue">{{latters.title}}</h3>

      <div class="" v-for="item in latters.items">
        <h4 class="h4 caps">{{item.title}}</h4>
        <ul class="clearfix list-reset">
          <li class="left latter" v-for="latter in item.values" data-latex="{{latter}}">
            <span class="latex"> $${{latter}}$$</span>
          </li>
        </ul>
      </div>

    </section>
    
    <section class="map-wrap latter-wrap">
      <h3 class="h3 bg-blue">{{greekLatters.title}}</h3>

      <div class="" v-for="item in greekLatters.items">
        <h4 class="h4 caps">{{item.title}}</h4>
        <ul class="clearfix list-reset">
          <li class="left latter" v-for="latter in item.values" data-latex="{{latter}}">
            <span class="latex"> $${{latter}}$$</span>
          </li>
        </ul>
      </div>
    </section>


    <section class="map-wrap latter-wrap">
      <h3 class="h3 bg-blue">{{maths.title}}</h3>

      <div class="" v-for="item in maths.items">
        <h4 class="h4 caps">{{item.title}}</h4>
        <ul class="clearfix list-reset">
          <li class="left latter" v-for="latter in item.values" data-latex="{{latter}}">
            <span class="latex"> $${{latter}}$$</span>
          </li>
        </ul>
      </div>
    </section>


    <ul class="latex-map-wrap">
      <li class="latex-item" v-for="item in latexMap" data-latex="{{item}}">
        <div class="text">
          
        <input type="text" value="{{item}}" readonly></input>
        </div>
        <div class="latex">$${{item}}$$</div>
      </li>
    </ul>


  </div>
</template>

<script>
import maps from './map/index.js'
import _ from 'lodash'

export default {
  data () {
    return {
      title: 'latex map',
      latexMap: maps.conf,
      latters: maps.latters,
      greekLatters: maps.greek,
      maths: maps.maths
    }
  },
  ready () {
    
  },
  attached () {
    _.each(document.querySelectorAll('.latex'),function(span) {
        MathJax.Hub.Typeset(span);
    });
  }

}
</script>

<style>

body {
  font-family: Helvetica, sans-serif;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.map-wrap{
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}

.latex-map-wrap{
  list-style: node;
  padding: 0;
  margin: 0;
}

.latex-item {
  display: -webkit-box;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
}

.latex-item .text{
  -webkit-box-flex: 1;
  margin: 1em 0em;
}

.latex-item .text input{
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 34px;
}

.latex-item .latex{
  -webkit-box-flex: 1;
}


/*latter*/

.latter-wrap h4,
.latter-wrap ul{
  margin: 0;
  margin-bottom: 8px;
}

.latter{
  width: 30px;
  height: 50px;
}


</style>
