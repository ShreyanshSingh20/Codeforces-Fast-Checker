const express = require("express");


const https = require("https");

const bodyParser = require("body-parser");

const ejs = require('ejs');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 2121, function() {
  console.log("Server is Running on port 2121");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get("/result", function(req, res) {
  res.render("result");
})

app.post("/", function(req, res) {

  //get the Handle and contestId
  var handle = req.body.handle;
  var contestId = req.body.id;

  var handlefound = true;
  var handleurl = "https://codeforces.com/api/user.info?handles=" + handle;
  https.get(handleurl, function(response) {
    response.on("data", function(data) {
      var handledata = JSON.parse(data);
      if (handledata.status == "FAILED") {
        handlefound = false;
        res.status(404).json({
          error: "No Profile Found"
        });
        // stop further execution in this callback
        return;
      }
    })
  })
  if (handle === false || contestId === false) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  } else if (handlefound === false) {
    res.send("not found");
  }

  // console.log(handle);

  var url = "https://codeforces.com/api/contest.status?contestId=" + contestId + "&from=1&count=9999&handle=" + handle + "";

  var contestData = [];
  https.get(url, function(response) {
    response.on("data", function(data) {
      var submissionData = JSON.parse(data);
      res.set("Content-Type", "text/html");


      for (var i = submissionData.result.length - 1; i >= 0; i--) {
        var suburl = "https://codeforces.com/contest/" + contestId + "/submission/" + submissionData.result[i].id + "";
        if (submissionData.result[i].verdict == "OK") {
          var problem = {
            problemIndex: submissionData.result[i].problem.index,
            problemName: submissionData.result[i].problem.name,
            problemTime: submissionData.result[i].timeConsumedMillis,
            problemLang: submissionData.result[i].programmingLanguage,
            problemURL: suburl
          }
          contestData.push(problem);
          // res.write("<b>" + submissionData.result[i].problem.index + "</b>" + " : " + submissionData.result[i].problem.name + " in " + "<b>" + submissionData.result[i].timeConsumedMillis + "</b>" + " milliseconds  LANG: " + "<b>" + submissionData.result[i].programmingLanguage + "</b>" + "--->" + "" + "<a href=" + suburl + ">See Code</a><p>\n</p>");
        }
      }
      res.render("result", {
        handle: handle,
        contestData: contestData
      })

    })
  })

})


app.post("/result", function(req, res) {

  //get the Handle and contestId
  var handle = req.body.handle;
  var contestId = req.body.id;

  var handlefound = true;
  var handleurl = "https://codeforces.com/api/user.info?handles=" + handle;
  https.get(handleurl, function(response) {
    response.on("data", function(data) {
      var handledata = JSON.parse(data);
      if (handledata.status == "FAILED") {
        handlefound = false;
        res.status(404).json({
          error: "No Profile Found"
        });
        // stop further execution in this callback
        return;
      }
    })
  })
  if (handle === false || contestId === false) {
    return res.status(400).json({
      status: 'error',
      error: 'req body cannot be empty',
    });
  } else if (handlefound === false) {
    res.send("not found");
  }

  var url = "https://codeforces.com/api/contest.status?contestId=" + contestId + "&from=1&count=9999&handle=" + handle + "";

  var contestData = [];
  https.get(url, function(response) {
    response.on("data", function(data) {
      var submissionData = JSON.parse(data);
      res.set("Content-Type", "text/html");


      for (var i = submissionData.result.length - 1; i >= 0; i--) {
        var suburl = "https://codeforces.com/contest/" + contestId + "/submission/" + submissionData.result[i].id + "";
        if (submissionData.result[i].verdict == "OK") {
          var problem = {
            problemIndex: submissionData.result[i].problem.index,
            problemName: submissionData.result[i].problem.name,
            problemTime: submissionData.result[i].timeConsumedMillis,
            problemLang: submissionData.result[i].programmingLanguage,
            problemURL: suburl
          }
          contestData.push(problem);
          // res.write("<b>" + submissionData.result[i].problem.index + "</b>" + " : " + submissionData.result[i].problem.name + " in " + "<b>" + submissionData.result[i].timeConsumedMillis + "</b>" + " milliseconds  LANG: " + "<b>" + submissionData.result[i].programmingLanguage + "</b>" + "--->" + "" + "<a href=" + suburl + ">See Code</a><p>\n</p>");
        }
      }
      res.render("result", {
        handle: handle,
        contestData: contestData
      })

    })
  })

})
