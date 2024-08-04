const font = 'Small';

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
        },
        abouta: function() {
            this.echo(abouta);
        },
        projects: function() {
            this.echo(projects);
        },
        contact: function() {
            this.echo(contact);
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
