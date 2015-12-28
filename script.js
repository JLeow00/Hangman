var consonants = "BCDFGHJKLMNPQRSTVWXYZ";
var typedBefore = "";
var word;
var hiddenWord;
var mistakesMade = 0;

var catList = [
"Hard Mode",
"Animals",
"Country Names",
"Food",
"Holidays",
"Jobs",
"Literary Classics",
"Maths",
"Science"
];

var wordList = [ //List of hangman words categorised
    ["abbey","abruptly","affix","askew","axiom","azure","bagpipes","bandwagon","banjo","bayou","bikini","blitz","bookworm","boxcar","boxful","buckaroo","buffalo","buffoon","cobweb","croquet","daiquiri","disavow","duplex","dwarves","equip","exodus","fishhook","fixable","foxglove","galaxy","galvanize","gazebo","gizmo","glowworm","guffaw","haiku","haphazard","hyphen","icebox","injury","ivory","ivy","jaundice","jawbreaker","jaywalk","jazzy","jigsaw","jiujitsu","jockey","jovial","joyful","juicy","jumbo","kazoo","keyhole","khaki","kilobyte","kiosk","kiwifruit","knapsack","larynx","luxury","marquis","megahertz","microwave","mystify","nightclub","nowadays","numbskull","ovary","oxidize","oxygen","pajama","peekaboo","pixel","pizazz","pneumonia","polka","quartz","quiz","quorum","razzmatazz","rhubarb","rickshaw","schizophrenia","sphinx","spritz","squawk","subway","swivel","topaz","unknown","unworthy","unzip","uptown","vaporize","vixen","vodka","vortex","walkway","waltz","wavy","waxy","wheezy","whiskey","whomever","wimpy","wizard","woozy","xylophone","yachtsman","yippee","youthful","zephyr","zigzag","zilch","zodiac","zombie"],
    ["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","leopard","lion","lizard","lobster","monkey","octopus","ostrich","otter","owl","oyster","panda","parrot","pelican","pig","pigeon","porcupine","puppy","rabbit","rat","reindeer","rhinoceros","rooster","scorpion","seal","shark","sheep","shrimp","snail","snake","sparrow","spider","squid","squirrel","swallow","swan","tiger","toad","tortoise","turtle","vulture","walrus","weasel","whale","wolf","zebra"],
    ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling Islands)","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Cote D'Ivoire (Ivory Coast)","Croatia (Hrvatska","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","France, Metropolitan","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Heard and McDonald Islands","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea (North)","Korea (South)","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and The Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovak Republic","Slovenia","Solomon Islands","Somalia","South Africa","S. Georgia and S. Sandwich Isls.","Spain","Sri Lanka","St. Helena","St. Pierre and Miquelon","Sudan","Suriname","Svalbard and Jan Mayen Islands","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","US Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Vatican City State (Holy See)","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (US)","Wallis and Futuna Islands","Western Sahara","Yemen","Yugoslavia","Zaire","Zambia","Zimbabwe"],
    ["bagel","bread","cereal","cheese","croissant","egg","fish","ketchup","mayonnaise","noodles","pancakes","pasta","peanuts","rice","roll","salad","sandwich","shrimp","toast"],
    ["Boxing Day","Canada Day","Carnival","Cinco de Mayo","Columbus Day","Easter","Father's Day","Fourth of July","Groundhog Day","Halloween","Hanukkah","Labor Day","Memorial Day","Mother's Day","Presidents' Day","Saint Patrick's Day","Thanksgiving","Valentine's Day","Veterans Day","Yom Kippur"],
    ["accountant","actor","actress","athlete","author","baker","banker","barber","beautician","broker","burglar","butcher","carpenter","chauffeur","chef","clerk","coach","craftsman","criminal","crook","dentist","doctor","editor","engineer","farmer","fire fighter","fisherman","judge","lawyer","magician","mechanic","musician","nurse","pharmacist","pilot","poet","policeman","politician","printer","professor","rabbi","priest","pastor","sailor","salesman","shoemaker","soldier","tailor","teacher","veterinarian","waiter","waitress","watchmaker"],
    ["The Great Gatsby","To Kill a Mockingbird","Pride and Prejudice","The Catcher in the Rye","Nineteeen Eighty-Four","Lord of the Flies","Animal Farm","Of Mice and Men","Romeo and Juliet","A Tale of Two Cities","Frankenstein","Sense and Sensibility","The Count of Monte Cristo","Emma","The Picture of Dorian Gray","The Hobbit","Great Expectations","The Diary of a Young Girl","Gulliver's Travels","The Secret Garden"],
    ["Abacus","Abscissa","Absolute Value","Base","Bar graph","Binary","Cardinal Number","Cartesian Coordinates","Calculus","Decagon","Decade","Discrete Random Variable","Element","Ellipse","Exponent","Factorial","Fibonacci Sequence","Face","Fractions","Geometric Mean","Geometric Sequence","Gamma","Heptagon","Hexagon","Half","Identity","Improper Fraction","Imaginary","Jump Strategy","Joint Variation","Joule","Kite","Kaprekar Number","Obtuse Angle","Obtuse Triangle","Odd Permutation","Parallelogram","Pentagon","Probability Density Function","Quadratic Equation","Quintic Equation","Quartile Deviation","Range","Rectangle","Root Mean Square Velocity","Straight Line Slope","Square","Sample Variance","Trapezoid","Triangle","Tukeys HSD Test","Union","Upper Quartile","Variable","Vector","Variance","Whole numbers","Weighted Average","Wiens displacement law"],
    ["astrophysics","astronomy","atom","beaker","biochemistry","biology","botany","Bunsen burner","burette","cell","chemical","chemistry","climate","climatologist","control","cuvette","data","datum","electricity","electrochemist","element","energy","entomology","evolution","experiment","fact","flask","fossil","funnel","genetics","geology","geophysics","glassware","graduated cylinder","gravity","herpetology","hypothesis","ichthyology","immunology","lab","laboratory","laws","lepidoptery","magnetism","mass","matter","measure","meteorologist","meteorology","microbiologist","microbiology","microscope","mineral","mineralogy","molecule","motion","observe","observatory","organism","ornithology","paleontology","particle","Petri dish","phase","physical science","physics","pipette","quantum mechanics","radiology","research","retort","scale","science","scientist","seismology","telescope","temperature","test tube","theory","thermometer","tissue","variable","virologist","volcanology","volume","volumetric flask","watch glass","weather","weigh","zoology"]
];

var $catSel = $("#category-select");
var $wordP = $("#hangman-word");
var $instructionsP = $("#instructionsP");
var $hangmanPic = $("#hangman-picture");

$(document).ready(function() {
    initGame();
    $("#go-btn").click(function() {
        launchGame();
    })
});

function launchGame() {
    var index = $catSel.prop('selectedIndex');
    mistakesMade = 0;
    $hangmanPic.attr("src", "./img/hangman0.png");
    word = wordList[index][Math.floor(Math.random() * wordList[index].length)].toUpperCase(); //Returns a random word in the category from the word list
    hiddenWord = word.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/gi, '_'); //Replace all consonants, leaving vowels
    typedBefore = "";
    $instructionsP.text("Press a key from your keyboard to guess!");
    $("#selectedCatP").text("Selected Category: " + catList[index]);
    $wordP.text(hiddenWord);
    $("body").keypress(function(e) {
        var letter = String.fromCharCode(e.which).toUpperCase();
        if (e !== 0 && consonants.indexOf(letter) > -1 && typedBefore.indexOf(letter) === -1) { //Valid consonant not typed before
            if (word.indexOf(letter) > -1) { //If correct letter
                indices = indicesOf(word, letter);
                hiddenWord = hiddenWord.split("");
                for (var i = 0; i < indices.length; i++) {
                    hiddenWord[indices[i]] = letter;
                    console.log(letter);
                }
                hiddenWord = hiddenWord.join("");
                $wordP.text(hiddenWord);
                if (hiddenWord.indexOf("_") === -1) {
                    $instructionsP.text("");
                    $hangmanPic.attr("src", "./img/hangmanwin.png");
                };
            }
            else { //Wrong letter
                mistakesMade++;
                $hangmanPic.attr("src", "./img/hangman" + mistakesMade + ".png");
                if (mistakesMade === 5) {
                    $instructionsP.text("Game Over!");
                    $wordP.text(word);
                };
            }
            typedBefore += letter;
        }
    });
}

function initGame() {
    for (var i = 0; i < catList.length; i++) {
        $catSel.append("<option>"+catList[i]+"</option>");
    }
}

function indicesOf(str, letter) {
    var ans = [];
    for (var i = 0; i < str.length; i++) {
        if(str[i]===letter) ans.push(i);
    };
    return ans;
}