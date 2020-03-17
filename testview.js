function show() {
    // let selectedEvents = [];
    // for (let event of model.events) {
    //     if (model.selectedModule === null ||
    //         event.module === model.selectedModule) {
    //             selectedEvents.push(event);
    //     }
    // }

    let includeEvent = event => model.selectedModule === null
        || event.module === model.selectedModule;
    let selectedEvents = model.events.filter(includeEvent);

    document.getElementById('mainContent').innerHTML = `
    <h1 style="text-align: center;"> Modul 1 </h1>
    <table> 
        <tr>
            <th> </th>
            ${model.days.map(d => `
            <th>${d}</th>`).join('')}
        </tr>
        ${createHtmlForTimeSlot(0, selectedEvents)}
        <tr class="pause"> 
            <th> 10.00 - 10.20 </th>
            <th colspan="5"> FELLES PAUSE </th>
        </tr>
        ${createHtmlForTimeSlot(1, selectedEvents)}
        <tr class="pause"> 
            <th> 11.20 - 12.00 </th>
            <th colspan="5"> Lunsj </th>
        </tr>
        ${createHtmlForTimeSlot(2, selectedEvents)}
        <tr class="pause"> 
            <th> 13.00 - 13.20 </th>
            <th colspan="5"> FELLES PAUSE </th>
        </tr>
        ${createHtmlForTimeSlot(3, selectedEvents)}
        <tr class="pause"> 
            <th> 14.30 - 15.00 </th>
            <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
        </tr>
    </table>
    `;
}

function createHtmlForTimeSlot(timeSlot, events) {
    const dayNos = Array.from(model.days.keys());
    return `
        <tr><th>${model.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
        `
            <td>
                <ul>
                    ${eventsFromDayAndTime(dayNo, timeSlot, events).map(event => `
                   
                    <li> 
                        ${event.name} <strong style="color:grey;"><br>(${event.teachers.join(', ')}</strong>)    
                    </li><br>
                    `).join('')}
                </ul>
            </td>`).join('')}
            </tr>`;
}

function eventsFromDayAndTime(dayNo, timeSlot, events) {
    return events.filter(
        event => event.time.day === dayNo && event.time.timeSlot === timeSlot
    );
}
