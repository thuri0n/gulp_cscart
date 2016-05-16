check version node -v(if no such file: sudo ln -s `which nodejs` /usr/bin/node)
sudo apt-get install npm
sudo npm init

sudo npm install -g gulp && sudo npm install --save-dev gulp && sudo npm install browser-sync -g && sudo npm install browser-sync --save-dev && sudo npm install gulp-less -g && sudo npm install gulp-less --save-dev && sudo npm install gulp-concat -g && sudo npm install gulp-concat --save-dev && sudo npm install gulp-minify-css -g && sudo npm install gulp-minify-css --save-dev && sudo npm install gulp-rename -g && sudo npm install gulp-rename --save-dev && sudo npm install gulp-imagemin -g && sudo npm install gulp-imagemin --save-dev && sudo npm install gulp.spritesmith -g && sudo npm install gulp.spritesmith --save-dev && sudo npm install -g gulp-notify && sudo npm install --save-dev gulp-notify && sudo npm install -g gulp-uglify && sudo npm install --save-dev gulp-uglify

sudo npm install --save-dev gulp && sudo npm install browser-sync --save-dev && sudo npm install gulp-less --save-dev && sudo npm install gulp-concat --save-dev && sudo npm install gulp-minify-css --save-dev && sudo npm install gulp-rename --save-dev && sudo npm install gulp-imagemin --save-dev && sudo npm install gulp.spritesmith --save-dev && sudo npm install --save-dev gulp-uglify

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p (for linux)
