var og = document.getElementById("og");
var lines = document.getElementById("lines");
var command = document.getElementById("command");
var textarea = document.getElementById("textarea");
var terminal = document.getElementById("terminal");

var commands = [];
var idx = [];

function command(cmd) {
    switch (cmd.toLowerCase()) {
        case 'help':
            help;
            break;
        case 'aboutalli':
            aboutalli;
            break;
        case 'projects':
            projects;
            break;
        case 'skills':
            skills;
            break;
        case 'hobbies':
            hobbies;
            break;
        case 'contact':
            contact;
            break;
        case 'resources':
            resources;
            break;
        case 'clear':
            clear;
            break;
    }
}

function enterKey(e) {
    // literally what even is 181
    if (e.keyCode == 181) {
        document.location.reload(true)
    }
    // return key
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        idx = commands.length;
        liner(command.innerHTML, "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    // up arrow to display the command prior
    if (e.keyCode == 38 && idx != 0) {
        idx -= 1;
        textarea,value = commands[idx];
        command.innerHTML = textarea.value;
    }
    // down arrow to display the command below
    if (e.keyCode == 40 && idx != commands.length) {
        git += 1;
        if (commands[idx] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[idx];
        }
        command.innerHTML = textarea.value;
    }
}