/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --

  2.0 Initiations / Default Functions
    2.1 Toggle JS Class
    2.2 Get latest commit from Github
*/

/* ==========================================================
  2.0 Initiations / Default Functions
*/

$(document).ready(function(){

  // 2.1 Toggle JS Class
  $("html").removeClass('no-js').addClass('js');

  // 2.2 Get latest commit from GitHub
  $('#github').html('<span class="block date">loading...</span> <span class="block description"></span> <a href="#" class="block commit"></a>');

  var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      $.ajax({url:"https://api.github.com/repos/matthewhartman/base/commits",dataType:"jsonp",success:function(d){
      var b=d.data[0], c=new Date(b.commit.committer.date), e=a[c.getMonth()]+" "+c.getDate()+", "+c.getFullYear();
      $("#github .description").text(b.commit.message);
      $("#github .date").text(e);$("#github .commit").html("Commit "+b.sha+" &raquo;");
      $("#github .commit").attr("href","https://github.com/matthewhartman/base/commit/"+b.sha);
      }
  });
    

}); // end document ready