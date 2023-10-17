

document.addEventListener('DOMContentLoaded',function() {
    const monthsBR = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const tableDays = document.getElementById('days');
    function GetDaysCalendar(month,year) {
        document.getElementById('month').innerHTML = monthsBR[month];
        document.getElementById('year').innerHTML = year;

        let firstDayOfWeek = new Date(year,month,1).getDay()-1;
        let getLastDayThisMonth = new Date(year,month+1,0).getDate();

        for(var i = -firstDayOfWeek,index = 0 ; i < (42-firstDayOfWeek); i++,index++){
            let dt = new Date(year,month,i);
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('last-month');
            dayTable.classList.remove('next-month');
            dayTable.classList.remove('current-day');
            dayTable.innerHTML = dt.getDate();

            if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
                dayTable.classList.add('current-day')
            }
            if (i < 1) {
                dayTable.classList.add('last-month')
            }
            if (i > getLastDayThisMonth) {
                dayTable.classList.add('next-month')
            }

        }
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
    GetDaysCalendar(month,year);
    GetDaysCalendar(9,2023);

    const next_button = document.getElementById('btn_prev');
    const previous_button = document.getElementById('btn_ant');

    next_button.onclick = function() {
        month++;
        if (month > 11) {
            month = 0;
            year++; 
        }
        GetDaysCalendar(month,year);
    }
    previous_button.onclick = function(){
        month--;
        if (month < 0) {
            month = 11;
            year--; 
        }
        GetDaysCalendar(month,year);
    }

})