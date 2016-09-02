//limitLength is what you want display the united length
//wordLength is String,limitLength is Number.
//fixLength(word,limitLength)

var sutil=function(){};

sutil.prototype.fixLength=function (word, limitLength) {
	if (word.length >= limitLength) {
		return word;
	} else {
		var fixNum = limitLength - word.length;
		var newWord = word + new Array(fixNum+1).join(' ');
		return newWord;
	}
}
sutil.prototype.reduce=function(){
	return [].reduce.call(arguments,function(a,b){
		for(var i in a ){
			b[i]=a[i]
		};
		return b;
	})
}

sutil.prototype.reduceRight=function(){
	return [].reduceRight.call(arguments,function(a,b){
			for(var i in a ){
				b[i]=a[i]
			}
			return b;
		})

}











module.exports=new sutil();