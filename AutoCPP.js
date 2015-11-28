//AutoCPP
//by Haruue Icymoon, Sat Nov 28 13:53:05 CST 2015

var $f3 = window.frames["topmain"].frames["main"];

function numToChoice (num) {
	switch (num) {
		case 0: return 'A';
		case 1: return 'B';
		case 2: return 'C';
		case 3: return 'D';
	}
}

function getAnswer() {
	for (var i = 0; i <= 3; i++) {
		var vTestParam = '<cTestParam><cQuestion>' + $f3.cQuestionID.value + '</cQuestion><cUserAnswer>' + numToChoice(i) + '</cUserAnswer></cTestParam>';
		var isTrue = $f3.CExam.CPractice.IsOrNotTrue(vTestParam);
		if(isTrue.value) return numToChoice(i);
	}
}

$f3.makeChoice(getAnswer());
