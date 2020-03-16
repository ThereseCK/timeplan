const model= {
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
        module:  "Modul 1",
        teachers: ['Eskil', 'Geir']
    },
    {
        name: 'Kodeøkt',
        nickName: 'KT',
        time: {
            day: 0,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Terje']
    },
    {
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 3
        },
        module:  "Modul 1",
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
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 1,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 1,
            timeSlot: 3
        },
        module:  "Modul 1",
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
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module:  "Modul 1",
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
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 3,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 3
        },
        module:  "Modul 1",
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
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 4,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 3
        },
        module: "Modul 1",
        teachers: ['Linn']
    },

    //Modul 2- Mandag 
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 0,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['Terje']
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Linn']
    },
    {
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: [null]
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 3
        },
        module: "Modul 2",
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
        module: "Modul 2",
        teachers: ['GET']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 3
        },
        module: "Modul 2",
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
        module: "Modul 2",
        teachers: ['ABY']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module: "Modul 2",
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
        module: "Modul 2",
        teachers: ['Terje']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 3,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: 'Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp',
        nickName: 'PJ',
        time: {
            day: 3,
            timeSlot: 3
        },
        module: "Modul 2",
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
        module: "Modul 2",
        teachers: ['ABY']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: 'Oppsummering av Uka i Team for hverandre',
        nickName: 'OUT',
        time: {
            day: 4,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['Eskil', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 3
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },

    //Modul3 Mandag
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 0,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['ABY']
    },
    {
        name: 'Nøkkelkompetanser',
        nickName: 'NK',
        time: {
            day: 0,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Eskil', 'Geir']
    },
    {
        name: 'Parprogrammering to og to med mulighet for hjelp',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: [null]
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 3
        },
        module: "Modul 3",
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
        module: "Modul 3",
        teachers: ['GET']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: 'Parprogrammering to og to med muligheter for hjelp',
        nickName: 'Pp',
        time: {
            day: 1,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name: 'Kodetime fellesøkt med Terje',
        nickName: 'KT',
        time: {
            day: 1,
            timeSlot: 3
        },
        module: "Modul 3",
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
        module: "Modul 3",
        teachers: ['ABY']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: 'Parprogrammering to og to med muligheter for hjelp',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },
    // Modul 3- Torsdag
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 3,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['Terje']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: 'Parprogrammering to og to med muligheter for hjelp',
        nickName: 'PP',
        time: {
            day: 3,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name: 'Kodetime fellesøkt med Terje',
        nickName: 'KT',
        time: {
            day: 3,
            timeSlot: 3
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },
    // Modul 3- Fredag 
    {
        name: 'Morramøte med teamet + Fokusert Jobbing alene eller i Team',
        nickName: 'MM + FJ',
        time: {
            day: 4,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['ABY']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: 'Oppsummering av Uka i Team for hverandre',
        nickName: 'OUT',
        time: {
            day: 4,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['Eskil', 'Kvamme']
    },{
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 3
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },
 // Onsdag GET IT
    {
        name: 'Nøkkelkompetanser fellesøkt med Eskil og/ eller Geir /  Kodetime fellesøkt med Terje',
        nickName: 'NK / KT',
        time: {
            day: 2,
            timeSlot: 0
        },
        module: 'GET IT',
        teachers: ['GET']
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: 'GET IT',
        teachers: []
    },
    {
        name: 'Parprogrammering to og to med muligheter for hjelp',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: 'GET IT',
        teachers: []
    },
    {
        name: 'Fokusert Jobbing alene eller i Team',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module: 'GET IT',
        teachers: ['Kvamme']
    },

]}