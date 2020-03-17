function show(){
document.getElementById('mainContent').innerHTML = `
<h1 style="text-align: center;"> Alle Moduler </h1>
<table> 
    <tr>
        <th> </th>
        ${model.days.map(d=> `
        <th>${d}</th>`).join('')}
    </tr>
    ${createHtmlForTimeSlot(0)}
    <tr class="pause"> 
        <th> 10.00 - 10.20 </th>
        <th colspan="5"> FELLES PAUSE </th>
    </tr>
    ${createHtmlForTimeSlot(1)}
    <tr class="pause"> 
        <th> 11.20 - 12.00 </th>
        <th colspan="5"> Lunsj </th>
    </tr>
    ${createHtmlForTimeSlot(2)}
    <tr class="pause"> 
        <th> 13.00 - 13.20 </th>
        <th colspan="5"> FELLES PAUSE </th>
    </tr>
    ${createHtmlForTimeSlot(3)}
    <tr class="pause"> 
        <th> 14.30 - 15.00 </th>
        <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
    </tr>
</table>
`;
}
function createHtmlForTimeSlot(timeSlot){
    const dayNos = Array.from(model.days.keys());
    return `
    <tr><th>${model.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
        `
        <td>
            <ul>
                ${eventsFromDayAndTime(dayNo, timeSlot).map( event => `
                <strong>Modul ${event.module}</strong>
                <li> 
                    ${event.name} <br>(${event.teachers.join(', ')})    
                </li>
                `).join('') }
            </ul>
        </td>`).join('')}
        </tr>`;
}
function eventsFromDayAndTime(dayNo, timeSlot) {
    return model.events.filter(
        event => event.time.day === dayNo && event.time.timeSlot === timeSlot
    );
}
