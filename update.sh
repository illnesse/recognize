chown -R root:root ../recognize/
make
npm run build
#php composer.phar install
chown -R www-data:www-data ../recognize/ 
