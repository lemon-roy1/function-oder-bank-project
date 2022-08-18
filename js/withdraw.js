document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdraw = getInputFieldValueById('withdraw-filed');
    const totalWithdraw = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = totalWithdraw + newWithdraw;
      
    setElementValuebyId('withdraw-total',newWithdrawTotal);

    const newBalansAmont = getTextElementValueById('balance-total');
    const balansTotal = newBalansAmont - newWithdrawTotal;
    setElementValuebyId('balance-total',balansTotal);


})