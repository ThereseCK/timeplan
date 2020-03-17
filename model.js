const model= {
    selectedModule: 'Modul 1',
    days: ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'],
    timeSlots: ['09.00 - 10.00 ','10.20 - 11.20','12.20 - 13.00 ','13.40 - 14.40', ],
    menuOptions: [
        {value: null, txt: 'Alle Modulene'},
        {value: 'Modul 1', txt: 'Modul 1'},
        {value: 'Modul 2', txt: 'Modul 2'},
        {value: 'Modul 3', txt: 'Modul 3'},
        {value: 'GET IT', txt: 'GET IT'},
    ],

    events: [
        //Modul 1- Mandag 
        {
        name: '<div class="NK">Nøkkelkompetanser </div>',
        nickName: 'NK',
        time: {
            day: 0,
            timeSlot: 0
        },
        module:  "Modul 1",
        teachers: ['Eskil', 'Geir']
    },
    {
        name: '<div class="KT">Kodeøkt</div>',
        nickName: 'KT',
        time: {
            day: 0,
            timeSlot: 1
        },

        module:  "Modul 1",
        teachers: ['Terje']
    },
    {
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 1,
            timeSlot: 0
        },
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 1,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 2,
            timeSlot: 0
        },
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name:' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name:'<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 3,
            timeSlot: 0
        },
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 3,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 4,
            timeSlot: 0
        },
        module:  "Modul 1",
        teachers: ['Linn ', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module:  "Modul 1",
        teachers: ['Linn']
    },{
        name: '<div class="OUT">Oppsummering av Uka i Team for hverandre</div>',
        nickName: 'OUT',
        time: {
            day: 4,
            timeSlot: 2
        },
        module:  "Modul 1",
        teachers: ['Geir', 'Linn']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 0,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['Terje']
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 0,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Linn']
    },
    {
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: [null]
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="NKKT">Nøkkelkompetanser fellesøkt med Eskil og/ eller Geir / Kodetime fellesøkt med Terje</div>',
        nickName: 'NK/ KT',
        time: {
            day: 1,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['GET']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
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
        name:'<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 2,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['ABY']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 3,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['Terje']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
        nickName: 'PJ',
        time: {
            day: 3,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['']
    },{
        name: '<div class="PJ" >Prosjektjobbing i team og med fordelte oppgaver alene med muligheter for hjelp </div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 4,
            timeSlot: 0
        },
        module: "Modul 2",
        teachers: ['ABY']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module: "Modul 2",
        teachers: ['Kvamme']
    },{
        name: '<div class="OUT">Oppsummering av Uka i Team for hverandre</div>',
        nickName: 'OUT',
        time: {
            day: 4,
            timeSlot: 2
        },
        module: "Modul 2",
        teachers: ['Eskil', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name:'<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 0,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['ABY']
    },
    {
        name: '<div class="NK">Nøkkelkompetanser </div>',
        nickName: 'NK',
        time: {
            day: 0,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Eskil', 'Geir']
    },
    {
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 0,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: [null]
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'NK/ KT',
        time: {
            day: 1,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['GET']
    },{
        name:'<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'PJ',
        time: {
            day: 1,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'Pp',
        time: {
            day: 1,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name: '<div class="KT">Kodeøkt</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 2,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['ABY']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'PJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name:'<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 3,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['Terje']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 3,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 3,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['']
    },{
        name: '<div class="KT">Kodeøkt</div>',
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
        name: '<div class="MMFJ">Morramøte med teamet + Fokusert Jobbing alene eller i Team</div>',
        nickName: 'MM + FJ',
        time: {
            day: 4,
            timeSlot: 0
        },
        module: "Modul 3",
        teachers: ['ABY']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 4,
            timeSlot: 1
        },
        module: "Modul 3",
        teachers: ['Kvamme']
    },{
        name: '<div class="OUT">Oppsummering av Uka i Team for hverandre</div>',
        nickName: 'OUT',
        time: {
            day: 4,
            timeSlot: 2
        },
        module: "Modul 3",
        teachers: ['Eskil', 'Kvamme']
    },{
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
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
        name:  '<div class="NKKT">Nøkkelkompetanser fellesøkt med Eskil og/ eller Geir / Kodetime fellesøkt med Terje</div>',
        nickName: 'NK / KT',
        time: {
            day: 2,
            timeSlot: 0
        },
        module: 'GET IT',
        teachers: ['GET']
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 1
        },
        module: 'GET IT',
        teachers: []
    },
    {
        name: ' <div class="PP" >Parprogrammering to og to med mulighet for hjelp </div>',
        nickName: 'PP',
        time: {
            day: 2,
            timeSlot: 2
        },
        module: 'GET IT',
        teachers: []
    },
    {
        name: '<div class="FJ">Fokusert Jobbing alene eller i Team</div>',
        nickName: 'FJ',
        time: {
            day: 2,
            timeSlot: 3
        },
        module: 'GET IT',
        teachers: ['Kvamme']
    },

]}