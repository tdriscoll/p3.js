var prompt = require('prompt');

var schema = [
              create_question('architecture', 'Is it possible to prevent your issue with an architecture change?'),
              create_question('unitTest', 'Is it possible to prevent your issue with an unit test?'),
              create_question('integrationTest', 'Is it possible to prevent your issue with an integration test?'),
              create_question('processChange', 'Is it possible to prevent your issue with a process change?'),
              create_question('systemChange', 'Is it possible to prevent your issue with a system change?'),
			  ];
schema = shuffle(schema);

prompt.start();
prompt.get(schema, function (err, result) {
  console.log();
  console.log(get_answer(result));
});

function get_answer(result) {
	var answers = {
			  architecture : "Go with an archicture change!",
			  unitTest: "Unit test that bad boy!",
			  integrationTest : "Well i guess you need an integration test.",
			  processChange : "A process change would be better than nothing...",
			  systemChange: "Go with the last resort... a system change."
			  
	  };
	  var priority = ['architecture', 'unitTest', 'integrationTest', 'processChange', 'systemChange'];
	  for (var i = 0; i < priority.length; i++) {
		  var change = priority[i];
	      if (result[change].toUpperCase() == 'Y') {
	    	  return answers[change];
	      }
	  }
	  return "Shenangins!";
};

function create_question(name, description) {
	return {
		name: name,
	    description: description,
	    type: 'string',                 
	    pattern: /^[YNyn]$/,                  
	    message: 'Must be Y or N', 
	  };
};

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
