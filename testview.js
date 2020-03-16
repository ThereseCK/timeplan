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
                    <strong> ${event.module}</strong>
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
function Modul1(){
    document.getElementById('mainContent').innerHTML = `
    <h1 style="text-align: center;"> Modul1 </h1>
    <table> 
        <tr>
            <th> </th>
            ${model1.days.map(d=> `
            <th>${d}</th>`).join('')}
        </tr>
        ${createHtmlForTimeSlot1(0)}
        <tr class="pause"> 
            <th> 10.00 - 10.20 </th>
            <th colspan="5"> FELLES PAUSE </th>
        </tr>
        ${createHtmlForTimeSlot1(1)}
        <tr class="pause"> 
            <th> 11.20 - 12.00 </th>
            <th colspan="5"> Lunsj </th>
        </tr>
        ${createHtmlForTimeSlot1(2)}
        <tr class="pause"> 
            <th> 13.00 - 13.20 </th>
            <th colspan="5"> FELLES PAUSE </th>
        </tr>
        ${createHtmlForTimeSlot1(3)}
        <tr class="pause"> 
            <th> 14.30 - 15.00 </th>
            <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
        </tr>
    </table>
    `;
    }
    function createHtmlForTimeSlot1(timeSlot){
        const dayNos = Array.from(model1.days.keys());
        return `
        <tr><th>${model1.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
            `
            <td>
                <ul>
                    ${eventsFromDayAndTime1(dayNo, timeSlot).map( event => `
                   
                    <li> 
                        ${event.name} <br>(${event.teachers.join(', ')})    
                    </li>
                    `).join('') }
                </ul>
            </td>`).join('')}
            </tr>`;
    }
    function eventsFromDayAndTime1(dayNo, timeSlot) {
        return model1.events.filter(
            event => event.time.day === dayNo && event.time.timeSlot === timeSlot
        );
    }
    function Modul2(){
        document.getElementById('mainContent').innerHTML = `
        <h1 style="text-align: center;"> Modul 2 </h1>
        <table> 
            <tr>
                <th> </th>
                ${model2.days.map(d=> `
                <th>${d}</th>`).join('')}
            </tr>
            ${createHtmlForTimeSlot2(0)}
            <tr class="pause"> 
                <th> 10.00 - 10.20 </th>
                <th colspan="5"> FELLES PAUSE </th>
            </tr>
            ${createHtmlForTimeSlot2(1)}
            <tr class="pause"> 
                <th> 11.20 - 12.00 </th>
                <th colspan="5"> Lunsj </th>
            </tr>
            ${createHtmlForTimeSlot2(2)}
            <tr class="pause"> 
                <th> 13.00 - 13.20 </th>
                <th colspan="5"> FELLES PAUSE </th>
            </tr>
            ${createHtmlForTimeSlot2(3)}
            <tr class="pause"> 
                <th> 14.30 - 15.00 </th>
                <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
            </tr>
        </table>
        `;
        }
        function createHtmlForTimeSlot2(timeSlot){
            const dayNos = Array.from(model2.days.keys());
            return `
            <tr><th>${model2.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
                `
                <td>
                    <ul>
                        ${eventsFromDayAndTime2(dayNo, timeSlot).map( event => `
                       
                        <li> 
                            ${event.name} <br>(${event.teachers.join(', ')})    
                        </li>
                        `).join('') }
                    </ul>
                </td>`).join('')}
                </tr>`;
        }
        function eventsFromDayAndTime2(dayNo, timeSlot) {
            return model2.events.filter(
                event => event.time.day === dayNo && event.time.timeSlot === timeSlot
            );
        }
        
        function Modul3(){
            document.getElementById('mainContent').innerHTML = `
            <h1 style="text-align: center;"> Modul 3 </h1>
            <table> 
                <tr>
                    <th> </th>
                    ${model3.days.map(d=> `
                    <th>${d}</th>`).join('')}
                </tr>
                ${createHtmlForTimeSlot3(0)}
                <tr class="pause"> 
                    <th> 10.00 - 10.20 </th>
                    <th colspan="5"> FELLES PAUSE </th>
                </tr>
                ${createHtmlForTimeSlot3(1)}
                <tr class="pause"> 
                    <th> 11.20 - 12.00 </th>
                    <th colspan="5"> Lunsj </th>
                </tr>
                ${createHtmlForTimeSlot3(2)}
                <tr class="pause"> 
                    <th> 13.00 - 13.20 </th>
                    <th colspan="5"> FELLES PAUSE </th>
                </tr>
                ${createHtmlForTimeSlot3(3)}
                <tr class="pause"> 
                    <th> 14.30 - 15.00 </th>
                    <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
                </tr>
            </table>
            `;
            }
            function createHtmlForTimeSlot3(timeSlot){
                const dayNos = Array.from(model3.days.keys());
                return `
                <tr><th>${model3.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
                    `
                    <td>
                        <ul>
                            ${eventsFromDayAndTime3(dayNo, timeSlot).map( event => `
                          
                            <li> 
                                ${event.name} <br>(${event.teachers.join(', ')})    
                            </li>
                            `).join('') }
                        </ul>
                    </td>`).join('')}
                    </tr>`;
            }
            function eventsFromDayAndTime3(dayNo, timeSlot) {
                return model3.events.filter(
                    event => event.time.day === dayNo && event.time.timeSlot === timeSlot
                );
            }
            