//defined variables
var curNum="0";
var operation=0;//numbers in place of actual operators
var maxLen=3;
var mem="";


//function for adding digits t screen
function calculate(key)
{
//switch to handle cases
	var displayed=document.getElementById("screen1");

	switch (key)
	{
			/*case key>maxLen:
				curNum="Error:Too long";	
				document.getElementById("screen1").value=curNum;
				break;*/
			case '=':
			
				mem=checkPow(mem);
				displayed.value=mem;
				curNum="0";
				break;

			case 'c':
				displayed.value='0';
				curNum="0";
				mem="0";
				break;

			case '+':
				mem=checkPow(mem);
				displayed.value=mem;
				mem+=key;
				curNum="0";
				break;

			case '-':
				mem=checkPow(mem);
				displayed.value=mem;
				mem+=key;
				curNum="0";
				break;

			case '/':
				mem=checkPow(mem);
				displayed.value=mem;
				mem+=key;
				curNum="0";
				break;

			case '*':
				mem=checkPow(mem);
				displayed.value=mem;
				mem+=key;
				curNum="0";
				break;

			case 'sin':
				mem=checkPow(mem);
				mem=Math.sin(eval(mem));
				displayed.value=mem;
				//dunno ooo
				curNum="0";
				break;

			case 'cos':
				mem=checkPow(mem);
				mem=Math.cos(eval(mem));
				displayed.value=mem;
				curNum="0";
				break;

			case 'tan':
				mem=checkPow(mem);
				mem=Math.tan(eval(mem));
				displayed.value=mem;
				curNum="0";
				break;

			case 'sqrt':
				mem=checkPow(mem);
				mem=Math.floor(Math.sqrt(eval(mem)),3);
				displayed.value=mem;
				curNum="0";
				break;

			case '^':
				displayed.value=mem;
				curNum="0";
				mem+=key;
				break;

			default:
				if(curNum==0	&& curNum.indexOf(".")== -1)//eval means evaluate string expression
				{
					curNum=key;
					mem+=curNum;
					displayed.value=curNum;
				}
				else
				{
					curNum+=key;
					mem+=key;
					//mem=eval(curNum);
					displayed.value=curNum;
				}
				break;
		
	}


	//powers oooo!
	function checkPow(num)
	{
		if(num.indexOf('^')> -1)
		{
			var memPower=num.split("^");
			var pow=Math.pow(memPower[0],memPower[1]);
			return pow;
			memPower=[];
		}
		else
		{
			var pow=eval(num);
			return pow;
		}
	};

	
};//end of calculate function


