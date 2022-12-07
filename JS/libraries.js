const masterEnemyList = {
    slime: new Enemy('slime', 8, 2, 1, 3, 3, 0, 4, -1, 'slime.webp'),
    goblin: new Enemy('goblin', 12, 4, 4, 6, 2, 8, 12, -1, 'goblin.png'),
    bugbear: new Enemy('bugbear', 20, 8, 4, 1, 5, 15, 20, -1, 'bugbear.jpg'),
    spider: new Enemy('spider', 9, 3, 3, 7, 3, 0, 3, -1, 'spider.jpg'),
    wolf: new Enemy('wolf', 14, 5, 3, 4, 5, 0, 5, -1, 'wolf.jpg')
};

const enemiesByArea = {
    area1: [
        'slime',
        'goblin',
        'bugbear',
        'spider',
        'wolf'
    ]
};

const masterJobList2 = {
    hero: {
        img: '/img/hero.png'
    },
    warrior: {
        img: '/img/warrior.jpg'
    },
    thief: {
        img: '/img/thief.webp'
    },
    witch: {
        img: 'img/witch.png'
    }
}

const masterJobList = {
    hero: new Job('hero', 14, 6, 5, 6, 5, 4, 5, 5, 'medium'),
    warrior: new Job('warrior', 20, 0, 9, 5, 3, 6, 2, 3, 'heavy'),
    thief: new Job('thief', 12, 8, 3, 8, 8, 3, 4, 7, 'medium'),
    witch: new Job('witch', 8, 12, 1, 6, 4, 4, 9, 5)
};

const jobList = [
    'hero',
    'warrior',
    'thief',
    'witch'
];

const masterItemList = {
    weapons: {
        bareHands: new Item('bare hands', 'melee', 'light', "A hardy pair of fists, although it's hard to cause as much damage without a weapon some prefer to fight without one as it leaves them unecumbered to more easily dodge enemy attacks.", 3, 3, undefined, 3, true, false, 'raises evasion slightly'),
        ironDagger: new Item('iron dagger', 'melee', 'light', "A dagger that was made for skinning animal carcasses that is being employed as a weapon of war.", 6, 3, undefined, undefined, true),
        oldIronSword: new Item('old iron sword', 'melee', 'medium', "An old iron sword that's seen better days, although it still maintains an edge.", 9, 4, undefined, undefined, true),
        rustedBattleAxe: new Item('rusted battle axe', 'melee', 'heavy', "An axe from an ancient war that hasn't seen maintenance in awhile...", 14, 5, undefined, undefined, true),
        woodenBow: new Item('wooden bow', 'ranged', 'light', "A durable wooden bow, unto now primarily used for hunting for food", 6, 6, undefined, undefined, true),
        woodenStaff: new Item('wooden staff', 'melee weapon', 'light', 'A durable, light-weight walking stick that is being repurposed as a basic defensive weapon.', 5, 3, undefined, undefined, true)
    },
    helmets: {

    },
    armor: {
        leatherJerkin: new Item('leather jerkin', 'armor', 'heavy', "Stiff and difficult to move in, but it can protect its wearer from clawing talons and biting fangs.", undefined, undefined, 5, 2, true),
        quiltedJerkin: new Item('quilted jerkin', 'armor', 'medium', "Although a bit uncomfortable and scratchy, this armor provides a moderate amount of protection as well as ease of movement.", undefined, undefined, 3, 4, true),
        travelersRobe: new Item('travelers robe', 'armor', 'medium', "A simple traveler's robe meant to protect one from the elements. Has become favored by those gifted with majikal abilities as it allows for the free movement of the limbs required for the arcane motions used to conjure majiks.", undefined, undefined, 1, 5, true) 
    },
    accessories: {

    }
}

const startingEquipment = {
    hero: {
        startingWeapon: 'oldIronSword',
        startingArmor: 'quiltedJerkin'
    },
    warrior: {
        startingWeapon: 'rustedBattleAxe',
        startingArmor: 'leatherJerkin'
    },
    thief: {
        startingWeapon: 'ironDagger',
        startingArmor: 'quiltedJerkin'
    },
    witch: {
        startingWeapon: 'woodenStaff',
        startingArmor: 'travelersRobe'
    }
}

const script = {
    intro:
        [
            `Please enter the main hero's name!`,
            `Name your strong, tough friend!`,
            `Name your tricky, deft-handed friend!`,
            `Name your friend with a mysterious presence!`
        ],
    classes:
        [
            'hero',
            'fighter',
            'thief',
            'witch'
        ]
};

const screens = {
    intro: 
        `
            <div id="intro-screen" class="container p-1 position-relative">
                <div id='intro-div' class="row center position-absolute top-50 start-50 translate-middle">
                    <button type="button" id="start-naming" class="btn col-3 btn-success mt-5">Name Your Party</button>
                    <button type="button" id="start-combat" class="btn col-3 btn-info mt-5">Skip Naming</button>
                </div>
            </div>
        `,
    
    nameParty:
        `
            <label for="character-name" id='character-label' class="text-center col-12">${script.intro[0]}</label>
            <div id='character-name-div'>
                <div class="mt-3 col-6">
                    <input name='character-name' id="character-name-input"></input>
                </div>
                <div id="radio-div" class="mt-3 col-3">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genderOptions" id="radioHe" value="male" checked>
                        <label class="form-check-label" for="inlineRadio1">He</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genderOptions" id="radioShe" value="female">
                        <label class="form-check-label" for="inlineRadio2">She</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="genderOptions" id="radioThey" value="non-binary">
                        <label class="form-check-label" for="inlineRadio3">They</label>
                    </div>
                </div>
                <div class="mt-3  col-3">
                    <button type="button" id="name-character" class="btn btn-success">Name Yourself</button>
                </div>
            </div>
        `,
        
    battle: 
        `
            <div id='combat-screen' class="container mt-3 p-3">
                <div id="enemy-area" class="row mt-1 p-5">

                </div>
                <div id="combat-log" class="row p-5 text-center">

                </div>
                <div id="party" class="row">

                </div>
                <div id="commands" class="row mt-3">

                </div>
            </div>
        `,
    
    postBattle: 
        `
            <div id="post-combat-screen" class="container p-1 position-relative">
                <div id='intro-div' class="row center position-absolute top-50 start-50 translate-middle">
                    <button type="button" id="next-combat" class="btn btn-info col-4">Seek Out an Enemy</button>
                </div>
            </div>
        `
};