
const commands = {};

const font = 'Small';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.loadFont([font], ready);

var term;

function ready() {
    term = $('body').terminal({
        banner: function() {
            this.echo(() => render(this, "Allison Wong"));
        }
    }, {
        greetings: false,
        onInit() {
            this.echo(() => render(this, "Allison Wong"))
        }
    });
}

function render(term, text) {
    const cols = term.cols();
    const ascii = figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
    return `Hi, I'm...\n${ascii}\n`;
}

help = [
    "<br>",
    'abouta         Who even is Allison?',
    'projects       Some fun coding projects',
    'skills         Is she even hireable?',
    'hobbies        Life away from the computer',
    'contact        Please contact this very hireable person',
    'resources      Acknowledgements in helping create this',
    'clear          Erase my existence',
    "<br>"
];

var linkedin = "https://www.linkedin.com/in/allisonwong22";

abouta = [
    "<br>",
    "Hi, I'm Allison (or alli)!",
    "Welcome to a mini project/portfolio all about me & my hobbies :)",
    "I'm a software developer, ... blah blah blah",
    "<br>"
];

projects = [
    "<br>",
    "Current code is still under construction... polishing some bits and bytes, but coming soon :)"
]

contact = [
    "<br>",
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/allisonw22' +  '</a>',
    "<br>"
];