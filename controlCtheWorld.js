let a = "Hello World!";
let b = 0;

function mMo() {
	if (b < a.length) {
		process.stdout.write(a.charAt(b));
		b++;
		setTimeout(mMo, 100);
	} else {
		const wrld = ['|', '/', '-', '\\'];
		let c = 0;
		
		setInterval(() => {
		let freeworld = a.substring(0,13) + wrld[c++] + a.substring(13);
            
            
        process.stdout.write('\r' + freeworld);
		
        if (c === wrld.length) {
			c = 0;
		}
		}, 33.33);
	}
}


mMo();