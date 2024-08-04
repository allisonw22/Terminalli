
const old_commands = {};

const font = 'Small';

const help = "\n\tabouta         Who even is Allison?\n" +
"\tprojects       Some fun coding projects\n" +
"\tskills         Is she even hireable?\n" +
"\thobbies        Life away from the computer\n" +
"\tcontact        Please contact this very hireable person\n" +
"\tresources      Acknowledgements in helping create this\n";

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.loadFont([font], ready);

// uhh it doesn't use this but...
var term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    onInit() {
        this.echo(() => render(this, "Allison Wong"));
    }
});

// also doesn't use this but I wanna...
const commands = {
    banner: function() {
        term.echo(() => render(this, "Allison Wong"));
    }
};

function ready() {
    term = $('body').terminal({
        banner: function() {
            this.echo(() => render(this, "Allison Wong"));
        },
        help: function() {
            this.echo(help);
        }
    }, {
        greetings: false,
        onInit() {
            this.echo(() => render(this, "Allison Wong"));
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
    return `Hi, I'm...\n${ascii}\nWelcome to my interactive web terminal.\nFor a list of commands, type 'help'.\n`;
}



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