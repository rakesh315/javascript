document.write("<b>Using while loops </b><br />");
		var i = 0, j = 1, k;
		document.write("Fibonacci series less than 40<br />");
		while(i<40)
		{
			document.write(i + "<br />");
			k = i+j;
			i = j;
			j = k;
		}