//AutoCPP
//by Haruue Icymoon, Sat Nov 28 13:53:05 CST 2015

var $f3 = window.frames["topmain"].frames["main"];

var choices=new Array('A', 'B', 'C', 'D');

function getAnswer() {
	for (var i = 0; i <= 3; i++) {
		var vTestParam = '<cTestParam><cQuestion>' + $f3.cQuestionID.value + '</cQuestion><cUserAnswer>' + choices[i] + '</cUserAnswer></cTestParam>';
		var isTrue = $f3.CExam.CPractice.IsOrNotTrue(vTestParam);
		if(isTrue.value) return choices[i];
	}
}

function choose() {
	$f3.makeChoice(getAnswer());
	setTimeout("choose()", 2700);
}

choose();
