const assert = require('assert');

function secondStatus(seconds){
	if (seconds % 2 == 1)
		return "O";
	else
		return "Y";
}

function fiveHoursStatus(hours){
		const a = Math.floor(hours / 5);
		if (a == 0)
			return "OOOO";
		else if (a == 1)
			return "ROOO";
		else if (a == 2)
			return "RROO";
		else if (a === 3)
			return "RRRO";
		else if (a === 4)
			return "RRRR";
}

function oneHourStatus(hours) {
		const a = hours % 5;
		if(a == 1)
			return "ROOO";
		else if (a == 2)
			return "RROO";
		else if (a == 3)
			return "RRRO";
		else if (a == 4)
			return "RRRR";
		else
			return "OOOO";
}

function fiveMinuteStatus(minutes) {
	const b = Math.floor(minutes /5);
	let string = "OOOOOOOOOOO";
	if (b ==12) {
		return string;
	} else {
		let array = string.split("");
		for (var i = 0; i < b; i++){
 			if ((i+1)%3 == 0){
 				array[i] = "R";
 			} else { 
 				array[i] = "Y";
 			}
		}
		return array.join("");
	}
}



describe("Berlin Clock", () => {

	it("Given a 1 second, returns OFF", () => {
		assert.equal(secondStatus(1), "O")
	});

	it("Given a 2 second, returns ON", () => {
		assert.equal(secondStatus(2), "Y")
	});

	it("Given 0 seconds, returns ON", () => {
		assert.equal(secondStatus(0), "Y")
	});

	it("Given 1 hour, returns OOOO", () => {
		assert.equal(fiveHoursStatus(1), "OOOO")
	});

	it("Given 5 hour, returns ROOO", () => {
		assert.equal(fiveHoursStatus(5), "ROOO")
	});
	
	it("Given 10 hour, returns RROO", () => {
		assert.equal(fiveHoursStatus(10), "RROO")
	});
	
	it("Given 12 hour, returns RROO", () => {
		assert.equal(fiveHoursStatus(12), "RROO")
	});
	
	it("Given 15 hour, returns RRRO", () => {
		assert.equal(fiveHoursStatus(15), "RRRO")
	});
	
	it("Given 20 hour, returns RRRR", () => {
		assert.equal(fiveHoursStatus(20), "RRRR")
	});

	it("Given 1 hour, returns ROOO", () => {
		assert.equal(oneHourStatus(1), "ROOO")
	});

	it("Given 2 hours, returns RROO", () => {
		assert.equal(oneHourStatus(2), "RROO")
	});

	it("Given 3 hours, returns RRRO", () => {
		assert.equal(oneHourStatus(3), "RRRO")
	});

	it("Given 4 hours, returns RRRR", () => {
		assert.equal(oneHourStatus(4), "RRRR")
	});

	it("Given 5 hours, returns OOOO", () => {
		assert.equal(oneHourStatus(5), "OOOO")
	});

  it(" Given 5 minutes, returns YOOOOOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(5), "YOOOOOOOOOO")
  });

  it(" Given 10 minutes, returns YYOOOOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(10), "YYOOOOOOOOO")
  });

  it(" Given 15 minutes, returns YYROOOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(15), "YYROOOOOOOO")
  });

  it(" Given 20 minutes, returns YYRYOOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(20), "YYRYOOOOOOO")
  });

  it(" Given 25 minutes, returns YYRYYOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(25), "YYRYYOOOOOO")
  });

  it(" Given 30 minutes, returns YYRYYROOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(30), "YYRYYROOOOO")
  });

  it(" Given 35 minutes, returns YYRYYRYOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(35), "YYRYYRYOOOO")
  });
    
  it(" Given 40 minutes, returns YYRYYRYYOOO", ()=> {
  	assert.equal(fiveMinuteStatus(40), "YYRYYRYYOOO")
  });

  it(" Given 45 minutes, returns YYRYYRYYROO", ()=> {
  	assert.equal(fiveMinuteStatus(45), "YYRYYRYYROO")
  });

  it(" Given 50 minutes, returns YYRYYRYYRYO", ()=> {
  	assert.equal(fiveMinuteStatus(50), "YYRYYRYYRYO")
  });

  it(" Given 55 minutes, returns YYRYYRYYRYY", ()=> {
  	assert.equal(fiveMinuteStatus(55), "YYRYYRYYRYY")
  });

  it(" Given 60 minutes, returns OOOOOOOOOOO", ()=> {
  	assert.equal(fiveMinuteStatus(60), "OOOOOOOOOOO")
  });


});