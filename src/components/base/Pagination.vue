<template>
    <ul class="pagination">
          <li class="page-item page-pre"><a class="page-link" aria-label="上一页" href="javascript:void(0)">‹</a></li>
          <li class="page-item active"><a class="page-link" aria-label="第1页" href="javascript:void(0)">1</a></li>
          <li class="page-item"><a class="page-link" aria-label="第2页" href="javascript:void(0)">2</a></li>
          <li class="page-item"><a class="page-link" aria-label="第3页" href="javascript:void(0)">3</a></li>
          <li class="page-item"><a class="page-link" aria-label="第4页" href="javascript:void(0)">4</a></li>
          <li class="page-item"><a class="page-link" aria-label="第5页" href="javascript:void(0)">5</a></li>
          <li class="page-item page-last-separator disabled"><a class="page-link" aria-label="" href="javascript:void(0)">...</a></li>
          <li class="page-item"><a class="page-link" aria-label="第11页" href="javascript:void(0)">11</a></li>
          <li class="page-item page-next"><a class="page-link" aria-label="下一页" href="javascript:void(0)">›</a></li>
    </ul> 
</template>

<script>
    
export default{
    name:'pagination',
    props:['breadList']
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

