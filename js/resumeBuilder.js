var bio = {
    name: "Aline D'Oleron",
    role: "Web developer",
    contacts: {
        mobile: "(81) 99283-8875",
        email: "doleron.aline@gmail.com",
        github: "alinedoleron",
        twitter: "",
        location: "R. Dr. Pedro de Melo Cahú. Recife-PE"
    },
    welcomeMessage: "Olá, aqui você encontrar algumas informações sobre minhas habilidades profissionais.",
    skills: ["HTML", "CSS", "JavaScript", "JQuery"],
    biopic: "images/aline_bw.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPictureBio = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedPictureBio);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);

        (bio.skills).forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

var projects = {
    projects: [{
        title: "Projeto #1",
        dates: "2017",
        description: "Projeto a ser feito...",
        images: ["images/em-construcao.png"]
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $("#projects .project-entry").append(title);
            $("#projects .project-entry").append(dates);
            $("#projects .project-entry").append(description);
            projects.projects[i].images.forEach(function(img) {
                var image = HTMLprojectImage.replace("%data%", img);
                $("#projects .project-entry").append(image);
            });
        }
    }
};

var work = {
    jobs: [{
            employer: "CIn-UFPE Projeto Motorola",
            title: "Engenheira de Testes",
            location: "Av. Jorn. Aníbal Fernandes. Recife-PE",
            dates: "Dez 2014-Jan 2017",
            description: "Execução de testes manuais exploratórios, sanity e regression em aparelhos móveis."
        },
        {
            employer: "Accenture",
            title: "Engenheira de Software",
            location: "Rua Cais do Apolo, 222. Recife-PE",
            dates: "Dez 2013-Dez 2014",
            description: "Projeto Java Web com JSF. Participação na fase de desenvolvimento, deploy, testes e" +
                "correção de bugs."
        },
        {
            employer: "LIKA Laboratório de Imunopatologia Keizo Asami/UFPE",
            title: "Estagiária em Desenvolvimento Web",
            location: "Av. Prof. Moraes Rego, 1235. Recife-PE",
            dates: "Set 2012 – Mai 2013",
            description: "Trabalhei na criação de uma aplicação Web utilizando a linguagem Java com JSF," +
                " Hibernate e MySQL."
        }
    ],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < (work.jobs).length; i++) {
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var employerTitle = employer + title;
            $("#workExperience .work-entry").append(employerTitle);
            $("#workExperience .work-entry").append(dates);
            $("#workExperience .work-entry").append(location);
            $("#workExperience .work-entry").append(description);
        }
    }
};

var education = {
    schools: [{
        name: "Universidade Federal de Pernambuco, UFPE",
        location: "Av. Prof. Moraes Rego, 1235. Recife-PE",
        degree: "Engenharia da Computação",
        majors: ["Computer Engineering"],
        dates: "Mai 2013",
        url: ""
    }],
    onlineCourses: [{
        title: "Desenvolvedor Web Front-End Nanodegree Program",
        school: "Udacity",
        dates: "Mai - 2017",
        url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < (education.schools).length; i++) {
            var name = HTMLschoolName.replace("%data%", education.schools[i].name);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            var nameDegree = name + degree;

            $("#education .education-entry").append(nameDegree);
            $("#education .education-entry").append(location);
            $("#education .education-entry").append(dates);
            if (education.schools[i].majors.length > 0) {
                education.schools[i].majors.forEach(function(major) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                    $("#education .education-entry").append(formattedMajor);
                });
            }
        }

        $("#education .education-entry").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            var titleOnline = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var schollOnline = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            var datesOnline = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var urlOnline = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            var titleSchool = titleOnline + schollOnline;
            $("#education .education-entry").append(titleSchool);
            $("#education .education-entry").append(datesOnline);
            $("#education .education-entry").append(urlOnline);
        }
    }
};

bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
