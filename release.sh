#!/usr/bin/env bash
npm run build
ssh -A root@werbepack.ch 'bash -s' <<ENDSSH
  echo pulling...
  cd /var/www/wp-content/plugins/werbepack-vue/
  git pull
ENDSSH
echo 'RELEASED. :-)'

