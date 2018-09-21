(function(){
  /**
   * This method updates the DOM content for 
   * statpage dynamically once the FETCH API
   * calls to the /stats API endpoint succeed.
   * @param: 
   * 		arr (data type: Array): response time array for the specific HTTP method
   * 		elemCount (data type: DOM Element Node): HTTP method container
   * 		elemBody (data type: DOM Element Node): HTTP method's response time container
   * @returns:
   * 		callback (data type: function object)
   */
  const updateDOM = (arr, elemCount, elemBody) => {
    elemCount.textContent = '';
    elemBody.textContent = '';        
    const len = arr.length;
    let avg = 0;
    if (len){
      const sum = arr.reduce((a, b) => a + b );
      avg = sum / len;    
    }
    elemCount.textContent = len;
    elemBody.textContent = Math.round(avg);    
  }

  /**
   * This method contains the FETCH API
   * calls given API endpoint.
   * @param: 
   * 		endpoint (data type: string): the API endpoint path
   * @returns:
   * 		None
   */
  const fetchServerStats = (endpoint) => {
    /**
     * variable to store the response times for each HTTP methods 
     * and this will be populated once the FETCH API return data  
     */
    const methods = {'GET':[],'PUT':[],'POST':[],'DELETE':[]};

    fetch(endpoint)
    .then((response) => response.json())
    .then((data)=> {
      let stats = data;
      /**
       * the data is the array of object like below
       * [{"_id":"123","http_method":"GET","res_time":2378},
       * {"_id":"123","http_method":"GET","res_time":2378}}
       */
      stats.forEach((stat) => { 
        // populate the methods variable declared above
        methods[stat['http_method']].push(stat['res_time']) 
      }); 
      // store the statpage's DOM elements' reference in buffer
      const get = document.querySelector('.get-count');
      const getContent = document.querySelector('.get-content');        
      const post = document.querySelector('.post-count');
      const postContent = document.querySelector('.post-content');
      const put = document.querySelector('.put-count');
      const putContent = document.querySelector('.put-content');
      const del = document.querySelector('.del-count');
      const delContent = document.querySelector('.del-content');

      /** 
       * loop through methods variables to update the DOM
       * element corresponding to the specific HTTP methods
       */
      Object.keys(methods).forEach((method) => {
        switch(method){
          case 'GET':
            updateDOM(methods[method], get, getContent);
            break;
          case 'POST':
            updateDOM(methods[method], post, postContent);
            break;
          case 'PUT':
            updateDOM(methods[method], put, putContent);
            break;
          case 'DELETE':
            updateDOM(methods[method], del, delContent);
            break;            
        }
      });      
    })
    .catch((err) => console.log(err));
  }  
  // Start the asyn call to stats API endpoint only after the page load is complete
  window.addEventListener('load',() => {
    // trigger the FETCH API call only when user is on statpage
    if (location.pathname === '/statpage') {
      fetchServerStats('/stats');      
    }
  }, false);

  // DOM elements for Form fields
  let filterBtn = document.getElementById('filter');
  let periodField = document.getElementById('period');
  // Event listener for filter button click
  filterBtn.addEventListener('click',(e) => {
    e.preventDefault();
    let period = periodField.value;
    // create the API endpoints to be requested for
    const locationURL = `/stats/${period}`;
    // trigger the FETCH API call to the endpoint
    fetchServerStats(locationURL);
  });
})();