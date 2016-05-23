How to deploy
Welcome to your new Orchard application. Deployment is done via the Git version control system.

Create a Git repository

If you don't already have a Git repository for your app:

$ cd path/to/hellong2
$ git init
$ git add .
$ git commit -m 'Initial Commit'
Add orchard as a remote

$ git remote add orchard git@orchard.apple.com:xiaoqiang-cao/hellong2.git
Push your code

$ git push orchard master