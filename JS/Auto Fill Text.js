<script type="text/javascript">
    var mytextbox = document.getElementById('mytext');
    var mydropdown = document.getElementById('dropdown');

    mydropdown.onchange = function(){
          mytextbox.value = mytextbox.value  + this.value; //to appened
         //mytextbox.innerHTML = this.value;
    }
</script>