# Codeforces-Fast-Checker
An efficient Web App to study other participants codes during Practice Sessions more quickly and categorically sorted by Contests.

# Current Working Web App Link
https://codeforcesfastchecker.herokuapp.com/

# About The Project
* This project uses _Node.js_ and _Express_ module.
* The front end was done using _Bootstrap_ along with basic _CSS_.

# Features

Often during solving and practicing problems on codeforces we look at other participants codes and submissions to get a better understanding of the implementation ,usually the top rated participant's code.

This process of looking up other participants code is a bit of tedious process because we first have to go the problem, then to dashboard, then to standings,
and if we don't find the participant whose code we are looking for then it becomes a little hard to find and go through all his/her submissions in his/her profile if he's/she's not added as a friend.

### To make this process easier , Codeforces Fast Checker just takes the handle and the contest ID as input and gives you all the submissions the participant has made of the mentioned contest along with other details such as _Time consumed_, _Language_ and a _direct_ link to the participant's submissions

# How To Use?
* Just go on the link [here](https://codeforcesfastchecker.herokuapp.com/)
* Type in the handle of the desired participant (The browser will cache the handle entries after a few uses so that you will not have to type in again and again).
* Type in the Contest Id (Contest id the 3/4 digits number present in the URL of the problem page) E.G-https://codeforces.com/problemset/problem/1515/A , here 1515 is the contest ID

![1](https://user-images.githubusercontent.com/65785547/118090676-7663c780-b3e7-11eb-95ae-0f22dc291c77.jpg)

* The following result page will appear:-

![2](https://user-images.githubusercontent.com/65785547/118090703-7fed2f80-b3e7-11eb-89bb-bfcf4df5d39c.jpg)

# ISSUES
* If you type the wrong contest ID the site gives _APPLICATION ERROR_, just click on the back button to go the home page.
