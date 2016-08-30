 //limitLength is what you want display the united length
 //wordLength is String,limitLength is Number.
 //fixLength(word,limitLength);
var fixLength=function(word,limitLength){
	  if(word.length>=limitLength){
			return word;
		}else{
			var fixNum=limitLength-word.length;
			var newWord=word+ new Array(fixNum).join(' ');
			return newWord;
		} 
	}





module.exports={
		fixLength:fixLength
		}



