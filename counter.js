function updateCounter() {
    const counter = document.getElementById('counter');
    //increment the counter everytime user visits the page by storing in local storage
    let count = localStorage.getItem('visiterCount');
    // count = parseInt(count)
    /**
     * if count is null then set count to 1
    * else increment the count by 1 (Note: count is a string so convert it to number using parseInt)
    */
   if (count == string(null)) {
    count = parseInt(count)
    count = 1;
    
   } else {
    count = parseInt(count) 
    count++;
    
   }
    localStorage.setItem('visiterCount', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;
}
updateCounter();