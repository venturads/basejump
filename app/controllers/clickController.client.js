'use strict';

(function () {

   var addButton = document.querySelector('.btn-add');
   var addVoteButton = document.querySelector('.btn-addvote');
   var clickmV = document.querySelector('#click-mVote');
   var deleteButton = document.querySelector('.btn-delete');
   var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/:id/clicks';
   var apiUrl2 = appUrl + '/api/:id/pName';

   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }
   function updateVote (data) {
      var votesObject = JSON.parse(data);
      clickmV.innerHTML = votesObject.pName;
   }

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

   addButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

   deleteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);
   
   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl2, updateVote));
   
   addVoteButton.addEventListener('pName', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateVote);
      });

   }, false);

})();
