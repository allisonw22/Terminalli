import figlet from "figlet";

const commands = {};

const terms = $('body').terminal(commands, {
    greetings
});

const font = 'Small';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.loadFont([font], ready);

const term = $('body').terminal(commands, {
    greetings: false
});

function ready() {
    term.echo(() => {
        const ascii = render("Allison Wong");
        return `Hi, I'm...\n${ascii}\n`
    });
}

function render(text) {
    const cols = term.cols();
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
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