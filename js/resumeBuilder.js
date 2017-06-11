var bio = {
  name :  "Aline D'Oleron",
  role : "Web developer",
  contacts : {
    mobile: "(81) 99283-8875",
    email: "doleron.aline@gmail.com",
     github: "alinedoleron",
     location: "Recife"
  },
  welcomeMessage: "Welcome,",
  skills : ["HTML", "CSS", "JavaScript","JQuery"],
  biopic : "images/aline_bw.jpg"
  //display: função,
}

var projects = {
  projects: [{
    title: "Projeto #1" ,
    dates: "2017",
    description: "Projeto a ser feito...",
    images: ["images/em-construcao.png"]
  }]
  // display: função
}

var work = {
  jobs: [
  {
    employer: "CIn-UFPE Projeto Motorola",
    title: "Engenheira de Testes",
    location: "Recife-PE",
    dates: "Dez 2014-Jan 2017",
    description: "Execução de testes manuais exploratórios, sanity e regression em aparelhos móveis."
  },
  {
    employer: "Accenture",
    title: "Engenheira de Software",
    location: "Recife-PE",
    dates: "Dez 2013-Dez 2014",
    description: "Projeto Java Web com JSF. Participação na fase de desenvolvimento, deploy, testes e"+
                  "correção de bugs."
  },
  {
    employer: "LIKA Laboratório de Imunopatologia Keizo Asami/UFPE",
    title: "Estagiária em Desenvolvimento Web",
    location: "Recife-PE",
    dates: "Set 2012 – Mai 2013",
    description: "Trabalhei na criação de uma aplicação Web utilizando a linguagem Java com JSF,"+
                " Hibernate e MySQL."
  }]
  //display: função
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile =  HTMLmobile.replace("%data%", bio.contacts["mobile"]);
var formattedEmail =  HTMLemail.replace("%data%", bio.contacts["email"]);
var formattedGithub =  HTMLgithub.replace("%data%", bio.contacts["github"]);
var formattedLocation =  HTMLlocation.replace("%data%", bio.contacts["location"]);
var formattedPictureBio =  HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg =  HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPictureBio);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);

(bio.skills).forEach(function (skill) {
  var formattedSkills =  HTMLskills.replace("%data%", skill);
  $("#skills").append(formattedSkills);
});

$("#workExperience").append(HTMLworkStart);

(function (){
  for (var i = 0; i < (work.jobs).length; i++) {
    var employer = HTMLworkEmployer.replace("%data%",work.jobs[i]["employer"]);
    var title = HTMLworkTitle.replace("%data%",work.jobs[i]["title"]);
    var location = HTMLworkLocation.replace("%data%",work.jobs[i]["location"]);
    var dates = HTMLworkDates.replace("%data%",work.jobs[i]["dates"]);
    var description = HTMLworkDescription.replace("%data%",work.jobs[i]["description"]);
    $("#workExperience .work-entry").append(employer);
    $("#workExperience .work-entry").append(title);
    $("#workExperience .work-entry").append(dates);
    $("#workExperience .work-entry").append(location);
    $("#workExperience .work-entry").append(description);
  }
})();

$("#projects").append(HTMLprojectStart);
for (var i = 0; i < projects.projects.length; i++) {
  var title = HTMLprojectTitle.replace("%data%", projects.projects[i]["title"]);
  var dates = HTMLprojectDates.replace("%data%", projects.projects[i]["dates"]);
  var description = HTMLprojectDescription.replace("%data%", projects.projects[i]["description"]);

  $("#projects .project-entry").append(title);
  $("#projects .project-entry").append(dates);
  $("#projects .project-entry").append(description);
  projects.projects[i].images.forEach(function (img) {
    var image = HTMLprojectImage.replace("%data%", img);
    $("#projects .project-entry").append(image);
  })


}
