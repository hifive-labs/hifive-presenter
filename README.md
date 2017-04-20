Hifive Presentation Assistant 
===============
Using Hifive, Reveal.js and Socket.io to make presentation assistant.

## Install
git clone http://tritoma.o.sysrdc.ns-sol.co.jp/gitbucket/git/hifive/hifive-presenter.git  
cd Hi-PA  
npm install  

## Start Server
cd src  
node app.js  

## Confirm
Open multi tab (or windows) and access http://localhost:3000.  
Click right,left,up,down button to confirm operation of slides and socket.  

## Notes (will be developed in the next version)
- Data sync (Init/Add/Remove slides in one windows, other windows will be updated)
- TriggerKey (Eg: click B key to hide temporarily the content of current slide)
- ...