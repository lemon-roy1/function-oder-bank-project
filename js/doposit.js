document.getElementById('btn-click').addEventListener('click', function(){
    const newDoposit = getInputFieldValueById('doposit-field');
    const dopositTotal = getTextElementValueById('doposit-total')
    const totalDopositAmont = dopositTotal + newDoposit ;

    setElementValuebyId('doposit-total',totalDopositAmont);


     const newBalans = getTextElementValueById('balance-total');
     const totalBalans = totalDopositAmont + newBalans;
     setElementValuebyId('balance-total',totalBalans)

})