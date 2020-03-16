const model1= {
    days: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
    timeSlots: ['09.00 - 10.00 ','10.20 - 11.20','12.00 - 13.00 ','13.20 - 14.30', ],
    events: [
        //Modul 1- Mandag 
        {
        name: 'Nøkkelkompetanser',
        nickName: 'NK',
        time: {
            day: 0,
            timeSlot: 0
        },
        module: 1,
        teachers: ['Eskil', 'Geir']
    },
    {
        name: 'Kodeøkt',
        nickName: 'KT',
        time: {
            day: 0,
            timeSlot: 1
        },
        module: 1,
        teachers: ['Terje']
    },
    {
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module: 1,
        teachers: ['']
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 3
        },
        module: 1,
        teachers: ['Linn']
    },
    //Modul1- Tirsdag
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 1,
            timeSlot: 0
        },
        module: 1,
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module: 1,
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 1,
            timeSlot: 2
        },
        module: 1,
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 1,
            timeSlot: 3
        },
        module: 1,
        teachers: ['Linn']
    },
    //modul 1 - Onsdag
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 2,
            timeSlot: 0
        },
        module: 1,
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: 1,
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: 1,
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module: 1,
        teachers: ['Linn']
    },
    // Modul 1- Torsdag
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 3,
            timeSlot: 0
        },
        module: 1,
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module: 1,
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 3,
            timeSlot: 2
        },
        module: 1,
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 3
        },
        module: 1,
        teachers: ['Linn']
    },
    // Modul 1- Fredag 
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 4,
            timeSlot: 0
        },
        module: 1,
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module: 1,
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 4,
            timeSlot: 2
        },
        module: 1,
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 3
        },
        module: 1,
        teachers: ['Linn']
    },
]}

function Modul1() {
    document.getElementById('mainContent').innerHTML = `
    <h1 style="text-align: center;"> Alle Moduler </h1>
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
                <strong>Modul ${event.module}</strong>
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

const model2= {
    days: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
    timeSlots: ['09.00 - 10.00 ','10.20 - 11.20','12.00 - 13.00 ','13.20 - 14.30', ],
    events: [
        {
            name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
            nickName: 'MM + FJ',
            time: {
                day: 0,
                timeSlot: 0
            },
            module: 2,
            teachers: ['Terje']
        },
        {
            name: 'Fokusert Jobbing alene eller i Team',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 1
            },
            module: 2,
            teachers: ['Linn']
        },
        {
            name: 'Parprogrammering to og to med mulighet for hjelp',
            nickName: 'PP',
            time: {
                day: 0,
                timeSlot: 2
            },
            module: 2,
            teachers: [null]
        },
        {
            name: 'Fokusert Jobbing alene eller i Team',
            nickName: 'FJ',
            time: {
                day: 0,
                timeSlot: 3
            },
            module: 2,
            teachers: ['Kvamme']
        },
        //Modul2- Tirsdag
        {
            name: 'Nøkkelkompetanser fellesøkt med Eskil og/ eller Geir / Kodetime fellesøkt med Terje',
            nickName: 'NK/ KT',
            time: {
                day: 1,
                timeSlot: 0
            },
            module: 2,
            teachers: ['GET']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 1,
                timeSlot: 1
            },
            module: 2,
            teachers: ['Kvamme']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 1,
                timeSlot: 2
            },
            module: 2,
            teachers: ['']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 1,
                timeSlot: 3
            },
            module: 2,
            teachers: ['ABY']
        },
        //modul 2 - Onsdag
        {
            name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
            nickName: 'MM + FJ',
            time: {
                day: 2,
                timeSlot: 0
            },
            module: 2,
            teachers: ['ABY']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 2,
                timeSlot: 1
            },
            module: 2,
            teachers: ['Kvamme']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 2,
                timeSlot: 2
            },
            module: 2,
            teachers: ['']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 2,
                timeSlot: 3
            },
            module: 2,
            teachers: ['Kvamme']
        },
        // Modul 2- Torsdag
        {
            name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
            nickName: 'MM + FJ',
            time: {
                day: 3,
                timeSlot: 0
            },
            module: 2,
            teachers: ['Terje']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 3,
                timeSlot: 1
            },
            module: 2,
            teachers: ['Kvamme']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 3,
                timeSlot: 2
            },
            module: 2,
            teachers: ['']
        },{
            name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
            nickName: 'PJ',
            time: {
                day: 3,
                timeSlot: 3
            },
            module: 2,
            teachers: ['ABY']
        },
        // Modul 2- Fredag 
        {
            name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
            nickName: 'MM + FJ',
            time: {
                day: 4,
                timeSlot: 0
            },
            module: 2,
            teachers: ['ABY']
        },{
            name: 'Fokusert Jobbing alene eller i Team',
            nickName: 'FJ',
            time: {
                day: 4,
                timeSlot: 1
            },
            module: 2,
            teachers: ['Kvamme']
        },{
            name: 'Oppsummering av Uka i Team for hverandre',
            nickName: 'OUT',
            time: {
                day: 4,
                timeSlot: 2
            },
            module: 2,
            teachers: ['Eskil', 'Kvamme']
        },{
            name: 'Fokusert Jobbing alene eller i Team',
            nickName: 'FJ',
            time: {
                day: 4,
                timeSlot: 3
            },
            module: 2,
            teachers: ['Kvamme']
        },
    ]}
    function Modul2() {
        document.getElementById('mainContent').innerHTML = `
        <h1 style="text-align: center;"> Alle Moduler </h1>
    <table> 
        <tr>
            <th> </th>
            ${model1.days.map(d=> `
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
        const dayNos = Array.from(model1.days.keys());
        return `
        <tr><th>${model2.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
            `
            <td>
                <ul>
                    ${eventsFromDayAndTime2(dayNo, timeSlot).map( event => `
                    <strong>Modul ${event.module}</strong>
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
    const model3= {
        days: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
        timeSlots: ['09.00 - 10.00 ','10.20 - 11.20','12.00 - 13.00 ','13.20 - 14.30', ],
        events: [
            {
                name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
                nickName: 'MM + FJ',
                time: {
                    day: 0,
                    timeSlot: 0
                },
                module: 3,
                teachers: ['ABY']
            },
            {
                name: 'Nøkkelkompetanser',
                nickName: 'NK',
                time: {
                    day: 0,
                    timeSlot: 1
                },
                module: 3,
                teachers: ['Eskil', 'Geir']
            },
            {
                name: 'Parprogrammering to og to med mulighet for hjelp',
                nickName: 'PP',
                time: {
                    day: 0,
                    timeSlot: 2
                },
                module: 3,
                teachers: [null]
            },
            {
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'FJ',
                time: {
                    day: 0,
                    timeSlot: 3
                },
                module: 3,
                teachers: ['Kvamme']
            },
            //Modul3- Tirsdag
            {
                name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
                nickName: 'NK/ KT',
                time: {
                    day: 1,
                    timeSlot: 0
                },
                module: 3,
                teachers: ['GET']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'PJ',
                time: {
                    day: 1,
                    timeSlot: 1
                },
                module: 3,
                teachers: ['Kvamme']
            },{
                name: 'Parprogrammering to og to med muligheter for hjelp',
                nickName: 'Pp',
                time: {
                    day: 1,
                    timeSlot: 2
                },
                module: 3,
                teachers: ['']
            },{
                name: 'Kodetime fellesøkt med Terje',
                nickName: 'KT',
                time: {
                    day: 1,
                    timeSlot: 3
                },
                module: 3,
                teachers: ['Terje']
            },
            //modul 3 - Onsdag
            {
                name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
                nickName: 'MM + FJ',
                time: {
                    day: 2,
                    timeSlot: 0
                },
                module: 3,
                teachers: ['ABY']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'PJ',
                time: {
                    day: 2,
                    timeSlot: 1
                },
                module: 3,
                teachers: ['Kvamme']
            },{
                name: 'Parprogrammering to og to med muligheter for hjelp',
                nickName: 'PP',
                time: {
                    day: 2,
                    timeSlot: 2
                },
                module: 3,
                teachers: ['']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'PJ',
                time: {
                    day: 2,
                    timeSlot: 3
                },
                module: 3,
                teachers: ['Kvamme']
            },
            // Modul 2- Torsdag
            {
                name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
                nickName: 'MM + FJ',
                time: {
                    day: 3,
                    timeSlot: 0
                },
                module: 3,
                teachers: ['Terje']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'FJ',
                time: {
                    day: 3,
                    timeSlot: 1
                },
                module: 3,
                teachers: ['Kvamme']
            },{
                name: 'Parprogrammering to og to med muligheter for hjelp',
                nickName: 'PP',
                time: {
                    day: 3,
                    timeSlot: 2
                },
                module: 3,
                teachers: ['']
            },{
                name: 'Kodetime fellesøkt med Terje',
                nickName: 'KT',
                time: {
                    day: 3,
                    timeSlot: 3
                },
                module: 3,
                teachers: ['Kvamme']
            },
            // Modul 2- Fredag 
            {
                name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
                nickName: 'MM + FJ',
                time: {
                    day: 4,
                    timeSlot: 0
                },
                module: 3,
                teachers: ['ABY']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'FJ',
                time: {
                    day: 4,
                    timeSlot: 1
                },
                module: 3,
                teachers: ['Kvamme']
            },{
                name: 'Oppsummering av Uka i Team for hverandre',
                nickName: 'OUT',
                time: {
                    day: 4,
                    timeSlot: 2
                },
                module: 3,
                teachers: ['Eskil', 'Kvamme']
            },{
                name: 'Fokusert Jobbing alene eller i Team',
                nickName: 'FJ',
                time: {
                    day: 4,
                    timeSlot: 3
                },
                module: 3,
                teachers: ['Kvamme']
            },
        ]}
        function Modul3() {
            document.getElementById('mainContent').innerHTML = `
            <h1 style="text-align: center;"> Alle Moduler </h1>
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
                        <strong>Modul ${event.module}</strong>
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