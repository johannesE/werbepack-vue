#!/usr/bin/env bash
npm run build
git add .
git status
read -p "Enter commit message: " message
git commit -m "$message"
git push origin master
sleep 1
ssh -A root@werbepack.ch 'bash -s' <<ENDSSH
  echo pulling...
  cd /var/www/wp-content/plugins/werbepack-vue/
  git pull
ENDSSH
echo 'RELEASED. :-)'

