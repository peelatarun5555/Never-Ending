console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/life.png');
  },
  mouseleave: function(){
    $(this).attr('src','life copy.png');
  }
  });



  $("#bash_photo").on({ mouseenter: function(){
    $(this).attr('src','lifeline.png');
  },
  mouseleave: function(){
    $(this).attr('src','lifeline copy.png');
  }
  });
  


  $("#github_photo").on({ mouseenter: function(){
    $(this).attr('src','love copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','love copy 2.png');
  }
  });
});
