/**
 * @author Flavio
 */

function Account(owner,accountType)
{
	this.transaction = [];
	this.numberTransaction = 0;
	this.rent = 0;
	this.saldo = 0;
	this.accountType = "";
	this.owner = "";
	this.accountType=accountType;
	this.owner = owner;
	
	this.getSaldo = function()
	{
		console.log("Saldo: "+this.saldo);
	};
	
	this.insert = function(deposit)
	{
		this.saldo = this.saldo+deposit;
		this.transaction[this.numberTransaction]=": +"+deposit;
		this.numberTransaction++;
	};
	
	this.withdraw = function(withdraw)
	{
		if(this.saldo>=withdraw)
		{
		this.saldo = this.saldo-withdraw;
		this.transaction[this.numberTransaction]=": -"+withdraw;
		this.numberTransaction++;
		}
		else
		{
			console.log("Impossible execute withdraw. No funds!");
		}
	};
	
	this.setRent = function(rent)
	{
		this.rent = rent;
	};
	
	this.getTransactions = function()
	{
		console.log("Account info: "+this.owner+" "+this.accountType);
		for (var i=0;i<this.transaction.length;i++)
		{
			console.log(this.transaction[i]);
		}
	};
}
